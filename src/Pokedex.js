import React from 'react';
import Pokecard from "./Pokecard"
import "./Pokedex.css";

const Pokedex = ({pokemon, exp, isWinner}) => (
    <div className="Pokedex">
        {pokemon.map((p) => (
            <Pokecard className = "Pokedex-Pokecard" name = {p.name} id={p.id} exp={p.base_experience} type={p.type}/>
        ))}
        <br/>
        <b>Total Exp: {exp} </b>
        <br/>
        {isWinner ? <b>THIS HAND WINS!</b> : <div></div>}
    </div>
);

export default Pokedex;