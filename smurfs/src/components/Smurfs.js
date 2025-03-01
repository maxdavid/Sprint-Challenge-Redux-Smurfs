import React, { Component } from 'react';

import Smurf from './Smurf';
import './App.scss';

class Smurfs extends Component {
  render() {
    return (
      <div className='Smurfs'>
        {this.props.smurfs.map(smurf => {
          return (
            <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
            />
          );
        })}
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
