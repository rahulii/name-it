import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import React, { Component } from 'react'
import SearchBox from './components/SearchBox/SearchBox';
import ResultsContainer from './components/ResultsContainer/ResultsContainer';

const name = require('@rstacruz/startup-name-generator');


class App extends Component {
  state = {
    headerText : "Name It",
    headerExpanded : true,
    suggestedNames : []
  }
  handleInputChange = (inputText) => {
    this.setState({
      headerExpanded : inputText.length > 0 ? false : true,
      suggestedNames : inputText? name(inputText): []
    })
  }
  render(){
  return (
    <div className="App">
        <Header headerText = { this.state.headerText} headerExpanded = { this.state.headerExpanded }/>
        <SearchBox handleInputChange = { this.handleInputChange }  />
        <ResultsContainer  suggestedNames = { this.state.suggestedNames }/>
    </div>
  );
}
}

export default App;
