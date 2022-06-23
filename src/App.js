import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import Hireme from './pages/Hireme';

function App() {
    
  return (
      <div className='app'>
        <Routes>
          <Route exact path='/' element={<Home navbar={<Navbar />} />} />
          <Route exact path='/portfolio' element={<Portfolio navbar={<Navbar />} />} />
          <Route exact path='/hire_me' element={<Hireme navbar={<Navbar />} />} />
        </Routes>
      </div>
  )
}

export default App;
