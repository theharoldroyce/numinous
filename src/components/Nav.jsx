import {React,useState} from 'react'
import Logo from '../assets/logo.jpg'
import { FaBars, FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Nav = () => {
    const [nav, setNav] = useState(false);
    const navmenu =[
        {
            id: 1,
            link:'event'
          },
        {
            id: 2,
            link:'artist'
          },
        {
            id: 3,
            link:'merch'
          },
        {
            id: 4,
            link:'about'
          },
        {
            id: 5,
            link:'contact'
          },
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 bg-[#323232] text-[#FFFFFF]'>
        <div className='inline-flex item-center hover:scale-105 duration-200 hover:text-[#14FFEC]'>
           <img className='h-7 w-7 rounded-md'src={Logo} alt='/'/>
           <h1 className='h1'>NUMINOUS</h1>
        </div>
        <ul className='hidden  md:flex'>
           {navmenu.map(({id,link}) => (            
              <li key={id} className='h2'>{link}</li>
           ))}
            <li className='h2'><CgProfile size={30}/></li>
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10  md:hidden'>
           {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-[#323232] '>
                {navmenu.map(({id,link}) =>(
                    <li key={id} className='h3'>{link}</li>
                ))}
                   <li className='h3'><CgProfile size={45}/></li>
            </ul>
        )}
   </div>
  )
}

export default Nav