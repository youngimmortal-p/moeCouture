import React from 'react'
import { Button } from "@/components/ui/button";
import shirt1 from "../../assets/img1.jpg"
import shirt2 from "../../assets/img2.jpg"
import shirt3 from "../../assets/img3.jpg"
import native1 from "../../assets/img4.jpg"
import native2 from "../../assets/img5.jpg"
import native3 from "../../assets/img6.jpg"
import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
const Gallery = () => {
    const [category, setCategory] = useState("All")
   const images = [
    {src: shirt1, type: "Shirt"},
    {src: shirt2, type: "Shirt"},
    {src: shirt3, type: "Shirt"},
    {src: native1, type: "Native"},
    {src: native2, type: "Native"},
    {src: native3, type: "Native"}
   ]

   const categories = ["All", "Shirt", "T-shirt", "Native", "Waistcoat"]
   const filtered = category === "All" ? images : images.filter((img) => img.type === category)
  return (
    
    <div className='min-h-screen bg-soft px-4 py-16'>
        <Navbar />
      <h1 className='text-3xl text-cherry font-heading font-semibold text-center mb-8'>Moe Couture Gallery</h1>

      <div className='flex justify-center gap-4 mb-8 flex-wrap'>
        {categories.map((cat)=>(
            <Button key={cat} variant={category === cat ? "default" : "outline"} onClick={() => setCategory(cat)}
            className={`${category === cat ? "bg-cherry text-white hover:bg-cherry/90" : "border-cherry text-cherry hover:bg-cherry hover:text-white"}`}
            >
                {cat}
            </Button>
        ))}
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {filtered.map((img, index) => (
            <div className='overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform' key={index}>
                <img className='w-full object-cover' src={img.src} alt={img.type} />
            </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
