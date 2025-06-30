import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer';
function Contact(props) {
    const {ref,inView} = useInView({
        threshold: 0.1,})
    const handleInView = (inView) => {
        if (inView) {
            console.log('Contact section is in view');
            props.handler('contact');
        }
    };
    useEffect(() => {
        handleInView(inView);
    }, [inView , props]);
    return (
        <div ref={ref} id='contact' className='mt-16 py-16 w-full min-h-screen flex gap-5 justify-center items-center flex-col'>
            <h2 className="text-yellow-500 text-center text-4xl font-bold mb-8">!!اقترح مزيدا من الاضافات لموقعنا</h2>
            <form className="max-w-md mx-auto flex flex-row-reverse gap-[100px]">
                <div className='flex flex-col gap-4 w-full'>
                    <label htmlFor="suggestion" className="block transform translate-y-[-10px] text-[20px] text-end text-sm font-medium text-[#E0E0E0]">اقتراحك</label>
                    <input id="suggestion" className="mt-1 text-end text-black-500 bg-gray-500 block w-full border border-black-300 rounded-md shadow-sm p-2" placeholder="اقتراحك" />
                    <label htmlFor="suggestion" className="block transform text-[20px] text-end text-sm font-medium text-[#E0E0E0]">البريد الالكتروني</label>
                    <input id="suggestion" className="mt-1 text-end text-black-500 bg-gray-500 block w-full border border-black-300 rounded-md shadow-sm p-2" placeholder="اقتراحك" />
                </div>
                <div className='flex flex-col gap-4 w-full'>
                    <label htmlFor="email" className="block transform translate-y-[-10px] text-[20px] text-end text-sm font-medium text-[#E0E0E0]">رسالتك</label>
                    <textarea id="email" className="mt-1 h-[140px] text-end w-full text-black-500 bg-gray-500 block w-full border border-black-300 rounded-md shadow-sm p-2" placeholder='رسالتك'/>
                </div>
            </form>
            <motion.button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md w-[300px]"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
            >إرسال</motion.button>
        </div>
    );
}

export default Contact;