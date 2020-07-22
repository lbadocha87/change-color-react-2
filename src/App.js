import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import ButtonsPanel from './ButtonsPanel';

class App extends Component {


  constructor() {
    super();
    this.state = {
      headingColor: 'red'
    }
  }

  changeColor = (colorValue) => {
    this.setState({headingColor: colorValue})
  }
  

  render() {
    return (
      <div className="App">
        <Heading classColor={this.state.headingColor} />
        <ButtonsPanel changeColorHeandler={this.changeColor} />
      </div>
    );
  }
  
}

export default App;
