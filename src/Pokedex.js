import React, { Component } from 'react';
import './Pokedex.css';

import Pokecard from './Pokecard';

class Pokedex extends Component {
  state = {};

  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className='Pokedex-winner'>WINNER!</h1>;
    } else {
      title = <h1 className='Pokedex-looser'>LOOSER!</h1>;
    }
    return (
      <React.Fragment>
        <div className='Pokedex'>
          <h1>Pokedex Here!</h1>
          <h4>Total Experience: {this.props.exp} </h4>
          {title}
          <div className='Pokedex-cards'>
            {' '}
            {this.props.pokemon.map(p => (
              <Pokecard
                id={p.id}
                name={p.name}
                type={p.type}
                exp={p.base_experience}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Pokedex;
