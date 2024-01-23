import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Profile from './Profile.jsx';
import Login from './Login.jsx';
import { Body } from './Pages/body.js';
import { Footer } from './components/Footer.jsx';
import { NotFound } from './Pages/NotFound.js';

/*  Add one following lines above, Make the appropriate name changes to match your page.
import Home from "./pages";
import About from "./pages/about";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";*/

/* Then add one following lines inside <Routes> , with the names changed according to your files.
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<SignUp />} /> 
          <Route path="/donations" element={<Donating />} />  
          <Route path="/volunteering-projects" element={<VolProjects />} />
*/

function App() {
  return (
    <>
      <BrowserRouter basename="/VolunPeers"></BrowserRouter>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Body />} exact />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Login" element={<Login />} />
            <Route component={NotFound} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
