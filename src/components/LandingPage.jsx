import React from 'react';
import Navbar from './sub-components/Navbar'
import Hero from './sub-components/Hero'
import About from './sub-components/about'
import Slider from './sub-components/Slider';
import Contact from './sub-components/contact'
import Container from '../layout/ContainerLayout'
function LandingPage(props) {
    return (
        <div className='bg-[#0D0D0D] text-[#E0E0E0]'>
            <Navbar activeSection={props.activeSection} />
            <Hero setActiveSection={props.setActiveSection} handler={props.handler}/>
            <Container>
                <div className="w-full max-w-7xl mx-auto py-16 px-4">
                    <h2 className="text-yellow-500 text-center text-4xl font-bold mb-8">طريقك الي الجامعات العالمية</h2>
                    <Slider handler={props.handler}/>
                </div>
                <About setActiveSection={props.setActiveSection} handler={props.handler}/>
                <Contact setActiveSection={props.setActiveSection} handler={props.handler}/>
            </Container>
        </div>
    );
}

export default LandingPage;