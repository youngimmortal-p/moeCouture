import React from 'react'
import { motion } from "framer-motion"
import aboutImg from "@/assets/aboutimg.jpg"
const About = () => {
  return (
    <section id='about' className='bg-soft py-20 px-6 md:px-16'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
      <motion.img
      src={aboutImg}
          alt="About Moe Couture"
          className="rounded-lg shadow-md object-cover w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="font-Aller text-3xl md:text-4xl font-heading text-cherry mb-4">
            About Moe-Couture
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Moe-Couture blends modern creativity with cultural roots.
            Our designs reflect elegance, confidence, and individuality — made to elevate your style.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Founded in Lagos, Nigeria, we specialize in custom pieces, tailoring, and seasonal collections,
            combining tradition with contemporary fashion artistry.
          </p>
          <a
            href="#contact"
            className="bg-cherry text-white px-5 py-2 rounded-md hover:bg-cherry/80 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
  }


export default About
