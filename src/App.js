import React, { useState, useRef, useEffect } from 'react';
import Welcome from './components/Welcome';
import Nav from './components/Nav';
import Search from './components/Search';
import './App.css';
import Recommended from './components/Recommended';

function App() {
  const user = {id: 1, username: "Husky_Joe", name: "joe", unreadMessages: ["hello", "hi", "how are you"], cart: ["socks", "shoes", "pants"], pfp: "https://openaicom.imgix.net/cd67d3b8-cd30-416c-b54b-b75d8cc2e728/morgan-stanley.jpeg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=079%2C0%2C4000%2C4000&w=1000"}

  return (
    <>
        <Nav user={user} />
        <Welcome user={user} />
        <Search />
        <Recommended />
    </>
  )
}

export default App;
