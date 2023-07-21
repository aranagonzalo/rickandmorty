import { useState } from "react";
import Card from "../Card/Card";
import { useDispatch, connect } from "react-redux";
import {filterCards, orderCards, closeFavorites} from '../../redux/actions';
import style from "./Favorites.module.css";

function Favorites({myFavorites}) {

    const dispatch = useDispatch();

    const [aux, setAux] = useState(false);

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
        setAux(!aux);
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value));
    }

    const onClose = (id) => {
        dispatch(closeFavorites(id));
    }

    return (
        <>
            <div className={style.selectBox}>
                <select className={style.select} onChange={handleOrder}>
                    <option value="A">Ascendending</option>
                    <option value="D">Descending</option>
                </select>
                <select className={style.select} onChange={handleFilter}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div className={`${style.cards} row`}>
                {console.log(myFavorites)}
                {myFavorites?.map(({id, name, gender, status, species, origin, image}) => {
                    return (
                        <Card
                            key={id}
                            id={id}
                            onClose={onClose}
                            name={name}
                            gender={gender}
                            status={status}
                            species={species}
                            origin={origin}
                            image={image}
                        />
                    );
                })}
            </div>
        </>
    )
}

export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites,
        allCharacters: state.allCharacters,
    }
}

export default connect(mapStateToProps)(Favorites);