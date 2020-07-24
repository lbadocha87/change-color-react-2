import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import ButtonsPanel from './ButtonsPanel';

class App extends Component {


  constructor() {
    super();
    this.state = {
      headingColor: 'red',
      headingText: 'Default Heading Text',
      users: ['Adam', 'Ola', 'Kasia', 'Tomek']
    }
  }

  changeColor = (colorValue) => {
    this.setState({headingColor: colorValue})
  }

  setText = (e) => {
    this.setState({headingText: e.target.value})
  }
  

  render() {

    let listItems = this.state.users.map((user, index)=>{
      return <li key={index}>{user}</li>;
    });

    console.log(listItems);

    return (
      <div className="App">
        <Heading classColor={this.state.headingColor} text={this.state.headingText} />
        <ButtonsPanel changeColorHeandler={this.changeColor} changeTextHeandler={this.setText} />

        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
  
}

export default App;
