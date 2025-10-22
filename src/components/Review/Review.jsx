import React from 'react'
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";


import { useRef } from 'react';

const Review = () => {
    const caurouselRef = useRef()
    const reviews = [review1, review2, review3, review4, review5, review6, review7, review8, review9,
         review10].map(src => ({
            src,
            text: "Testimonial"
         }))
  return (
    <section id='reviews' className='bg-cream py-20 px-6 md:px-16'>
      <div className='max-w-6xl mx-auto text-center mb-12'>
        <h2 className='text-3xl font-heading text-cherry mb-3 md:text-4xl'> Customer Highlights</h2>
        <p className='text-grayish font-body'>Our satisfied clients styled by Moe Couture</p>
      </div>

     <div className='max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {reviews.map((review, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            >
                <Card className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all">
                    <CardContent className="p-0">
                        <img src={review.src} alt={review.text} className='w-full h-64 hover:scale-105 transition-transform duration-300' />
                    </CardContent>
                </Card>
            </motion.div>
        ))}
     </div>
    </section>
  )
}

export default Review
