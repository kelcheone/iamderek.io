
import { Route, Router, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ContactPage from './pages/ContactPage';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
    
  return (
      <div className='app'>
        <NavBar />
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/portfolio' element={<Portfolio />} />
            <Route exact path='/contacts' element={<ContactPage />} />
        </Routes>
      </div>
  )
}

export default App;
