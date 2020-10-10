import React, { useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const str = '0123456789'
  
  const [inputs, setInputs] = useState([]);
  const [target, setTarget] = useState(str.split('').sort(function(){return 0.5-Math.random()}).join(''));
  
  function score(input) {
    let score = 0

    for (let i = 0; i < input.length; i++) {
      if (input[i] === target[i]) {
        score++
      }
    }

    return score
  }

  const inputss = inputs.map((input, index) => <li key={index}>{input}:{score(input)}</li>)

  return (
    <div className="App">
    <Container fluid>
      <Row><Col><h1> Numbers</h1></Col></Row>
      <Row>
        <Col>
          <Form.Control onChange={(e) => {
            if (e.target.value.length === 10) {
              setInputs([e.target.value, ...inputs])
              e.target.value = ""
            }
          } } />
        </Col>
      </Row>
      <Row>
        <ul>{inputss}</ul>
      </Row>
      
    </Container>
  </div>
  );
}

export default App;
