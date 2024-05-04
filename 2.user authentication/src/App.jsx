
import { useState } from 'react'
import './App.css'
import {  UserContextProvider } from './context/index'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [user,setUser] =useState('')

  return (
    <UserContextProvider value={{user,setUser}}>

      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
