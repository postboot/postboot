import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';
import { MainTemplate } from './pages';

function App() {
  return (
    <div className='App-header'>
      <MainTemplate />
    </div>);
}

export default App;
