import "./App.css";

import {Route, Router, Routes} from 'react-router-dom'

import Contact from './components/Contact';
import Funko from './components/Funko';
import Home from './components/Home';
import Lego from './components/Lego';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path = 'contact' element={<Contact />}></Route>
      <Route path='lego' element={<Lego />}></Route>
      <Route path='funko' element={<Funko />}></Route>
    </Routes>
  );
}

export default App;
