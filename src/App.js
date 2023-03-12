

import ContactPage from './pages/ContactPage';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import NavBar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';

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
