import React from 'react';
import Pokecard from "./Pokecard"
import "./Pokedex.css";

const Pokedex = ({pokemon}) => (
    <div className="Pokedex">
        {pokemon.map((p) => (
            <Pokecard className = "Pokedex-Pokecard" name = {p.name} id={p.id} exp={p.base_experience} type={p.type}/>
        ))}
    </div>
);

export default Pokedex;