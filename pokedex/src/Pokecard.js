import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

const padToThree = (number) => {
    if (number < 10) {
        return `00${number}`;
    } else if (number >- 10 && number < 100) {
        return `0${number}`;
    } else {
        return `${number}`;
    }
};

class Pokecard extends Component {
    render() {
        const {id, name, type, exp} = this.props;
        console.log(padToThree(id));
        let imgSrc = `${POKE_API}${padToThree(id)}.png`;
        return (
            <div className="Pokecard">
                <h3 className="Pokecard-title">{name}</h3>
                <div className="Pokecard-image">
                    <img src={imgSrc} alt={name} />
                </div>
                <div className="Pokecard-data">Type: {type}</div>
                <div className="Pokecard-data">EXP: {exp}</div>
            </div>
        )
    }
}

export default Pokecard;