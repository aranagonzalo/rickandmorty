import style from './Card.module.css';
import { CgClose } from 'react-icons/cg';
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import {addFav, removeFav} from '../../redux/actions';
import { connect } from 'react-redux';

export function Card(props) {

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
   props.myFavorites?.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [props.myFavorites,props.id]);


  const handleFavorite = () => {
    if (isFav){
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav({
        id: props.id,
        name: props.name,
        status: props.status,
        species: props.species,
        origin: props.origin,
        gender: props.gender,
        image: props.image
      });
    }
  }

  return (
    <div className={`${style.cardWrapper} col-md-6 col-lg-4`}>
      <div className={style.cardInner}>
        {isFav ? (<button className={style.heart} onClick={handleFavorite}>❤️</button>) : (<button className={style.heart} onClick={handleFavorite}>🤍</button>)}
        <img src={props.image} alt={props.name} />
        <button className={style.close} onClick={() => {props.onClose(props.id)}}><CgClose/></button>
        <Link className={style.nameLink} to={`/detail/${props.id}`}>
          <h2 className={style.name}>{props.name}</h2>
        </Link>
        <h2><span>Status:</span> {props.status}</h2>
        <h2><span>Species:</span> {props.species}</h2>
        <h2><span>Gender:</span> {props.gender}</h2>
        <h2><span>Origin:</span> {props.origin}</h2>
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  }
}

export function mapDispatchToProps(dispatch){
  return {
    addFav: function(character){
      dispatch(addFav(character));
    },
    removeFav: function(character){
      dispatch(removeFav(character));
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);