import React from 'react'
import Item1 from '../assets/shopitems/m1.webp'
import Item2 from '../assets/shopitems/m2.webp'
import Item3 from '../assets/shopitems/m3.webp'
import Item4 from '../assets/shopitems/m4.webp'
import Item5 from '../assets/shopitems/m5.webp'
import Item6 from '../assets/shopitems/m6.webp'
import Item7 from '../assets/shopitems/m7.webp'
import Item8 from '../assets/shopitems/m8.webp'
const Shop = () => {

  const shirts = [
    {
      id: 1,
      src: Item1,
    },
    {
      id: 2,
      src: Item2,
    },
    {
      id: 3,
      src: Item3,
    },
    {
      id: 4,
      src: Item4,
    },
    {
      id: 5,
      src: Item5,
    },
    {
      id: 6,
      src: Item6,
    },
    {
      id: 7,
      src: Item7,
    },
    {
      id: 8,
      src: Item8,
    },
  ]
  return (
    <div className='bg-[#323232] w-full h-full pb-10'>
        <h1 className='title'>Numinous Official Merch</h1>

      <div className='shopcard'>
          {shirts.map((obj) => (
            <div key={obj.id} className='shopcard2'>
             <img src={obj.src} alt="/" className="rounded-md px-10 py-3" />
             <div className='py-2'>
               <a>               
                 <button className="shopbtn">Buy now!</button>
               </a>
             </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Shop