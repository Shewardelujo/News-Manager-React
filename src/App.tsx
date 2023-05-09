import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HorizontalCard from './components/HorizontalCard';


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
        <Routes>
          <Route path='/' element={<HorizontalCard/>}></Route>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
