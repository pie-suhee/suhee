import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
