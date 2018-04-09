import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };

  }
  componentDidMount() {
    this.props.fetchDetails(this.props.id);
  }
/*
  Nested details displayed and divs content toggled with onClick setState of visible
*/
  render() {
    let detailDivs = '';
    let buttonText = 'Show Details';
    const {
      details,
    } = this.props

// IF TABLE/DETAILS IS CURRENTLY BEING DISPLAYED GIVE THE DIVS CONTENT AND HAVE BUTTON READ 'Hide Details'
    if (this.state.visible) {
      buttonText = 'Hide Details';
      detailDivs = (
        <Table celled>
          <Table.Header>
            <Table.HeaderCell>Capabilities</Table.HeaderCell>
            <Table.HeaderCell>Price Per Load</Table.HeaderCell>
            <Table.HeaderCell>Contact</Table.HeaderCell>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                {details.Capabilities.map(c => <li key={c}>{c}</li>)}
              </Table.Cell>
              <Table.Cell><li>{details.PricePerLoad}</li></Table.Cell>
              <Table.Cell>
                <li>{details.ContactName}</li>
                <li>{details.ContactPhone}</li>
                <li>{details.ContactEmail}</li>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

      )
    } else {
      buttonText = "Show Details";
      detailDivs = "";
    } // IF DETAILS ARE CURRENTLY HIDDEN HAVE BUTTON READ 'Show Details'

    return (
      <div>
        <Button
          primary
          onClick={() => {
          this.setState({
            visible: !this.state.visible
          });
        }}>{buttonText}</Button>
        {detailDivs}
      </div>
    );
  }

}
