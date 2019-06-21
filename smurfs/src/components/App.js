import React from 'react';
import { connect } from 'react-redux';
import './App.scss';

import Smurfs from './Smurfs';
import { fetchSmurfs } from '../actions';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    if (this.props.fetching) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className='App'>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className='MainContainer'>
          <Smurfs smurfs={this.props.smurfs} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(App);
