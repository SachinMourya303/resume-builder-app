import React from 'react'
import Homepage from './app/pages/homepage'
import { Routes, Route } from 'react-router-dom'
import Background from './app/components/background'
import Signup from './app/pages/Signup'
import Signin from './app/pages/Signin'
import Dashboard from './app/pages/Dashboard'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Background />
      <Routes >
        <Route path='/' element={<Homepage />} />
        <Route path="auth/signup" element={<Signup />} />
        <Route path="auth/signin" element={<Signin />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App