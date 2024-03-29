import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './home/Home.jsx'
import { FourOhFour } from './FourOhFour'
import 'mapbox-gl/dist/mapbox-gl.css'


export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route path='*' element={<FourOhFour />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}