import './App.css';
import CardProduct from './components/CardProduct';
import Header from './components/Header';
import Home from './pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import StorePage from './pages/StorePage';

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/*' element={<Home />} />
        <Route path='/store' element={<StorePage />} />
      </Routes>
    </div>
  );
}

export default App;
