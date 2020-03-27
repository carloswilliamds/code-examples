import React, {Component} from 'react';
import './App.css';
import Header from './components/header/header';
import api from "./services/api"
import Routes from "./routes"

class App extends Component {
  render(){
    return(
      <>
        <Routes />
      </>
    )
  }
}

export default App;
