import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import About from './pages/About';
import VanDetails from './pages/VanDetail';





function App() {

  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/react-polishing/' element={<Homepage /> }/>
      <Route path='react-polishing/about' element={<About />}/>
      <Route path='react-polishing/vans/:id' element={<VanDetails />} />
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
