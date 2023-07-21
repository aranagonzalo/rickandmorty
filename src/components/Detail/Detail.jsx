import axios from "axios";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import style from "./Detail.module.css";


export default function Detail() {

    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
        if (data.name) {
            setCharacter(data);
            console.log(data);
        } else {
            window.alert("No hay personajes con ese ID");
        }
    });
        return setCharacter({});
    }, [id]);

    return (
        <div className={`${style.container} row`}>
            <div className={`${style.left} col-lg-6`}>
                <img src={character.image} alt={character.name}/>
            </div>
            <div className={`${style.right} col-lg-6`}>
                <h1>{character.name}</h1>
                <p>Species: {character.species}</p>
                <p>Status: {character.status}</p>
                <p>Gender: {character.gender}</p>
                <p>Origin: {character.origin?.name}</p>
                <p>Location: {character.location?.name}</p>
            </div>
        </div>
    )
}