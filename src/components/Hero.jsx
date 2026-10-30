import bg from '../assets/bgHeronew.jpg'
import Navbar from './Navbar'
import star from "../assets/star.webp"
import star1 from "../assets/Star3.webp"
import { motion } from "framer-motion"
import { useScroll, useTransform } from "framer-motion"

const Hero = () => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

    return (
        <motion.section id='hero' className='w-full flex flex-col min-h-[500px] bg-cover bg-bottom' style={{ backgroundImage: `url(${bg})` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <Navbar />
            <div className='w-full lg:mt-40 md:px-10 flex max-lg:flex-col justify-between mb-50 relative max-lg:mt-20'>
                <motion.div className='flex flex-col gap-10 max-lg:gap-3 max-lg:mt-10' initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}>
                    <motion.div className='flex max-lg:justify-center gap-1' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, duration: 0.5, type: "spring" }}>
                        {[1,2,3,4,5].map((_, i) => (
                            <motion.img key={i} src={star} alt="star" width="25" height="25" className='w-[25px] h-[25px]' initial={{ rotate: -180, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} transition={{ delay: 0.7 + i * 0.1 }} />
                        ))}
                        <span className='border-[#0077ED] border-l-2 pl-1'>5.0 Ratings</span>
                    </motion.div>
                    <motion.h1 className='font-bold font-roboto-condensed text-5xl max-lg:text-center max-lg:text-3xl max-lg:leading-8 leading-15' initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}>
                        Master English With<br /><span className='text-[#0077ED]'>Expert</span> Guidance
                    </motion.h1>
                    <motion.p className='max-lg:text-sm max-lg:text-center px-2' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
                        Personalized English lessons for professionals and students.IELTS, business English, and conversation practice tailored to your goals.
                    </motion.p>
                    <motion.div className='flex w-full gap-10 max-lg:justify-center' initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9, duration: 0.6 }}>
                        <motion.button className='px-8 py-2 max-lg:px-4 max-lg:text-sm w-fit h-fit cursor-pointer bg-[#0077ED] text-white font-light text-xl rounded-4xl' onClick={() => window.location.href = '#booking'} whileHover={{ scale: 1.05, backgroundColor: "#0056b3" }} whileTap={{ scale: 0.95 }}>Book now</motion.button>
                        <motion.button className='px-8 py-2 max-lg:px-4 max-lg:text-sm w-fit h-fit cursor-pointer bg-transparent border border-[#0077ED] text-[#0077ED] font-light text-xl rounded-4xl' onClick={() => window.location.href = '#whyus'} whileHover={{ scale: 1.05, backgroundColor: "#0077ED20" }} whileTap={{ scale: 0.95 }}>Learn more</motion.button>
                    </motion.div>
                </motion.div>
                
                <motion.div className='flex-1 flex justify-end items-center max-lg:mt-30' initial={{ x: 100, opacity: 0, scale: 0.8 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8, type: "spring" }}>
                    <div className='relative max-lg:mx-auto'>
                        <motion.div className='px-6 max-lg:px-1 max-lg:py-2 absolute max-lg:top-1 top-10 -left-20 max-lg:-left-9 max-lg:font-medium max-lg:text-[10px] z-10 py-3 flex gap-2 max-lg:gap-1 rounded-4xl w-fit shadow-lg bg-transparent backdrop-blur-sm border border-b-0 border-white justify-center items-center' initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.1, duration: 0.5 }} whileHover={{ scale: 1.1 }}>
                            <img src={star1} alt="star" className='max-lg:size-5' />
                            <p>Certified English Teacher</p>
                        </motion.div>
                        <motion.div className='flex absolute z-10 bottom-0 right-0 max-lg:-right-6 flex-col gap-3 px-6 py-4 max-lg:px-3 max-lg:py-2 max-lg:font-medium max-lg:text-sm justify-center items-center w-fit bg-transparent backdrop-blur-[6px] text-lg font-semibold border border-b-0 border-white shadow-lg rounded-2xl' initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.3, duration: 0.5 }} whileHover={{ scale: 1.05 }}>
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>5+ years Experience</motion.p>
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}>Taught 300+ Students</motion.p>
                        </motion.div>
                        <motion.div className='relative w-[550px] h-[550px] max-lg:w-[270px] max-lg:h-[270px] bg-[#0077ed] rounded-full outline-4 outline-offset-4 outline-dashed outline-[#0077ed] flex justify-center' animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                            <motion.img fetchpriority="high" src="/avatar.webp" alt="person" className='absolute bottom-0 left-1/2 -translate-x-1/2 max-lg:w-[178px] max-lg:h-[320px]' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}
export default Hero