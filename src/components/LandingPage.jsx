import React from 'react';
import NavbarSimple from './sub-components/Navbar';
import Hero from './sub-components/Hero'
import About from './sub-components/about'
import Slider from './sub-components/Slider';
import Contact from './sub-components/contact'
function LandingPage(props) {
    return (
        <div className='bg-[#0D0D0D] text-[#E0E0E0]'>
            <NavbarSimple activeSection={props.activeSection} />
            <Hero setActiveSection={props.setActiveSection} handler={props.handler}/>
            <Slider handler={props.handler}/>
            <About setActiveSection={props.setActiveSection} handler={props.handler}/>
            <Contact setActiveSection={props.setActiveSection} handler={props.handler}/>
        </div>
    );
}

export default LandingPage;