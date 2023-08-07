
import { Link } from "react-router-dom";
import {Facebook, Twitter, Linkedin, Whatsapp, Github, Youtube,EnvelopeFill} from 'react-bootstrap-icons'
import Typewriter from 'typewriter-effect'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Home = () => {
  return (
    <div className="home">
      <section>
        <div className="intro">
          <h4>Hi Folks, My name is</h4>
          <h1>Muhammad Zafran</h1>
          <Typewriter className="typewriter-content"
 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome to My Profile")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Developing a successful product is not a challenge, It is a daily routine for me. I am highly energetic for developing solutions using <b>reactjs</b>, <b>Nodejs</b>, <b>Django</b> and <b>Django Rest Framework</b> with my knowledge and experience in these particular technologies.")
                        .start();
                }}
            />
          
          <div className="intro-btn">
            <Link to="/contact">Contact Me</Link> 
            <Link>Download CV</Link>
          </div>
          <div className="social-icons">
            <Link to="https://google.com" target="_blank" rel="noreferrer"><Facebook/></Link>
            <Link to="https://google.com" target="_blank" rel="noreferrer"><Twitter/></Link>
            <Link to="https://google.com" target="_blank" rel="noreferrer"><Linkedin/></Link>
            <Link to="https://google.com" target="_blank" rel="noreferrer"><Whatsapp/></Link>
            <Link to="https://google.com" target="_blank" rel="noreferrer"><Github/></Link>
            <Link to="https://google.com" target="_blank" rel="noreferrer"><Youtube/></Link>
            <Link to="https://google.com" target="_blank" rel="noreferrer"><EnvelopeFill/></Link>
          </div>
        </div>
        </section>

<div className="line"></div>

    </div>
  );
};

export default Home;
