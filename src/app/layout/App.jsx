import React, { Component } from 'react';
import {Container} from 'semantic-ui-react'
import EventDashboard from '../../features/Events/EventDashboard/EventDashboard';
import NavBar from '../../features/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Container className="main">
          <EventDashboard/>
        </Container>
      </div>
    );
  }
}

export default App;
