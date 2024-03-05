
import Home from './Home.jsx';
// import Project11 from './cardmenu2.js';
import Films from './filmspage.jsx';
// import Intro from './intro.jsx'

import { BrowserRouter, Route, Routes, } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
        <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/films' element={<Films/>}/>
        {/* <Route path='/intro' element={<Intro/>}/> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
