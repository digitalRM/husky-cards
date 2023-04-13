import React from 'react'
import './global.css'


export default function Welcome({user}) {
  return (
    <div className='wrapper-wrapped'>
    <div className='welcome-wrapper'>
    <div className='welcome'>
        <h1 className='font-left'>Hey! Welcome Back <span className='color-pop username'>@{user.username}!</span>👋</h1>
        <h2 className='font-right'><span className='color-pop' >{user.unreadMessages.length}</span> Unread Messages    <span className='color-pop' >{user.cart.length}</span> Items in Cart</h2>
      </div>
    </div>
  </div>
  )
}
