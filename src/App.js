import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/header';
import Taxis from './components/Taxis';
import Rentals from './components/Rentals';
import Bpf from './components/bpf';
import Inbox from './components/inbox';
import Rpf from './components/rpf';
import Requirements from './components/requirements';
import Contact from './components/contact';
import Footer from './components/footer';
import Login from './components/logIn';
import SignUp from './components/signUp';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header/><Taxis/><Footer/></>} />
        <Route path="/rentals" element={<><Header/><Rentals/><Footer/></>} />
        <Route path="/bpf" element={<><Header/><Bpf/><Footer/></>} />
        <Route path="/inbox" element={<><Header/><Inbox/><Footer/></>} />
        <Route path="/rpf" element={<><Header/><Rpf/><Footer/></>} />
        <Route path="/requirements" element={<><Header/><Requirements/><Footer/></>} />
        <Route path="/contact" element={<><Header/><Contact/><Footer/></>} />
        <Route path="/signup" element={<><Header/><SignUp/><Footer/></>} />
        <Route path="/login" element={<><Header/><Login/><Footer/></>} />
      </Routes>
    </Router>
  );
}

export default App;
