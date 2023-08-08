import { BrowserRouter, Route, Routes, Link,NavLink } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';
import Skills from './Skills';
import Reviews from './Reviews';
import './style.css'
import {Facebook, Twitter, Linkedin, Whatsapp, Github, Youtube,EnvelopeFill} from 'react-bootstrap-icons'

const Navbar = () => {
  
    return ( 
        <BrowserRouter>
        <div className="nav">
            <Link className='logo' to="/">Sigma<span>Deb.</span></Link>
            <div className="menu">
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
                <NavLink to="/skills" activeClassName="active">Skills</NavLink>
                <NavLink to="/projects" activeClassName="active">Projects</NavLink>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                <NavLink to="/reviews" activeClassName="active">Reviews</NavLink>
            </div>
        </div>

        <div className="mobile-nav">
            <Link to="https://google.com" target="_blank" rel="noreferrer"><Facebook/></Link>
            <Link to="https://google.com" target="_blank" rel="noreferrer"><Twitter/></Link>
            <Link to="https://google.com" target="_blank" rel="noreferrer"><Linkedin/></Link>
            <Link to="https://google.com" target="_blank" rel="noreferrer"><Whatsapp/></Link>
            <Link to="https://google.com" target="_blank" rel="noreferrer"><Github/></Link>
            <Link to="https://google.com" target="_blank" rel="noreferrer"><Youtube/></Link>
            <Link to="https://google.com" target="_blank" rel="noreferrer"><EnvelopeFill/></Link>
        </div>


      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
      </BrowserRouter>
     );
}
 
export default Navbar;