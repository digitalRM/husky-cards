import React, { useState, useRef, useEffect } from 'react';
import Welcome from './components/Welcome';
import Nav from './components/Nav';

function App() {
  const user = {id: 1, username: "Husky_Joe", name: "joe", unreadMessages: ["hello", "hi", "how are you"], cart: ["socks", "shoes", "pants"]}

  return (
    <>
    <Nav />
    <Welcome user={user} />
    
    </>
  )
}

export default App;
