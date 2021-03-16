import React, { Component } from 'react'
import DisplayData from './DisplayData'
import './index.css'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      items: [],
      isLoaded: false,
    }
    this.loadCustomerData = this.loadCustomerData.bind(this);
    this.clearCustomerData = this.clearCustomerData.bind(this);
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         isLoad: true,
  //         items: json,
  //       })
  //     });
  // }

  loadCustomerData() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      this.setState({
        items: json,
        isLoad: true,
      })
    });
  }

  clearCustomerData() {
      this.setState({
        items: [],
        isLoad: false,
      });

    console.log('Data cleared ');
  }

  render() {
    return (
      <>
        <h1>Welcome to Customer Info List </h1>
        <button className="button button1" onClick={this.loadCustomerData}>Load Data from Jsonplaceholder</button>&nbsp;&nbsp;
        <button className="button button1" onClick={this.clearCustomerData}>Clear Data</button>&nbsp;&nbsp;
        
        <DisplayData items={this.state.items} />
        
      </>
    );
    
  }
}

export default App;
