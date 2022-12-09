import React from 'react';
// import NavTabs from './NavTabs';
// import Resume from './pages/Resume';
// import About from './pages/About';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
import Header from './Header';
import About from './About';
import Skills from './Skills';

// import SideNav from './SideNav';
import Portfolio from './Portfolio';
// import Body from './Body'
import Footer from './Footer';
import Contact from './Contact';


export default function Main() {
  return (
    <div >
      <Header />
      {/* <SideNav /> */}
      <div className='main-content'>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
}

