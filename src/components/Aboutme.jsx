import aboutbg from "../assets/aboutmebg.svg"
import aboutbg1 from "../assets/aboutmebg2.svg"
import aboutcardicon from "../assets/aboutmeCard.svg"
import aboutcard from "../assets/aboutmeCardbg.svg"
import { motion } from "framer-motion"

const Aboutme = () => {
    const cardVariants = { hidden: { opacity: 0, y: 50, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.3, duration: 0.6 } } };
    const cards = [
        { content: (<><p className="mt-12 sm:mt-20">300+ students</p><p>5+ years experience</p><p>95% students success</p></>) },
        { content: (<p className="mt-12 sm:mt-20 w-1/2 text-center">I am a dedicated English teacher with a passion for helping students improve their communication and language skills.</p>) },
        { content: (<p className="mt-12 sm:mt-20 w-1/2 text-center">With several years of teaching experience, I have worked with students from different backgrounds and skill levels</p>) }
    ];

    return (
        <section id="about" className="w-full relative md:px-10 flex flex-col pt-20 mt-10">
            <motion.h2 className="w-full text-center max-lg:text-4xl sm:text-6xl font-semibold text-[#0077ED]" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>About Me</motion.h2>
            <motion.img src={aboutbg} alt="decor" className="absolute top-0 right-0 -z-1 max-lg:w-[238px] max-lg:h-[392px]" loading="lazy" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
            <motion.img src={aboutbg1} alt="decor" className="absolute bottom-0 left-0 -z-1 max-lg:w-[238px] max-lg:h-[392px]" loading="lazy" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
            <div className="flex justify-center max-lg:flex-col max-lg:flex-wrap">
                {cards.map((card, index) => (
                    <motion.div key={index} className="w-full max-w-[484px] min-w-[260px] aspect-[484/780] flex flex-col relative items-center mx-auto" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.15 }}>
                        <motion.div className="bg-[linear-gradient(90deg,#4CA6FF_0%,#0169CF_75%)] top-[12%] rounded-full p-6 sm:p-8 w-fit absolute" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}>
                            <img src={aboutcardicon} alt="card-decor" className="w-10 h-10 sm:w-14 sm:h-14" loading="lazy" />
                        </motion.div>
                        <div className="absolute bottom-0 w-full h-[78%]">
                            <img src={aboutcard} alt="card-decor" className="absolute w-full h-full object-contain z-2" loading="lazy" />
                            <motion.div className="absolute flex flex-col text-xl sm:text-xl font-light text-white h-full w-full gap-6 sm:gap-10 items-center top-[12%] z-[10]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}>
                                {card.content}
                                <motion.button className="w-fit px-6 sm:px-8 py-2 active:scale-95 cursor-pointer transition-transform text-blue-800 bg-white rounded-4xl text-sm sm:text-lg font-light" onClick={() => window.location.href = '#booking'} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Book now</motion.button>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
export default Aboutme