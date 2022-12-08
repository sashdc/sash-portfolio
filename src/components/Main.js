// import React, { useState } from 'react';
// import NavTabs from './NavTabs';
// import Resume from './pages/Resume';
// import About from './pages/About';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
import Header from './Header';
import About from './About';
// import SideNav from './SideNav';
import Portfolio from './Portfolio';
// import Body from './Body'
import Footer from './Footer';


export default function Main() {
  return (
    <div >
      <Header />
      {/* <SideNav /> */}
      <div className='main-content'>
      <About/>
      <Portfolio/>
      </div>
      <Footer/>
    </div>
  );
}

