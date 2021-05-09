import './App.css';
import React from 'react';

import Typical from 'react-typical';

import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Hellohi from './components/hellohi';
import MyPropsFun from './components/learnProps';
import MyStateFun from './components/learnstate';

//import React,{Component} from 'react';
//import {greet} from './components/greet';

/*
 * dont know why greet and welcome tags are not working
 */

function App() {
  let data = "Hi my name is sukarna jana and this \
    is my first react project and i am learning \
    new things every day ;)"
  return (
    <div className="App">
      <h1><code>
        <Typical
          steps={['', 1000, 'Hello Sukarna Jana', 2000]}
          loop={Infinity}
          wrapper="p"
        />
      </code></h1>
      <Typical
          steps={['',2000, data, 2000]}
          loop={Infinity}
          wrapper="p"
        />
      <Greet />
      <Welcome />
      <Hello />
      <Hellohi />
      <MyPropsFun name="Sukarna Jana" age="17+">
        This is Childern Of MyPropsFun Tag
      </MyPropsFun>
      <MyStateFun/>
    </div>
  );
}

export default App;
