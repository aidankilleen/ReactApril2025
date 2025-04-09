import {Routes, Route, Link} from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import UsersPage from './pages/UsersPage';
import UserDetailPage from './pages/UserDetailPage';

function App() {
  return (
    <>
    <h1>Routing</h1>
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/contact">Contact Us</Link> |
      <Link to="/users">User List</Link> 
      {/* don't use traditional a href links <a href="/about">About Page</a>*/}
    </nav>

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/users" element={<UsersPage/>}/>
      <Route path="/users/:id" element={<UserDetailPage/>}/>
    </Routes>
    </>
  )
}

export default App

