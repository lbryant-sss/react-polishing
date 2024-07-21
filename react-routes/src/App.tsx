import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Homepage() {
  return (
    <>
      <h1>This is my home page
        <a href="/about">About page</a>
      </h1>
    </>
  );
}

function About() {
  return (
    <>
      <h1>This is my about page</h1>
    </>
  );
}



function App() {

  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage /> }/>
      <Route path='/about' element={<About />}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
