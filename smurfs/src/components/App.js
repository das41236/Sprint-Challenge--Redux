import React, { Component } from 'react';
import './App.css';
import Smurfs from './Smurf';
import SmurfForm from './SmurfForm';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  
  componentDidMout() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <div>
        <SmurfForm />
        </div>
        <div>
        <Smurfs smurfs={this.props.smurfs} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { smurfReducer } = state;
  return {
    smurfs: smurfReducer.smurfs,
    error: smurfReducer.error,
    gettingFriends: smurfReducer.gettingFriends
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
