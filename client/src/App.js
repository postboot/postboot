import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

import { Projects } from './pages';

function App() {
  return (
    <div className='App-header'>
      <Row>
        <Col>
          <Projects />
        </Col>
        <Col>
          <Projects />
        </Col>
        <Col>
          <Projects />
        </Col>
        <Col>
          <Projects />
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            Hi there
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            Hi there
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            Hi there
          </div>
        </Col>
      </Row>
    </div>);
}

export default App;
