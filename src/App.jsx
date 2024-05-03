import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {


  return (
    <>
      <div className="w-full h-full flex items-center justify-center mt-7">
        <Navbar />
      </div>
      <div className="h-10"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
