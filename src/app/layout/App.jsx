import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import {Route, Switch} from 'react-router-dom';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import EventDetailedPage from '../../features/events/EventDetailed/EventDetailedPage';
import EventForm from '../../features/events/EventForm/EventForm';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailed from '../../features/user/UserDetailed/UserDetailed';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import HomePage from '../../features/home/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
        <Route path="/(.+)" render={() => (
          <div>
            <NavBar/>
            <Container className="main">
              <Switch>
                <Route path='/events' component={EventDashboard}/>
                <Route path='/events/:id' component={EventDetailedPage}/>
                <Route path='/people' component={PeopleDashboard}/>
                <Route path='/profile/:id' component={UserDetailed}/>
                <Route path='/settings' component={SettingsDashboard}/>
                <Route path='/createEvent' component={EventForm}/>
              </Switch>
            </Container>
          </div>
        )} />
      </div>
    );
  }
}

export default App;
