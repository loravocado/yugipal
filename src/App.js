import React from 'react';
import {Button} from 'react-bootstrap';
import './style/App-Style.css'
import {Image, Container, Row, Col} from 'react-bootstrap';
import {Form, FormControl} from 'react-bootstrap';
import {DropdownButton, Dropdown} from 'react-bootstrap';

function App() {
  return (
    <div>
      <div> {/* Top buttons*/}
        <Image id='logo' src="https://imgur.com/BA36iPY.png" responsive />
        <Button id="button1" variant="outline-dark" size='lg'>Discover</Button>
        <Button id="button1" variant="outline-dark" size='lg'>Collection</Button>
        <Button id="button1" variant="outline-dark" size='lg'>Dashboard</Button>
        <Button id="button1" variant="outline-dark" size='lg'> +Add Card </Button>
        <Button id="button2" variant="outline-dark" size='sm'>login</Button>
        <Button id="button3" variant="outline-dark" size='sm'>signup</Button>
        <hr id="hor-line"></hr>
      </div>
      <div>
      <h2 id= 'title'>Stevies Yugioh Cards </h2> {/* Replace Stevies with name*/}
      </div>

      <div>
        <Image id='subheading1' src="https://imgur.com/muF0iB0.png" responsive />
        <p id='inlineText'>432</p> {/* Replace 432 with card number*/}
        <Image id='subheading2' src="https://imgur.com/fleHPc6.png" responsive />
        <p id='inlineText'>3001.45</p> {/* Replace 3001.45 with worth of cards*/}
      </div>

      <div>
        <Form inline>
          <Image id='searchIcon' src="https://imgur.com/vKWXWwn.png" responsive />
          <FormControl id='searchBar' type="text" placeholder="Search Stevies Cards" className="mr-sm-2" />
        </Form>
    </div>
    <div>
      <DropdownButton id="dropdown" title="Sort by">
        <Dropdown.Item id="dropdownOptions" href="#/action-1">Rising Prices</Dropdown.Item>
        <Dropdown.Item id="dropdownOptions" href="#/action-2">Alphabetically</Dropdown.Item>
        <Dropdown.Item id="dropdownOptions" href="#/action-3">Rarity</Dropdown.Item>
      </DropdownButton>;
    </div>

  </div>
);
}

export default App;
