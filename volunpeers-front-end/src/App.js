import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './components/Login/Login_Validation.js';
import Navbar from './components/Header/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx';
import { Body } from './Pages/Landingpage/body.js';
import { Footer } from './components/Footer/Footer.jsx';
import { NotFound } from './Pages/NotFound.js';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}
export default App;
