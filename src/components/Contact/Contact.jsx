import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id='contact' className='bg-white py-20 px-6 md:px-16'>
        <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-heading text-cherry mb-6">
          Contact Us
        </h2>
        <p className="text-grayish mb-8">
          Have questions or want to book an appointment? Get in touch below.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-md mx-auto shadow-md border-none bg-soft">
            <CardContent className="p-6">
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="focus-visible:ring-cherry"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="focus-visible:ring-cherry"
                />
                <Textarea
                  rows="5"
                  placeholder="Your Message"
                  className="focus-visible:ring-cherry"
                />
                <Button className="bg-cherry hover:bg-cherry/80 text-white w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
