import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MultiSelectBox from './Multiselect.js'
// import FabricDropdown from './FabricDropdown.js'


class App extends Component {

  constructor() {
    super();
    this.state = {

      selectBoxData: []
    };
  }



  componentDidMount = () => {
    let selectBoxData = [
      {
        key: 'corn',
        value: 'Corn',
        text: 'Corn'
      },
      {
        key: 'capsicum',
        value: 'Capsicum',
        text: 'Capsicum'
      },
      {
        key: 'onion',
        value: 'Onions',
        text: 'Onions'
      },
      {
        key: 'paneer',
        value: 'Paneer',
        text: 'Paneer'
      }
    ];
    this.setState({ selectBoxData: selectBoxData });
  }

  onSelectedItems = (items) => {
    console.log(items);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MultiSelectBox
          selectedItems={this.onSelectedItems}
          selectBoxData={this.state.selectBoxData} />
        {/* <div>
          <FabricDropdown selectBoxData={this.state.selectBoxData} />
        </div> */}
      </div>
    );
  }
}

export default App;
