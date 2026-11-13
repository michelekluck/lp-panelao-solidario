import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App