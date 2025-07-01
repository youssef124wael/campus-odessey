import React from 'react';
import '../../index.css'
import Container from '../../layout/ContainerLayout'
function Navbar(props) {
    return (
        <nav className='sticky top-0 z-[10] bg-black'>
            <Container>
                <div className="flex items-center justify-between">
                <div className="font-semibold text-[24px]">
                    Campus <br /> Odyssey
                </div>
                    <div className="flex gap-[30px] text-[18px]">
                        <a href='#hero' className={` ${props.activeSection === 'hero' ? 'text-[#3E7CFF]' : ''}`}>Home</a>
                        <a href='#about' className={` ${props.activeSection === 'about' ? 'text-[#3E7CFF]' : ''}`}>About</a>
                        <a href='#contact' className='flex max-md:w-[100px] items-center max-md:text-[16px] rounded justify-center w-[131px] h-[35px] bg-[#3E7CFF] transition transform hover:scale-110 hover:brightness-110 '>Contact Us</a>
                    </div>
                </div>
            </Container>
        </nav>
    );
}

export default Navbar;