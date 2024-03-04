
import Home from './Home.jsx';
// import Project11 from './cardmenu2.js';
import Rough from './filmspage.jsx';
import Intro from './intro.jsx'

import { BrowserRouter, Route, Routes, } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
        <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/1' element={<Rough/>}/>
        <Route path='/intro' element={<Intro/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
