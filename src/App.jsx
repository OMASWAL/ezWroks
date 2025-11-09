import Contact from './Components/Contact.jsx'
import { BrowserRouter, Route, Routes } from'react-router-dom'
import './App.css'
import Home from './Components/Home.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/Contact" element ={<Contact/>}></Route> 
       <Route path="/" element ={<Home/>}></Route>
    </Routes>    
    </BrowserRouter>
    </>
  )
}

export default App
