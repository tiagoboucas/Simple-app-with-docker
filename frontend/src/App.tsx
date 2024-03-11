import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainScreen from './components/MainScreen';
import SetColor from './components/SetColor';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header text="Theme picker" />
        <div className='container'>
          <Navigation />
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/color-1" element={<SetColor number={1} />} />
            <Route path="/color-2" element={<SetColor number={2} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
