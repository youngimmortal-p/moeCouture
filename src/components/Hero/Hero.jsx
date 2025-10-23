import React from 'react'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"


const Hero = () => {
  return (
    <section className='h-screen flex items-center justify-center bg-cover relative' style={{backgroundImage: 'url("/bg.png")'}}>
        <div className='absolute inset-0 bg-black/10'></div>

        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative text-center text-white px-6"
      >
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          We've Got You Covered in Style
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl mb-6"
        >
          Discover the latest designs from Moe-Couture
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Button
            asChild
            className="bg-cherry text-white px-6 py-3 rounded-md hover:bg-cherry/80 transition"
          >
            <a href="/gallery">Explore Gallery</a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
