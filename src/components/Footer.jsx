import footerbg from "../assets/footerbg.webp"
import logo from "../assets/logo.webp"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import whatsapp from "../assets/whatsapp.svg"
import { motion } from "framer-motion"

const Footer = () => {
    const socialLinks = [
        { icon: facebook, alt: "facebook-logo", link: "https://youtube.com/@ayanum126?si=49OX3t6mmU3HczY4" },
        { icon: instagram, alt: "instagram-logo", link: "https://youtube.com/@ayanum126?si=49OX3t6mmU3HczY4" },
        { icon: whatsapp, alt: "whatsapp-logo", link: "https://youtube.com/@ayanum126?si=49OX3t6mmU3HczY4" }
    ];

    const pages = ["Home", "About", "Booking", "WhyUs?"];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

    const socialVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: { delay: i * 0.1, type: "spring", stiffness: 200, damping: 15 }
        })
    };

    return (
        <motion.section 
            id='footer' 
            className='w-full bg-[#b3d9ff] flex flex-col relative max-sm:px-4 sm:px-10 lg:px-40 py-4 md:min-h-[400px] justify-end rounded-t-2xl mt-10'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.img 
                src={footerbg} 
                alt="footer-decoration" 
                className="aspect-[360/600] w-[200px] z-1 absolute bottom-0 right-0 max-lg:hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            />
            
            <div className="w-full flex justify-between relative z-2">
                <motion.div className='flex-1 flex flex-col gap-3' variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.div className="flex gap-2 items-center" variants={itemVariants}>
                        <motion.img alt="Logo" src={logo} className="w-[90px] max-lg:w-[35px] max-lg:h-[35px] h-[90px]" loading="lazy" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} />
                        <motion.span className="text-[#0077ed] max-lg:text-sm font-semibold leading-5" whileHover={{ scale: 1.05 }}>
                            <span className="text-[#2B405A] font-semibold text-[24px] max-lg:text-lg font-sans">RYAN</span>
                            <br />Tutoring
                        </motion.span>
                    </motion.div>
                    
                    <motion.div className="w-full flex justify-start" variants={itemVariants}>
                        <p className='max-lg:text-sm max-sm:text-[10px] lg:whitespace-nowrap '>Personalized English lessons for professionals and students.<br />IELTS, business English, and conversation practice tailored to your goals.</p>
                    </motion.div>
                    
                    <motion.div className="flex gap-3 items-center justify-start" variants={itemVariants}>
                        {socialLinks.map((social, index) => (
                            <motion.a 
                                key={index}
                                href={social.link} 
                                target="_blank"
                                custom={index}
                                variants={socialVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ y: -5, scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <img src={social.icon} alt={social.alt} className="size-6 lg:size-8" loading="lazy"/>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
                
                <motion.div className='flex lg:flex-1 flex-col max-sm:text-sm gap-2 max-lg:pr-5 max-lg:justify-center items-center' variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.h4 className="text-xl font-medium max-sm:text-lg text-[#0077ed]" variants={itemVariants}>Pages</motion.h4>
                    
                    {pages.map((page, index) => (
                        <motion.a 
                            key={page}
                            href={`#${page.toLowerCase().replace('?', '')}`}
                            variants={itemVariants}
                            custom={index}
                            whileHover={{ scale: 1.1, color: "#0077ed", x: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            {page}
                        </motion.a>
                    ))}
                </motion.div>
            </div>
            
            <motion.div className="border-t border-[#0077ed] mt-6 pt-6 relative z-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.4 }}>
                <motion.span 
                    className="max-sm:text-sm font-medium lg:font-mono block text-center"
                    animate={{ color: ["#000000", "#0077ed", "#000000"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    © {new Date().getFullYear()} Ryan Tutoring. All rights reserved. | Designed with love for English learners worldwide
                </motion.span>
            </motion.div>
        </motion.section>
    )
}

export default Footer