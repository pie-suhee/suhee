import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './views/Error';
import Main from './views/Main';
import About from './views/About';
import Contact from './views/Contact';
import List from './components/List';
import Header from './components/Header';

import './scss/common.scss';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='*' element={<Error />} />
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/responsiveWeb' element={<List category='RESPONSIVE WEB' />} />
            <Route path='/javascript' element={<List category='JAVASCRIPT' />} />
          </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
