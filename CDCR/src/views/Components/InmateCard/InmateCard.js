import React, {Component} from "react";
import {Container, Collapse, Row, Col, Card, CardHeader, CardBlock, CardFooter, Button, Input, InputGroup, Table, Badge, InputGroupAddon} from "reactstrap";
import axios from 'axios';

class InmateCard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: true };
  }

  toggle() {
    console.log("Collapsing")
    this.setState({ collapse: !this.state.collapse });
  }

 render() {
    return (
      <Row>
        <Col xs="12" sm="12" md="12">
          <Card className="card-accent-primary">
            <CardHeader>
              <i className="fa fa-align-justify" onClick={this.toggle}></i> {this.props.prisonerData[4]} {this.props.prisonerData[5]} {this.props.prisonerData[6]}
            </CardHeader>
            <Collapse isOpen={this.state.collapse}>
              <CardBlock className="card-body">
                <Table responsive>
                  <tbody>
                    <tr>
                      <td>Prisoner Id:</td>
                      <td>{this.props.prisonerData[0]}</td>
                    </tr>
                    <tr>
                      <td>Gender:</td>
                      <td>{this.props.prisonerData[1]}</td>
                    </tr>
                    <tr>
                      <td>Prison Id:</td>
                      <td>{this.props.prisonerData[2]}</td>
                    </tr>
                    <tr>
                      <td>Probation Status:</td>
                      <td>{this.props.prisonerData[3]}</td>
                    </tr>
                    <tr>
                      <td>Mailing Address:</td>
                      <td>{this.props.prisonerData[7]}</td>
                    </tr>
                    <tr>
                      <td>Other Details:</td>
                      <td>{this.props.prisonerData[8]}</td>
                    </tr>
                    <tr>
                      <td>Blood Type:</td>
                      <td>{this.props.prisonerData[9]}</td>
                    </tr>
                    <tr>
                      <td>Dietary Restrictions:</td>
                      <td>{this.props.prisonerData[10]}</td>
                    </tr>
                    <tr>
                      <td>Allergy Restrictions:</td>
                      <td>{this.props.prisonerData[11]}</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBlock>
            </Collapse>
          </Card>
        </Col>
      </Row>

   );
  }
}


export default InmateCard;
