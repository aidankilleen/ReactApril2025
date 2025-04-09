import {Routes, Route, Link} from 'react-router-dom';
//import './App.css'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import UsersPage from './pages/UsersPage';
import UserDetailPage from './pages/UserDetailPage';
import { createContext, useState } from 'react';
import PrivatePage from './pages/PrivatePage';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';

export const DarkModeContext = createContext();
export const LoggedInContext = createContext();

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const styles = {
    color: darkMode ? "white" : "black", 
    backgroundColor: darkMode ? "black" : "white", 
    height: "100vh", 
    width: "100%", 
    padding: "10px", 
    margin: 0
  }

  return (
    <LoggedInContext.Provider value={{loggedIn, setLoggedIn}}>
      <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
        <div style={styles}>
        <h1>Routing</h1>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/about">About</Link> |
          <Link to="/contact">Contact Us</Link> |
          <Link to="/users">User List</Link> |
          <Link to="/private">Private Page</Link>
          {/* don't use traditional a href links <a href="/about">About Page</a>*/}

          <input type="checkbox" checked={darkMode} onChange={evt=>setDarkMode(evt.target.checked)}/>{darkMode?"dark" : "light"}

          {loggedIn ? "Logged In" : "Not Logged In"}
        </nav>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage darkMode={darkMode}/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/users" element={<UsersPage/>}/>
          <Route path="/users/:id" element={<UserDetailPage/>}/>
          <Route path="/private" element={loggedIn ? <PrivatePage/> :<LoginPage/>}/>
        </Routes>
        </div>
      </DarkModeContext.Provider>
    </LoggedInContext.Provider>
  )
}

export default App;

