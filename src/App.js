import './App.css';
import {Routes, Route} from "react-router";

import Registration from "./components/Registration";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./routes/home.jsx";
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
