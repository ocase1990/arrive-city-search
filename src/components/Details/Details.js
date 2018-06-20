import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      results: []
    };

  }
  componentWillMount() {

  }

  render() {
    let display = '';
    let divStyle = {
      padding: '15px 15px 15px 0px',
      width: '800px'
    };
    let resultsStyle = {
      width: '850px'
    };
    const {
      details,
    } = this.props


      display = 
          (
            <div style={divStyle}>
              <h1>{details.title}</h1>
              <h4>{details.explanation}</h4>
              <img src={details.url}/>

            </div>


          )


    return (
      <div>
        {display}
      </div>
    );
  }

}
