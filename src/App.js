import React from 'react';
import {Button} from 'react-bootstrap';
import './style/App-Style.css'
import {Image, Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div>
      <div>
        <Image id='logo' src="https://imgur.com/BA36iPY.png" responsive />
        <Button id="button1" variant="outline-dark" size='lg'>Discover</Button>
        <Button id="button1" variant="outline-dark" size='lg'>Collection</Button>
        <Button id="button1" variant="outline-dark" size='lg'>Dashboard</Button>
        <Button id="button1" variant="outline-dark" size='lg'> +Add Card </Button>
        <Button id="button2" variant="outline-dark" size='sm'>login</Button>
        <Button id="button3" variant="outline-dark" size='sm'>signup</Button>
      </div>
      <hr id="hor-line"></hr>
  </div>
);
}

export default App;
