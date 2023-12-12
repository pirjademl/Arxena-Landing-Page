
import './App.css'
import { Routes, Route } from "react-router-dom"
import Signup from './components/Signup'
import Footer from './components/Footer'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Login from './components/Login'


function App() {

  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
