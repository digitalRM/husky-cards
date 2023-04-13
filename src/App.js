import React, { useState, useRef, useEffect } from 'react';
// import TodoList from './TodoList';
// import { v4 as uuidv4 } from 'uuid';
import './global.css';
import Welcome from './Welcome';

function App() {
  const user = {id: 1, username: "Husky_Joe", name: "joe", unreadMessages: ["hello", "hi", "how are you"], cart: ["socks", "shoes", "pants"]}

  return (
    <>
    <Welcome user={user} />
    </>
  )
}

export default App;
