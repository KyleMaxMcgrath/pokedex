import Pokedex from './Pokedex';

const Pokegame = ({pokemon}) => {
    for(let i = 0; i < pokemon.length; i++) {
        let idx = Math.floor(Math.random()*pokemon.length);
        let p = pokemon[idx];
        pokemon[idx] = pokemon[i];
        pokemon[i] = p;
    }
    let pokemon1 = pokemon.slice(0,4);
    let pokemon2 = pokemon.slice(4);
    let exp1 = pokemon1.reduce((acc, p) => (acc+=p.base_experience), 0);
    let exp2 = pokemon2.reduce((acc, p) => (acc+=p.base_experience), 0);
    let pokemon1Wins = exp1>exp2 ? true : false;
    return (
        <div className="App">
            <Pokedex pokemon={pokemon1} exp={exp1} isWinner={pokemon1Wins}/>
            <Pokedex pokemon={pokemon2} exp={exp2} isWinner={!pokemon1Wins} />
        </div>
    )
}

export default Pokegame;