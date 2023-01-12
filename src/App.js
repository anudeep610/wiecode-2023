import './App.css';
import {Routes, Route} from "react-router";

import Registration from "./components/Registration";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./routes/home.jsx";

//domains
import HealthCare from './routes/domains/healthCare';
import SmartEducation from './routes/domains/smartEducation';
import Urbanization from "./routes/domains/urbanization";
import Fintech from "./routes/domains/fintech";
import Ecomerce from "./routes/domains/ecomerce.jsx";
import OpenInov from "./routes/domains/openInov"
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/health-care-domain" element={<HealthCare/>}/>
        <Route path='/smart-edu-domain' element={<SmartEducation/>}/>
        <Route path='/urbanization-domain' element={<Urbanization/>}/>
        <Route path='/fintech-domain' element={<Fintech/>}/>
        <Route path='/ecomerce-domain' element={<Ecomerce/>}/>
        <Route path='/open-inov-domain' element={<OpenInov/>}/>

        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
