import React from 'react';
import ourTask from '../../resources/ourTask.svg';
import college from '../../resources/college.webp';
import admission from '../../resources/admission.webp';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; 
import {motion} from 'framer-motion';
import ContainerLayout from '../../layout/ContainerLayout';
function About(props) {
    const { ref, inView } = useInView({threshold: 0.5},);
    useEffect(() => {
        console.log("inView?", inView);
        if (inView) {
            console.log('About section is in view');
            props.handler('about');
        }
        
    }, [inView,props]);

    return (
        <div id='about' ref={ref} className="w-full mx-auto py-[200px] text-[#E0E0E0] space-y-16 ">
            <ContainerLayout>
                <h1 className='text-center text-[100px] py-5 font-bold'>نبذة عنا</h1>
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[350px]">
                    <motion.img
                        initial={{ opacity: 0.5}}
                        whileInView={{ opacity: 1}}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        duration={2}
                        src={ourTask}
                        loading='lazy'
                        alt="مهمتنا"
                        className="w-full h-64 md:h-[350px] object-cover rounded-lg shadow-lg"
                    />
                    <motion.div className="flex flex-col justify-center items-end"
                    initial={{ opacity: 0.5}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 1 }}
                    viewport={{once: true, amount: 0.5}}
                    duration={2}
                    >
                        <h2 className="text-3xl font-bold mb-4 text-[#3E7CFF]">احنا مين</h2>
                        <p className="text-lg text-end text-[#E0E0E0]">
                            احنا مجموعة من طلاب ثانوي عام بنساعد الطلاب في المرحلة الثانوية انهم يعرفوا أكتر عن تفاصيل و متطلبات الدراسة في الولايات المتحدة الأمريكية للطلبة الدوليين من مصر
                        </p>
                    </motion.div>
                </div>
                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[350px]">
                    <motion.div className="flex flex-col justify-center items-end order-2 md:order-1"
                    initial={{ opacity: 0.5 }}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 1 }}
                    viewport={{ once: true , amount: 0.5 }}
                    duration={2}
                    >
                        <h2 className="text-3xl font-bold mb-4 text-[#B4A476]">هدفنا</h2>
                        <p className="text-lg text-end w-[90%] text-[#E0E0E0]">
                            بسبب قلة المصادر الموجودة  قررنا نبحث عن الموضوع و نجمع معلومات من كل المصادر علشان نقدر نوفر شرح كامل في مكان واحد يبسط  تفاصيل الدراسة الجامعية في الولايات المتحدة الأمريكية للطلبة الدوليين من مصر علشان تقدر تحسن البروفايل بتاعك من جميع النواحي و تعلي فرص قبولك
                        </p>
                    </motion.div>
                    <motion.img
                        initial={{ opacity: 0.5}}
                        whileInView={{ opacity: 1}}
                        transition={{ duration: 1 }}
                        viewport={{ once: true , amount: 0.5 }}
                        duration={2}
                        loading='lazy'
                        src={admission}
                        alt="شرح التقديم"
                        className="w-full h-64 md:h-[350px] object-cover rounded-lg shadow-lg order-1 md:order-2"
                    />
                </div>
                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[350px]">
                    <motion.img
                        initial={{ opacity: 0.5}}
                        whileInView={{ opacity: 1}}
                        transition={{ duration: 1 }}
                        viewport={{once: true, amount: 0.5 }}
                        duration={2}
                        loading='lazy'
                        src={college}
                        alt="دليلك للتقديم"
                        className="w-full h-64 md:h-[350px] object-cover rounded-lg shadow-lg"
                    />
                    <motion.div 
                        className="flex flex-col justify-center items-end"
                        initial={{ opacity: 0.5 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true , amount: 0.5 }}
                        duration={2}
                        >
                        <h2 className="text-3xl font-bold mb-4 text-[#3E7CFF]">بنقدم اي</h2>
                        <p className="text-lg text-end text-[#E0E0E0]">
                            الويبسايت مقسمة كل نواحي الادمشن لجامعات الولايات المتحدة الأمريكية عن طريقة مقالات مكتوبة بطريقة بسيطة و سهل قرائتها فيها شرح كل التفاصيل من الصفر لحد ما تقدر تقدم على الجامعة اللي بتحلم بيها
                        </p>
                    </motion.div>
                </div>
            </ContainerLayout>
        </div>
    );
}

export default About;
