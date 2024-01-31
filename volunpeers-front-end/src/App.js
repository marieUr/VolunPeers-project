import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Navbar from './components/Header/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx';
import { Body } from './Pages/Landingpage/body.js';
import { Footer } from './components/Footer/Footer.jsx';
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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route component={NotFound} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
