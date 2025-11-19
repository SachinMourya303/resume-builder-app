import React from 'react'
import Homepage from './pages/homepage'
import { Routes, Route } from 'react-router-dom'
import Background from './components/background'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div>
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