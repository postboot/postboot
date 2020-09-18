import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MemberDashboard, ProfileSettings, SplashPage, Projects } from './pages';

import './App.css';
import DraftNavDeleteMeLater from './components/DraftNavDeleteMeLater';


function App() {
  return (<>
    
    <div className="App-header">
    <Router>
      <DraftNavDeleteMeLater/>
      <Switch>
        <Route exact path={["/", "/splashpage"]}>
          <SplashPage />
        </Route>
        <Route exact path={["/memberdashboard"]}>
          <MemberDashboard />
        </Route>
        <Route exact path={["/memberdashboard"]}>
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
