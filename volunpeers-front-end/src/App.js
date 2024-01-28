import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import { Body } from './Pages/body.js';
import { Footer } from './components/Footer.jsx';
import { NotFound } from './Pages/NotFound.js';


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
            <Route path="/Signup" element={<Signup />} />
            <Route component={NotFound} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
