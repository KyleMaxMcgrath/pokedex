import React from 'react';
import './Pokecard.css'

const Pokecard = ({id, name, type, exp}) => (
    <div className="Pokecard">
        <b className="Pokecard-name">{name}</b>
        <br/>
        <img alt={name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} className="Pokecard-img" />
        <div className="Pokecard-type">Type: {type}</div>
        <div className="Pokecard-exp">Exp: {exp}</div>
    </div>
);

export default Pokecard;