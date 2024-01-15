import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from "./Profile";
/*  Add one following lines above, Make the appropriate name changes to match your page.
import Home from "./pages";
import About from "./pages/about";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";*/

/* Then add one following lines inside <Routes> , with the names changed according to your files.
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<SignUp />} />   
*/

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
