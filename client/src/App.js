import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MemberDashboard, ProfileSettings, SplashPage, Projects, Members } from './pages';

import './App.css';
import DraftNavDeleteMeLater from './components/DraftNavDeleteMeLater';
import { Newnav } from './components';


function App() {
  return (<>
    
    <div className="App-header">

    <Router>
      <DraftNavDeleteMeLater/>
      <Newnav />
      <Switch>
      <Route exact path={["/members"]}>
        <Members />
      </Route>
        <Route exact path={["/", "/splashpage"]}>
          <SplashPage />
        </Route>
        <Route exact path={["/memberdashboard"]}>
          <MemberDashboard />
        </Route>
        <Route exact path={["/projects"]}>
          <Projects />
        </Route>
        <Route
          exact path={["/profilesettings"]}>
          <ProfileSettings />
        </Route>
      </Switch>
    </Router>

    </div>
  </>
  );
}

export default App;
