
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import AddVideo from './component/AddVideo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pagenotfound from './component/PageNotFound';

// browserrouter holds all the webpages
// routes defines how many pages we are using
// route defines individual page
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<AddVideo/>} path='/addVideo'/>
        <Route element={<Pagenotfound/>} path='*'/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
