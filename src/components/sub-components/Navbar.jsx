import React, { useState, useEffect } from 'react';
import '../../index.css';
import Container from '../../layout/ContainerLayout';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // for icons
import {motion} from 'framer-motion'
// Hook to detect mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // default breakpoint

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

function Navbar(props) {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const heightIsmobile = isMobile ? 250 : 0
  const navLinks = (
    <motion.div className={`flex ${isMobile ? 'flex-col gap-4 p-4 bg-black text-white' : 'flex-row-reverse items-center gap-[30px] text-[18px]'}`}
    initial={{height:0}}
    animate={{height:heightIsmobile}}
    >
      <motion.a initial={{opacity:0}} animate={{opacity:1}} href="#hero" onClick={() => setMenuOpen(false)} className={`${~isMobile && props.activeSection === 'hero' ? 'text-[#3E7CFF]' : ''}`}>الرئيسية</motion.a>
      <motion.a initial={{opacity:0}} animate={{opacity:1}} href="#about" onClick={() => setMenuOpen(false)} className={`${~isMobile && props.activeSection === 'about' ? 'text-[#3E7CFF]' : ''}`}>نبذه عنا</motion.a>
      <motion.a initial={{opacity:0}} animate={{opacity:1}} href="#programs" onClick={() => setMenuOpen(false)} className={`${~isMobile && props.activeSection === 'programs' ? 'text-[#3E7CFF]' : ''}`}>بروجرامز</motion.a>
      <motion.a initial={{opacity:0}} animate={{opacity:1}} href="#admission" onClick={() => setMenuOpen(false)} className={`${~isMobile && props.activeSection === 'admission' ? 'text-[#3E7CFF]' : ''}`}>ادمشن</motion.a>
      <motion.a initial={{opacity:0}} animate={{opacity:1}} href="#competitions" onClick={() => setMenuOpen(false)} className={`${~isMobile && props.activeSection === 'competitions' ? 'text-[#3E7CFF]' : ''}`}>مسابقات</motion.a>
    </motion.div>
  );

  return (
    <nav className="sticky top-0 z-[100] bg-black text-white">
      <Container>
        <div className="flex items-center flex-row-reverse justify-between">
          {/* Logo */}
          <div className="font-semibold text-[24px]">
            Campus <br /> <span className="text-blue-700">Odyssey</span>
          </div>

          {/* Desktop links */}
          {!isMobile && navLinks}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              className="p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6 text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-white" />
              )}
            </button>
          )}
        </div>

        {/* Mobile dropdown menu */}
        {isMobile && menuOpen && (
          <div className="border-t border-gray-700">
            {navLinks}
          </div>
        )}
      </Container>
    </nav>
  );
}

export default Navbar;
