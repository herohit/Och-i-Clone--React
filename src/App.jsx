import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage';
import Marque from './components/Marque';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';

import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
    const locomotiveScroll = new LocomotiveScroll();
    return (
        <div className='w-full min-h-screen text-white bg-zinc-900'>
            <Navbar></Navbar>
            <LandingPage></LandingPage>
            <Marque></Marque>
            <About></About>
            <Eyes></Eyes>
            <Featured />
            <Cards />
            <Footer />
        </div>
    )
}

export default App
