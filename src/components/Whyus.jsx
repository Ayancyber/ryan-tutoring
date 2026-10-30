import tick from "../assets/tickGreen.svg"
import cross from "../assets/cross.svg"
import logo from "../assets/logo.webp"
import book from "../assets/bookwhy.svg"
import { motion } from "framer-motion"

const Whyus = () => {
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
    const itemVariants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } } };
    const rightItemVariants = { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } } };
    const advantages = ["Lower price per class", "Longer classes upto 50 minutes", "Adaptive teaching as per students need", "Flexible scheduling", "Real-world conversation practice", "Money-back satisfaction guarantee"];
    const disadvantages = ["Higher price per class", "Hardly over 30 minutes +expensive", "Predefined teaching method", "Rigid fixed timings", "Textbook-only approach", "No guarantees offered"];

    return (
        <section id="whyus" className='w-full sm:gap-10 flex flex-col sm:pt-20 px-4 pb-10'>
            <motion.h2 className='w-full text-center max-lg:text-4xl mt-10 sm:text-6xl font-semibold text-[#0077ED]' initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>Why Us?</motion.h2>
            <motion.div className='bg-[#c2e0ff] rounded-2xl mt-20 max-w-6xl gap-4 w-full flex max-lg:flex-col min-h-3xl mx-auto px-4 py-4 border border-gray-200 shadow-lg shadow-gray-300' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <motion.div className='border border-[#0077ed] sm:text-lg text-gray-600 font-medium flex-1 px-4 py-10 rounded-2xl flex flex-col gap-10 shadow-[10px_10px_10px_-6px_#0077ed]' variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                    <motion.div className='flex gap-2' variants={itemVariants}>
                        <img src={logo} alt="logo" className='size-10' loading="lazy" />
                        <div className=' border-l-2 border-white pl-3'><p className='text-gray-400 text-lg leading-5'><span className='text-[#2B405A] font-semibold text-[20px] font-sans'>RYAN</span><br />Tutoring</p></div>
                    </motion.div>
                    {advantages.map((text, index) => (
                        <motion.div key={index} className='flex gap-2 justify-start items-center' variants={itemVariants}>
                            <img src={tick} alt="tick" className='size-7' loading="lazy" /><p>{text}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className='flex-1 sm:text-lg text-gray-600 font-medium px-4 py-10 rounded-2xl flex flex-col gap-10' variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                    <motion.div className='flex gap-2' variants={rightItemVariants}>
                        <img src={book} alt="logo" className='size-10' loading="lazy" />
                        <div className=' border-l-2 border-white pl-3'><p className='text-gray-400 text-lg leading-5'><span className='text-[#2B405A] font-semibold text-[20px] font-sans'>OTHERS</span><br />Tutoring</p></div>
                    </motion.div>
                    {disadvantages.map((text, index) => (
                        <motion.div key={index} className='flex gap-2 justify-start items-center' variants={rightItemVariants}>
                            <img src={cross} alt="cross" className='size-7' loading="lazy" /><p>{text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
export default Whyus