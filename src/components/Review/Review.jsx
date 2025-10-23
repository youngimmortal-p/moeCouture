import React from 'react'
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import review1 from "@/assets/Customer reviews/review1.jpg";
import review2 from "@/assets/Customer reviews/review2.jpg";
import review3 from "@/assets/Customer reviews/review3.jpg";
import review4 from "@/assets/Customer reviews/review4.jpg";
import review5 from "@/assets/Customer reviews/review5.jpg";
import review6 from "@/assets/Customer reviews/review6.jpg";
import review7 from "@/assets/Customer reviews/review7.jpg";
import review8 from "@/assets/Customer reviews/review8.jpg";
import review9 from "@/assets/Customer reviews/review9.jpg";
import review10 from "@/assets/Customer reviews/review-10.jpg";


const Review = () => {
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
