import {Route, Router, Routes} from 'react-router-dom'

import Contact from './components/Contact';
import CustReg from './components/CustReg'
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path = 'contact' element={<Contact />}></Route>
    </Routes>
   
  );
}

export default App;
