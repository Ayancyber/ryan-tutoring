import pic1 from "../assets/bookingp1.webp"
import pic2 from "../assets/bookingp2.webp"
import pic3 from "../assets/bookingp3.webp"
import aboutbg from "../assets/aboutmebg.svg"
import aboutbg1 from "../assets/aboutmebg2.svg"
import { useEffect } from "react";
import { motion } from "framer-motion"

const Bookingprocess = () => {
  useEffect(() => {
    (async function () {
      try {
        const { getCalApi } = await import("@calcom/embed-react");
        const cal = await getCalApi({ "namespace": "50-min-class" });
        cal("ui", {
          "theme": "light",
          "cssVarsPerTheme": {
            "light": { "cal-brand": "#0077ed" },
            "dark": { "cal-brand": "#0077ed" }
          },
          "hideEventTypeDetails": false,
          "layout": "month_view"
        });
      } catch (error) {
        console.error("Failed to load Cal.com:", error);
      }
    })();
  }, []);

  const steps = [
    {
      number: 1,
      title: "Select your time.",
      description: "Select your prefered time,day and month after selecting your time zone.",
      bgColor: "#7bead6",
      image: pic1
    },
    {
      number: 2,
      title: "Fill the form.",
      description: "Enter your name and email (needed for contact).",
      bgColor: "#ffe03d",
      image: pic2
    },
    {
      number: 3,
      title: "Your meeting is scheduled.",
      description: "For payment and extra details the tutor will directly contact you, so please wait patiently.",
      bgColor: "#2885fd",
      image: pic3
    }
  ];

  return (
    <section id="booking" className='w-full gap-10 flex flex-col pt-20 px-4 relative pb-10 font-roboto-condensed'>
      <motion.img src={aboutbg} alt="decor" className="absolute top-0 right-0 -z-1 max-lg:w-[238px] max-lg:h-[392px]" loading="lazy" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
      <motion.img src={aboutbg1} alt="decor" className="absolute bottom-0 left-0 -z-1 max-lg:w-[238px] max-lg:h-[392px]" loading="lazy" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
      
      <motion.h2 
        className='w-full text-center max-lg:text-4xl mt-10 sm:text-6xl font-semibold text-[#0077ED]'
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Booking
      </motion.h2>
      
      <div className="max-w-6xl max-lg:px-4 max-lg:py-2 px-10 py-8 flex gap-5 max-lg:flex-col mx-auto ">
        {steps.map((step, index) => (
          <motion.div 
            key={step.number}
            className="lg:bg-white flex-1 border rounded-2xl px-4 py-4 flex flex-col justify-between border-[#0077ed] shadow-lg shadow-gray-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
          >
            <div className="w-full flex justify-start">
              <motion.span 
                className="w-[55px] h-[50px] flex justify-center items-center rounded-xl text-4xl font-black font-mono"
                style={{ backgroundColor: step.bgColor }}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.1, type: "spring", stiffness: 200, damping: 15 }}
              >
                {step.number}
              </motion.span>
            </div>
            
            <div>
              <motion.h3 
                className="max-lg:text-3xl text-3xl font-black"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2, duration: 0.4 }}
              >
                {step.title}
              </motion.h3>
              <motion.p 
                className="max-lg:text-sm text-gray-600 mt-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
              >
                {step.description}
              </motion.p>
            </div>
            
            <motion.div 
              className="w-full object-cover mt-20 border h-fit rounded-xl overflow-hidden border-[#0077ed]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
            >
              <img src={step.image} alt={`booking step ${step.number}`} loading="lazy" width="400" height="300" />
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="w-full flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
      >
        <motion.button
          data-cal-namespace="50-min-class"
          data-cal-link="ayan-imran-cog8id/50-min-class"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"light"}'
          className="glow-btn whitespace-nowrap px-6 py-3 text-white rounded-2xl active:scale-95 transition-all font-bold cursor-pointer"
          aria-label="Book a 50-minute English tutoring session"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: ["0 0 0 0 #0077ed", "0 0 20px 5px #0077ed", "0 0 0 0 #0077ed"]
          }}
          transition={{
            boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
        >
          Book 50-min Class
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Bookingprocess
