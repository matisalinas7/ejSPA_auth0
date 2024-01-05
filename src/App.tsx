import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/cliente" element={<ClientPage/>}/>
      <Route path="/cliente/perfil" element={<ClienteProfilePage/>}/>
      <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </>
  )
}

export default App
