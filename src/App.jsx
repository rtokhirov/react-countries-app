import React from "react"
import { BrowserRouter as Router, Route, Link, Routes  } from "react-router-dom"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/:id/detail' element={<Detail/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
