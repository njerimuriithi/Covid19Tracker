import React from 'react';
import Cards from './components/Cards/Cards'
import CountryPicker from './components/CountryPicker/CountryPicker'
import Chart from './components/Chart/Chart'



import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;

/*import React, { Component } from 'react'
import styles from './App.module.css'
import{fetchData} from './api'
//components import
import Cards from './components/Cards/Cards'
import CountryPicker from './components/CountryPicker/CountryPicker'
//import Chart from './components/Chart/Chart'


class App extends Component {
  state={
    data:{},
  }

  async componentDidMount(){
    const fetcheddata =await fetchData();

    this.setState({data:fetcheddata})
   
  }
  

  render() {
    const {data} = this.state;
    return (
      <div className ={styles.container}>
        <h1> My first react project</h1>
        <Cards  data ={data}/>
        <CountryPicker/>
     
        
      </div>
    );
  }
}

export default App;

/*import React,{Component} from "react";

import {Cards , Chart,CountryPicker} from './components'

class App extends Component {
  async componentDidMount(){
    const data =await fetchData();
    console.log(data)
  }

  render() {
    return (
      <div className ={styles.container}>
        <h1> My first react project</h1>
        <Cards/>
        <CountryPicker/>
        
      </div>
    );
  }
}

export default App;
*/



