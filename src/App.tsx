import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopStories from './features/TopStories';
import Health from './features/Health';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar/>
        <Routes>
          {/* <Route path='/' element={<Navbar/>}></Route> */}
          <Route path='/top-stories' element={<TopStories/>}></Route>
          <Route path='/health' element={<Health/>}></Route>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
