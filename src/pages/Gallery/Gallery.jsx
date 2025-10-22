import React from 'react'
import { Button } from "@/components/ui/button";

import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
const Gallery = () => {
    const [category, setCategory] = useState("All")

    const shirts = ["/public/SHIRTS/Shirt1.jpg",
      "/public/SHIRTS/Shirt2.jpg",
      "/public/SHIRTS/Shirt3.jpg",
      "/public/SHIRTS/Shirt4.jpg",
      "/public/SHIRTS/Shirt6.jpg",
     "/public/SHIRTS/Shirt8.jpg",
      "/public/SHIRTS/Shirt10.jpg",
      "/public/SHIRTS/shrtvid1.mp4",
      "/public/SHIRTS/ShirtVid2.mp4" ].map(src => ({
        src,
        type: "Shirt",
     }))

     const natives = ["", native2, native3, native4, native5, native6, native7, native8, native8, native9, native10, native11, native12, native13, native14, native15, native16, native17, native18, native19, native20, native21, native22, native23, native24, native25, native26, native27, native28, native29, native30, native31, native32, native33, native34, native35, native36, native37, native38, native39, native40, native41, native42, native43, native44, native45, native46, native47,
       native48].map(src => ({
        src,
        type: "Native"
       }))

       const caps = [cap1, cap2, cap3, cap4, cap5, cap6].map(src => ({
        src,
        type: "Native Caps"
       }))
   const images = [...shirts, ...natives, ...caps]

   const categories = ["All", "Shirt", "Native Caps", "Native"]
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
                {img.src.endsWith(".mp4") ? 
                <video className='w-full h-full object-cover' src={img.src} autoPlay muted loop /> :  <img className='w-full h-full object-cover' src={img.src} alt={img.type} />
              }
            </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
