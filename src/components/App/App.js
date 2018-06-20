import React, { Component } from 'react';
import Details from '../Details';
import Calendar from 'react-calendar';
import 'semantic-ui-css/semantic.min.css';
import { Input, Form, Button } from 'semantic-ui-react'

import {
  BrowserRouter,
  Route,
  Switch
 } from "react-router-dom";


import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      results: []
    };
  }

  componentDidMount() {

  }
/* switch statement to turn the ohject into an easily read format for the api */

  onChange = ((date) => {
    console.log(date);
    let temp;
    if (date.length > 1) {
      temp = date;
    } else {
      temp = date.toString().split(" ");
      switch(temp[1]) {
        case 'Jan':
          temp[1] = '01'
          break;
        case 'Feb':
          temp[1] = '02'
          break;
        case 'Mar':
          temp[1] = '03'
          break;
        case 'Apr':
          temp[1] = '04'
          break;
        case 'May':
          temp[1] = '05'
          break;
        case 'Jun':
          temp[1] = '06'
          break;
        case 'Jul':
          temp[1] = '07'
          break;
        case 'Aug':
          temp[1] = '08'
          break;
        case 'Sep':
          temp[1] = '09'
          break;
        case 'Oct':
          temp[1] = '10'
          break;
        case 'Nov':
          temp[1] = '11'
          break;
        case 'Dec':
          temp[1] = '12'
          break;
      }
      temp = temp[3] + '-' + temp[1] + '-' + temp[2];
    }



    this.setState({ date })
    this.props.fetchDetails(temp);
});

<<<<<<< HEAD
/*  PLEASE In the form with button in app it uses the input value to change the city
in state when you submit (enter key or click the button). This then updates
props with the carriers in that city with the fetch call.
*/
=======
>>>>>>> c32e386f972b99df15d63f75e9fe05fd90e49da3
  render() {


    return (
      <div className="App">
          <h1> Welcome to Nasa's APOD selector! </h1>

        <div className="calStyle">

          <h2> Pick a date... </h2>
          <Calendar
            className="show"
            onChange={this.onChange}
            value={this.state.date}
          />
        </div>

        <div className="calStyle">

          <h2> Pick a range </h2>
          <Calendar
            className="hide"
            onChange={this.onChange}
            value={this.state.date}
            selectRange={true}
          />
        </div>



         <Details />

      </div>
    );
  }

}
