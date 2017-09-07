import React, {Component} from "react";
import {Container, Row, Col, Card, CardHeader, CardBlock, CardFooter, Button, Input, InputGroup, Table, Badge, InputGroupAddon} from "reactstrap";
import axios from 'axios';
import InmateCard from '../InmateCard';
import { connect } from 'react-redux';
import { inmateListFind } from '../../../actions';
import {
  inmatesList,
  inmates_loading,
  inmates_loading_error
} from '../../../actions/types';

class InmateSearch extends Component {
    constructor(props) {
    super(props);
    this.state = {
      inmateID: '',
      prisonID: '',
      inmateInfo: '',
      prisonInfo: ''
    };

    this.inmateID = this.inmateID.bind(this);
    this.prisonID = this.prisonID.bind(this);
    this.prisonerButtonClicked = this.prisonerButtonClicked.bind(this);
    }


   inmateID(event) {
    this.setState({
      inmateID: event.target.value});
    console.log(this.state.inmateID)
  }

    prisonID(event) {
    this.setState({
      prisonID: event.target.value});
    console.log(this.state.prisonID)
  }

  prisonerSet(){

    console.log('hello')
  }

  prisonerButtonClicked(event) {
    axios.get(`https://adminapi-gse00012258.apaas.us6.oraclecloud.com/api/inmate/byInmateID?id=${this.state.inmateID}`)
      .then(function(response) {
        console.log("data " ,response.data);
        this.setState({
          inmateInfo: response.data.message[0]
        })
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
  }

  prisonButtonClicked(event){
    axios.get(`https://adminapi-gse00012258.apaas.us6.oraclecloud.com/api/inmate/byPrisonID?id=${this.state.prisonID}`)
      .then(function(response) {
        console.log("data " ,response.data);
        this.setState({
          prisonInfo: response.data
        })
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
  }



  renderPrisoner(){
      if (this.state.inmateInfo){
        console.log(this.state.inmateInfo[4])
        return (
          <Row>
            <Col xs="12" sm="12" md="12">
              <Card className="card-accent-primary">
                <CardHeader>
                  {this.state.inmateInfo[4]} {this.state.inmateInfo[5]} {this.state.inmateInfo[6]}
                </CardHeader>
                <CardBlock className="card-body">
                  <Table responsive>
                    <tbody>
                    <tr>
                      <td>Prisoner Id:</td>
                      <td>{this.state.inmateInfo[0]}</td>
                    </tr>
                    <tr>
                      <td>Gender:</td>
                      <td>{this.state.inmateInfo[1]}</td>
                    </tr>
                    <tr>
                      <td>Prison Id:</td>
                      <td>{this.state.inmateInfo[2]}</td>
                    </tr>
                    <tr>
                      <td>Probation Status:</td>
                      <td>{this.state.inmateInfo[3]}</td>
                    </tr>
                    <tr>
                      <td>Mailing Address:</td>
                      <td>{this.state.inmateInfo[7]}</td>
                    </tr>
                    <tr>
                      <td>Other Details:</td>
                      <td>{this.state.inmateInfo[8]}</td>
                    </tr>
                    <tr>
                      <td>Blood Type:</td>
                      <td>{this.state.inmateInfo[9]}</td>
                    </tr>
                    <tr>
                      <td>Dietary Restrictions:</td>
                      <td>{this.state.inmateInfo[10]}</td>
                    </tr>
                    <tr>
                      <td>Allergy Restrictions:</td>
                      <td>{this.state.inmateInfo[11]}</td>
                    </tr>
                    </tbody>
                  </Table>
                </CardBlock>
              </Card>
            </Col>
          </Row>
        )
      } else {
        return (
          <div>

          </div>
        )
      }
    }


    renderPrison(){
        if (this.state.prisonInfo){
          console.log("hello nurse", this.state.prisonInfo.message.length)
          const prisonList = this.state.prisonInfo.message
          return (
            <div>
              {prisonList.map(function(prisoner){
                return (
                  <InmateCard prisonerData={prisoner}/>
                )
              })}
            </div>
          )
        } else {
          return (
            <div>

            </div>
          )
        }
      }


 render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBlock className="card-body p-4">
                  <h1>Search Inmate by ID</h1>
                  <InputGroup className="mb-3">
                    <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                    <Input type="text" onChange={this.inmateID} placeholder="Inmate ID"/>
                  </InputGroup>

                 <div className='text-center'>
                  <Button className="btn-success"
                  onClick={this.prisonerButtonClicked.bind(this)}>Submit</Button>
                  </div>
               </CardBlock>
                <CardFooter className="p-4">
                  <Row>
                    <div id="prisoners">
                     {this.renderPrisoner()}
                    </div>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBlock className="card-body p-4">
                  <h1>Search Inmates by Prison ID</h1>
                  <InputGroup className="mb-3">
                    <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                    <Input type="text" onChange={this.prisonID} placeholder="Prison ID"/>
                  </InputGroup>
                 <div className='text-center'>
                  <Button className="btn-success"
                  onClick={this.prisonButtonClicked.bind(this)}>Submit</Button>
                  </div>
               </CardBlock>
                <CardFooter className="p-4">
                  <Row>
                    <div id="prisons">
                      {this.renderPrison()}
                    </div>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

   );
  }
}

const mapStateToProps = ({ inmates }) => {
  const { inmatesList, inmates_loading, inmates_loading_error} = inmates
  return { inmatesList, inmates_loading, inmates_loading_error }
}

export default connect(mapStateToProps, { inmatesList, inmates_loading, inmates_loading_error, inmateListFind })(InmateSearch);
