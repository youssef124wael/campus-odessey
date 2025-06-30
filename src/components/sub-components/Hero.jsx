import React, { useEffect, useState } from 'react';
import hero_image from '../../resources/Hero.svg';
import { useInView } from 'react-intersection-observer'; 
function Hero(props) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), 100); 
    }, []);
    const { ref, inView } = useInView({threshold: 0.5});
    useEffect(() => {
        console.log("inView?", inView);
        if (inView) {
            console.log('Hero section is in view');
            props.handler('hero');
        }
    }, [inView,props]);


    return (
        <div id='hero' ref={ref} className='relative z-[0] w-full min-h-screen justify-center items-center flex bg-no-repeat bg-fixed bg-cover bg-center'
            style={{ backgroundImage: `url(${hero_image})` }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div
                className={`relative gap-10 z-10 flex flex-col items-center justify-center text-center h-full px-4
                transition-all duration-[2000ms] ease-out
                ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[1000px]'}`}
            >
                <h1 className='text-[70px] max-md:text-[50px] text-[#E0E0E0]'>رحلتك للجامعة <span className='text-[#3E7CFF] max-md:text-[50px] text-[70px]'>بتبدأ من هنا</span></h1>
                <p className='text-[30px] text-[#E0E0E0]'>
                    قدم للجامعة وانت مطمن! استفيد من مصادرنا وإرشاداتنا المخصصة الي بتساعدك توصل لأهدافك الأكاديمية.
                </p>
                <div className='flex gap-10'>   
                    <a href='#contact' className=' text-white flex items-center rounded justify-center w-[150px] h-[50px] bg-[#3E7CFF] transition transform hover:scale-110 hover:brightness-110 '>Contact Us</a>
                    <a href='#contact' className='text-white flex items-center justify-center w-[150px] h-[50px] border border-white rounded-lg px-6 py-3 bg-transparent transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#3E7CFF] hover:to-[#B4A476] hover:scale-110 hover:brightness-110"'>Contact Us</a>
                </div>
            </div>
        </div>
    );
}
export default Hero;
