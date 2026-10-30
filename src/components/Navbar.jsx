import logo from "../assets/logo.webp"
import bg1 from "../assets/navCorner.webp"
import bg2 from "../assets/navCornerbg.webp"
import menu from "../assets/menu.svg"
import cross from "../assets/cross_side.svg"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const [hoverIndex, setHoverIndex] = useState(-1)
    const menuVariants = { hidden: { x: "100%", opacity: 0, transition: { duration: 0.3 } }, visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } } };
    const linkVariants = { hidden: { opacity: 0, x: 20 }, visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1, duration: 0.3 } }) };
    const links = ["Home", "About", "Booking", "WhyUs?"];
    const linkPositions = [12, 95, 180, 278]; 

    return (
        <nav className="flex justify-between w-full max-h-32 relative">
            <div className="relative">
                <motion.div className="flex gap-2 items-center ml-8 max-lg:ml-2 mt-8 relative z-30" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    <motion.img alt="Logo" src={logo} className="w-[90px] max-lg:w-[35px] max-lg:h-[35px] h-[90px]" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} />
                    <motion.span className="text-white max-lg:text-sm font-semibold leading-5" whileHover={{ scale: 1.05 }}>
                        <span className="text-[#2B405A] font-semibold text-[24px] max-lg:text-lg font-sans">RYAN</span><br/>Tutoring
                    </motion.span>
                </motion.div>
                <motion.img src={bg1} alt="bg-decor" className="absolute -top-20 -left-30 max-w-[380px] max-h-[290px] max-lg:w-[250px] max-lg:h-[200px] max-lg:-top-10 max-lg:-left-20 z-20" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} />
                <motion.img src={bg2} alt="bg-decor" className="absolute top-0 left-0 max-w-[366px] max-h-[280px] max-lg:w-[200px] max-lg:h-[250px] z-10" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} />
            </div>
            
            <div id="links" className="flex justify-end">
                <motion.ul style={{zIndex:"100"}} className="hidden lg:flex gap-10 p-10 text-[#151022] items-center relative" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    {links.map((item, i) => (
                        <motion.li key={item} className="relative z-10" initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} onMouseEnter={() => setHoverIndex(i)} onMouseLeave={() => setHoverIndex(-1)}>
                            <a href={`#${item.toLowerCase().replace('?', '')}`}>{item}</a>
                        </motion.li>
                    ))}
                    <motion.span className="w-[95px] h-[50px] rounded-3xl bg-white absolute -z-1" animate={{ left: hoverIndex === -1 ? 12 : linkPositions[hoverIndex], opacity: hoverIndex === -1 ? 0 : 1 }} transition={{ type: "tween", duration: 0.2, ease: "easeOut" }} />
                </motion.ul>

                <AnimatePresence>
                    {sidebar && (
                        <motion.ul style={{zIndex:"100"}} className="flex lg:hidden text-white gap-5 fixed top-2 flex-col right-0 h-fit w-fit p-15 pt-5 bg-[#0077ed] rounded-2xl" variants={menuVariants} initial="hidden" animate="visible" exit="hidden">
                            <motion.li className="w-full flex justify-center pt-8" onClick={() => setSidebar(false)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                <motion.img src={cross} alt="close" whileHover={{ rotate: 90 }} transition={{ duration: 0.2 }} />
                            </motion.li>
                            {links.map((item, i) => (
                                <motion.li key={item} onClick={() => setSidebar(false)} custom={i} variants={linkVariants} initial="hidden" animate="visible" whileHover={{ scale: 1.1, x: 10 }} whileTap={{ scale: 0.95 }}>
                                    <a href={`#${item.toLowerCase().replace('?', '')}`}>{item}</a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>

                <motion.button className="relative max-lg:z-10 lg:z-40 active:scale-95 transition-transform bg-white rounded-2xl max-lg:font-light max-lg:text-sm max-lg:px-2 max-lg:py-1 max-lg:mt-9.5 lg:px-6 lg:py-2 w-fit h-fit lg:mt-10 lg:font-medium cursor-pointer lg:mr-5 whitespace-nowrap max-lg:mr-2" onClick={() => window.location.href = '#booking'} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.4 }} whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }} whileTap={{ scale: 0.95 }}>
                    Book now
                </motion.button>

                <motion.div className="lg:hidden" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                    <motion.img src={menu} alt="menu-icon" className="mt-10 mr-5 size-6 cursor-pointer" onClick={() => setSidebar(true)} whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }} />
                </motion.div>
            </div>
        </nav>
    )
}
export default Navbar