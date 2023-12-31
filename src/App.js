import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Reports from './components/Reports/Reports';
import User from './components/User/User';
import Error from './components/Error/Error';
import Login from './components/Login/Login';
import Settings from './components/Settings/Settings';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Statistical from './components/Statical/Statistical';
import Search from './components/Search/Search';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar/>

        <div style={{ paddingTop: '61px', paddingLeft: '65px' }}>
          <Routes>
            <Route path="/WesternUnion" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userManagement" element={<User />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings/>}/>
              <Route path="/reports" element={<Statistical/>}/>
              <Route path="/settings/search" element={<Search/>}/>
            <Route path="*"  element={<Error/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;