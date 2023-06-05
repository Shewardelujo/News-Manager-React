import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopStories from './features/TopStories';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
        <Routes>
          <Route path='/' element={<Navbar/>}></Route>
          {/* <Route path='/' element={<TopStories/>}></Route> */}
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
