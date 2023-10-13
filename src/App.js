import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import About from './views/About';
import Header from './components/Header';

import './main.scss';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
