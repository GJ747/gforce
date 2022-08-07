import React, { useRef } from "react";
import './App.css';
import AboutUs from './components/AboutUs';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Contact from './components/Contact';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Quate from './components/Quate';


function App() {

const service = useRef(null)
const aboutus = useRef(null)
const getquate = useRef(null)
const contact = useRef(null)

const handleScroll = (ref) => {
  window.scrollTo({
    top: ref.offsetTop,
    left: 0,
    behavior: "smooth",
  });
};

  return (
    <div className="App">
      <Header/>
      <Navbar fun={handleScroll} service={service} aboutus={aboutus} getquate={getquate} contact={contact}/>
      <Card1/>
      <Card2 service={service} />
      <AboutUs aboutus={aboutus}/>
      <Quate getquate={getquate}/>
      <Contact contact={contact}/>
    </div>
  );
}

export default App;
