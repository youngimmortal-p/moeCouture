import React from 'react'
import { Button } from "@/components/ui/button";
import shirt1 from "../../assets/SHIRTS/Shirt1.jpg"
import shirt2 from "../../assets/SHIRTS/Shirt2.jpg"
import shirt3 from "../../assets/SHIRTS/Shirt3.jpg"
import shirt4 from "../../assets/SHIRTS/Shirt4.jpg"
import shirt5 from "../../assets/SHIRTS/Shirt6.jpg"
import shirt6 from "../../assets/SHIRTS/Shirt8.jpg"
import shirt7 from "../../assets/SHIRTS/Shirt10.jpg"
import shirt8 from "../../assets/SHIRTS/ShirtVid2.mp4"
import shirt9 from "../../assets/SHIRTS/shrtvid1.mp4"
import native1 from "../../assets/NATIVES/native1.jpg"
import native2 from "../../assets/NATIVES/native10.jpg"
import native3 from "../../assets/NATIVES/native11.jpg"
import native4 from "../../assets/NATIVES/native12.jpg"
import native5 from "../../assets/NATIVES/native13.jpg"
import native6 from "../../assets/NATIVES/native14.jpg"
import native7 from "../../assets/NATIVES/native15.jpg"
import native8 from "../../assets/NATIVES/native16.jpg"
import native9 from "../../assets/NATIVES/native17.jpg"
import native10 from "../../assets/NATIVES/native18.jpg"
import native11 from "../../assets/NATIVES/native19.jpg"
import native12 from "../../assets/NATIVES/native2.jpg"
import native13 from "../../assets/NATIVES/native20.jpg"
import native14 from "../../assets/NATIVES/native21.jpg"
import native15 from "../../assets/NATIVES/native23.jpg"
import native16 from "../../assets/NATIVES/native24.jpg"
import native17 from "../../assets/NATIVES/native25.jpg"
import native18 from "../../assets/NATIVES/native26.jpg"
import native19 from "../../assets/NATIVES/native27.jpg"
import native20 from "../../assets/NATIVES/native28.jpg"
import native21 from "../../assets/NATIVES/native29.jpg"
import native22 from "../../assets/NATIVES/native3.jpg"
import native23 from "../../assets/NATIVES/native30.jpg"
import native24 from "../../assets/NATIVES/native31.jpg"
import native25 from "../../assets/NATIVES/native33.jpg"
import native26 from "../../assets/NATIVES/native34.jpg"
import native27 from "../../assets/NATIVES/native4.jpg"
import native28 from "../../assets/NATIVES/native5.jpg"
import native29 from "../../assets/NATIVES/native6.jpg"
import native30 from "../../assets/NATIVES/native7.jpg"
import native31 from "../../assets/NATIVES/native8.jpg"
import native32 from "../../assets/NATIVES/native9.jpg"
import native33 from "../../assets/NATIVES/nativevid1.mp4"
import native34 from "../../assets/NATIVES/nativevid10.mp4"
import native35 from "../../assets/NATIVES/nativevid11.mp4"
import native36 from "../../assets/NATIVES/nativevid12.mp4"
import native37 from "../../assets/NATIVES/nativevid13.mp4"
import native38 from "../../assets/NATIVES/nativevid14.mp4"
import native39 from "../../assets/NATIVES/nativevid15.mp4"
import native40 from "../../assets/NATIVES/nativevid16.mp4"
import native41 from "../../assets/NATIVES/nativevid2.mp4"
import native42 from "../../assets/NATIVES/nativevid3.mp4"
import native43 from "../../assets/NATIVES/nativevid4.mp4"
import native44 from "../../assets/NATIVES/nativevid5.mp4"
import native45 from "../../assets/NATIVES/nativevid6.mp4"
import native46 from "../../assets/NATIVES/nativevid7.mp4"
import native47 from "../../assets/NATIVES/nativevid8.mp4"
import native48 from "../../assets/NATIVES/nativevid9.mp4"
import cap1 from "../../assets/CAPS/cap1.jpg"
import cap2 from "../../assets/CAPS/cap2.jpg"
import cap3 from "../../assets/CAPS/cap3.jpg"
import cap4 from "../../assets/CAPS/cap4.jpg"
import cap5 from "../../assets/CAPS/cap5.jpg"
import cap6 from "../../assets/CAPS/cap6.jpg"
import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
const Gallery = () => {
    const [category, setCategory] = useState("All")

    const shirts = [shirt1,
      shirt2,
      shirt3,
      shirt4,
      shirt5,
      shirt6,
      shirt7,
      shirt8,
      shirt9 ].map(src => ({
        src,
        type: "Shirt",
     }))

     const natives = [native1, native2, native3, native4, native5, native6, native7, native8, native8, native9, native10, native11, native12, native13, native14, native15, native16, native17, native18, native19, native20, native21, native22, native23, native24, native25, native26, native27, native28, native29, native30, native31, native32, native33, native34, native35, native36, native37, native38, native39, native40, native41, native42, native43, native44, native45, native46, native47,
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
