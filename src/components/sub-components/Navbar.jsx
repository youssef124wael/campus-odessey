import React from 'react';
import '../../index.css'
function Navbar(props) {
    return (
            <div className="flex items-center max-md:gap-0 gap-[300px] justify-between 2xl:justify-evenly w-full max-2xl:px-[20px] h-[80px] z-[100] bg-[#0D0D0D] text-[#E0E0E0] sticky top-0 z-[1]">
            <div className="font-semibold text-[24px]">
                Campus <br /> Odyssey
            </div>
                <div className="flex gap-[30px] text-[18px]">
                    <a href='#hero' className={` ${props.activeSection === 'hero' ? 'text-[#3E7CFF]' : ''}`}>Home</a>
                    <a href='#about' className={` ${props.activeSection === 'about' ? 'text-[#3E7CFF]' : ''}`}>About</a>
                    <a href='#contact' className='flex max-md:w-[100px] items-center max-md:text-[16px] rounded justify-center w-[131px] h-[35px] bg-[#3E7CFF] transition transform hover:scale-110 hover:brightness-110 '>Contact Us</a>
                </div>
            </div>

    );
}

export default Navbar;