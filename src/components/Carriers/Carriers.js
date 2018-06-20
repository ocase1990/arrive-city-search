import React, { Component } from 'react';
import Details from '../Details';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default class Carriers extends Component {
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
      padding: '15px 15px 15px 0px'
    };
    let resultsStyle = {
      width: '850px'
    };
    const {
      carriers,
    } = this.props

    // IF NO CARRIERS FOUND MAKE DISPLAY THE ERROR MESSAGE AND DISPLAY
    if (carriers !== 'No carriers found with provided city') {
      display = carriers.map(
        (carriers, index) =>

          (
            <Table.Row key={index}>
              <Table.Cell>
                <strong>{carriers.Name}</strong>
              </Table.Cell>
              <Table.Cell>
                {carriers.Locations.map((carrier, index) => {
                 return <div key={index}>{carrier.City} {carrier.State}</div>
               })
                }
              </Table.Cell>
              <Table.Cell>
                <Details id={carriers.Id} />
              </Table.Cell>
            </Table.Row>

          )
      )
    } else {
      display = carriers;
    }

    return (
      <div style={resultsStyle}>
        <Table fixed celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={3}>Carrier</Table.HeaderCell>
              <Table.HeaderCell width={3}>Locations</Table.HeaderCell>
              <Table.HeaderCell>Details</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {display}
          </Table.Body>

        </Table>
      </div>
    );
  }

}
