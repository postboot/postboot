import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MemberDashboard, ProfileSettings, SplashPage } from './pages';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import DraftNavDeleteMeLater from './components/DraftNavDeleteMeLater';


function App() {
  return (<>
    <Router>
      <DraftNavDeleteMeLater/>
      <Switch>
        <Route exact path={["/", "/splashpage"]}>
          <SplashPage />
        </Route>
        <Route exact path={["/memberdashboard"]}>
          <MemberDashboard />
        </Route>
        <Route
          exact path={["/profilesettings"]}>
          <ProfileSettings />
        </Route>
      </Switch>
    </Router>
  </>
  );
}

export default App;
