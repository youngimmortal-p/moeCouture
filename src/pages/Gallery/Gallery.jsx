import React from 'react'
import { Button } from "@/components/ui/button";

import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
const Gallery = () => {
    const [category, setCategory] = useState("All")

    const shirts = ["/SHIRTS/Shirt1.jpg",
      "/SHIRTS/Shirt2.jpg",
      "/SHIRTS/Shirt3.jpg",
      "/SHIRTS/Shirt4.jpg",
      "/SHIRTS/Shirt6.jpg",
     "/SHIRTS/Shirt8.jpg",
      "/SHIRTS/Shirt10.jpg",
      "/SHIRTS/shrtvid1.mp4",
      "/SHIRTS/ShirtVid2.mp4" ].map(src => ({
        src,
        type: "Shirt",
     }))

     const natives = ["/NATIVES/native1.jpg", 
     "/NATIVES/native2.jpg", "/NATIVES/native3.jpg", "/NATIVES/native4.jpg", "/NATIVES/native5.jpg", "/NATIVES/native6.jpg", "/NATIVES/native7.jpg", "/NATIVES/native8.jpg", "/NATIVES/native9.jpg", "/NATIVES/native10.jpg", "/NATIVES/native11.jpg", "/NATIVES/native12.jpg","/NATIVES/native13.jpg", "/NATIVES/native14.jpg", "/NATIVES/native15.jpg",'/NATIVES/native16.jpg', "/NATIVES/native17.jpg", "/NATIVES/native18.jpg", "/NATIVES/native19.jpg", "/NATIVES/native20.jpg", "/NATIVES/native21.jpg", "/NATIVES/native23.jpg", "/NATIVES/native24.jpg", "/NATIVES/native25.jpg", "/NATIVES/native26.jpg", "/NATIVES/native27.jpg", "/NATIVES/native28.jpg", "/NATIVES/native29.jpg", "/NATIVES/native30.jpg", "/NATIVES/native31.jpg", "/NATIVES/native33.jpg", "/NATIVES/native34.jpg", "/NATIVES/nativevid1.mp4", "/NATIVES/nativevid2.mp4", "/NATIVES/nativevid3.mp4", "/NATIVES/nativevid4.mp4", "/NATIVES/nativevid5.mp4", "/NATIVES/nativevid6.mp4", "/NATIVES/nativevid7.mp4", "/NATIVES/nativevid8.mp4", "/NATIVES/nativevid9.mp4", "/NATIVES/nativevid10.mp4", "/NATIVES/nativevid11.mp4", "/NATIVES/nativevid12.mp4","/NATIVES/nativevid13.mp4", "/NATIVES/nativevid14.mp4", "/NATIVES/nativevid15.mp4", 
     "/NATIVES/nativevid16.mp4",
  ].map(src => ({
        src,
        type: "Native"
       }))

       const caps = ["/CAPS/cap1.jpg", "/CAPS/cap2.jpg", "/CAPS/cap3.jpg", "/CAPS/cap4.jpg", "/CAPS/cap5.jpg", "/CAPS/cap6.jpg"].map(src => ({
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
