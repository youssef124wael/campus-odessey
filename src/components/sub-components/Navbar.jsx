import React from 'react';
import '../../index.css'
import Container from '../../layout/ContainerLayout'
function Navbar(props) {
    return (
        <nav className='sticky top-0 z-[100] bg-black'>
            <Container>
                <div className="flex items-center justify-between">
                    <div className="flex flex-row-reverse gap-[30px] text-[18px]">
                        <a href='#hero' className={` ${props.activeSection === 'hero' ? 'text-[#3E7CFF]' : ''}`}>الرئيسية</a>
                        <a href='#about' className={` ${props.activeSection === 'about' ? 'text-[#3E7CFF]' : ''}`}>نبذه عنا</a>
                        <a href='#programs' className={` ${props.activeSection === 'about' ? 'text-[#3E7CFF]' : ''}`}>بروجرامز</a>
                        <a href='#admission' className={` ${props.activeSection === 'about' ? 'text-[#3E7CFF]' : ''}`}>ادمشن</a>
                        <a href='#competitions' className={` ${props.activeSection === 'about' ? 'text-[#3E7CFF]' : ''}`}>مسابقات</a>
                    </div>
                    <div className="font-semibold text-[24px]">
                        Campus <br /> <span className='text-blue-700'>Odyssey</span>
                    </div>
                </div>
            </Container>
        </nav>
    );
}

export default Navbar;