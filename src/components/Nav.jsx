import {React,useState} from 'react'
import { Link } from "react-router-dom";
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

    <div className='nav'>
        <div className='logo'>
        <Link to='/'><img className='h-7 w-7 rounded-md'src={Logo} alt='/'/></Link>
        <Link to='/'><h1 className='h1'>NUMINOUS</h1></Link>
        </div>
        <ul className='hidden  md:flex'>
           {navmenu.map((obj) => (            
             <Link key={obj.id} to={obj.link} ><li className='h2'>{obj.link}</li></Link> 
           ))}
           <Link to='/loginsignin'><li className='h2'><CgProfile size={30}/></li></Link>
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
           {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className='navmobile'>
                {navmenu.map((obj) =>(
                   <Link key={obj.id} to={obj.link}> <li className='h3'>{obj.link}</li> </Link> 
                ))}
                <Link to='/loginsignin'><li className='h3'><CgProfile size={45}/></li></Link>
            </ul>
        )}
   </div>

  )
}

export default Nav