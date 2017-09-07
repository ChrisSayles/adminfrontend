 import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import { connect } from 'react-redux';
import { inmateListFind, prisonListFind } from '../../actions';

import {
  inmatesList,
  inmates_loading,
  inmates_loading_error,
  prison_list,
  prison_list_loading,
  prison_list_error
} from '../../actions/types';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import Dashboard from '../../views/Dashboard/';
import Charts from '../../views/Charts/';
import Widgets from '../../views/Widgets/';
import axios from 'axios';

// Components
import Buttons from '../../views/Components/Buttons/';
import Cards from '../../views/Components/Cards/';
import Forms from '../../views/Components/Forms/';
import Modals from '../../views/Components/Modals/';
import SocialButtons from '../../views/Components/SocialButtons/';
import Switches from '../../views/Components/Switches/';
import Tables from '../../views/Components/Tables/';
import Tabs from '../../views/Components/Tabs/';
import InmateSearch from '../../views/Components/InmateSearch/';


// Icons
import FontAwesome from '../../views/Icons/FontAwesome/';
import SimpleLineIcons from '../../views/Icons/SimpleLineIcons/';

class Full extends Component {
  componentDidMount(){
    this.props.inmateListFind();
    this.props.prisonListFind();
  }
  componentDidUpdate(){
    console.log('Loading?: ',this.props.inmatesList)
    console.log('Prisons: ', this.props.prisonsList)
    }



  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/components/buttons" name="Buttons" component={Buttons}/>
                <Route path="/components/cards" name="Cards" component={Cards}/>
                <Route path="/components/forms" name="Forms" component={Forms}/>
                <Route path="/components/modals" name="Modals" component={Modals}/>
                <Route path="/components/social-buttons" name="Social Buttons" component={SocialButtons}/>
                <Route path="/components/switches" name="Swithces" component={Switches}/>
                <Route path="/components/tables" name="Tables" component={Tables}/>
                <Route path="/components/tabs" name="Tabs" component={Tabs}/>
                <Route path="/icons/font-awesome" name="Font Awesome" component={FontAwesome}/>
                <Route path="/icons/simple-line-icons" name="Simple Line Icons" component={SimpleLineIcons}/>
                <Route path="/widgets" name="Widgets" component={Widgets}/>
                <Route path="/charts" name="Charts" component={Charts}/>
                <Route path="/inmatesearch" name="Inmate Search" component={InmateSearch}/>

                <Redirect from="/" to="/inmatesearch"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ inmates, prisons }) => {
  const { inmatesList, inmates_loading, inmates_loading_error} = inmates
  const { prisonsList, prisons_loading, prisons_loading_error} = prisons

  return { inmatesList, inmates_loading, inmates_loading_error, prisonsList, prisons_loading, prisons_loading_error }
}

export default connect(mapStateToProps, { inmatesList, inmates_loading, inmates_loading_error, inmateListFind, prisonListFind })(Full);
