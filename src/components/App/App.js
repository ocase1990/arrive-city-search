import React, { Component } from 'react';
import Carriers from '../Carriers';
import 'semantic-ui-css/semantic.min.css';
import { Input, Form, Button } from 'semantic-ui-react'


import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      results: []
    };
  }

  componentDidMount() {
    this.props.fetchCarriers(this.state.city);
  }

/* In the form with button in app it uses the input value to change the city
in state when you submit (enter key or click the button). This then updates
props with the carriers in that city with the fetch call.
*/
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h3>Carriers by city: </h3>
          <Form onSubmit={(e) => {
            e.preventDefault();
            this.componentDidMount();
          }}>
            <Input
              icon="search"
              onChange={(e) => {
              const city = e.target.value;
              this.setState({
                city: city
              });
            }}
              placeholder="Anywhere..."
            />
            <Button primary> Search</Button>
         </Form>
         </div>
         <Carriers />
      </div>
    );
  }

}
