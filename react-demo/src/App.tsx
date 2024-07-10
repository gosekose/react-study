import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './component/Greet';
import { Oscar } from './component/Oscar';
import { Heading } from './component/Heading';
import { ButtonEx } from './component/ButtonEx';
import { InputEx } from './component/InputEx';
import { Container } from './component/Container';

function App() {
  return (
    <div className="App">
      <Greet name="test" messageCount={3}></Greet>
      <Oscar>
        <Heading> Test ~~~ </Heading>
      </Oscar>
      <ButtonEx
        handleClick={(event, id) => {
          console.log('Button Clicked', event, id)
        }} />
      <InputEx
        value=''
        handleChange={event => console.log(event)}
      />
      <Container
        styles={{ border: '1px solid black', padding: '1rem'}}
      />
    </div>
  );
}

export default App;
