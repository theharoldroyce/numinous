import React from 'react'
import '../components/hero.css'
import Video from '../assets/video/concertbg.mp4'
import { Link } from "react-router-dom";

const Herobody = () => {
  return (
    <div className='-z-50'>
        <div className='main :relative'>
        <video src={Video} autoPlay loop muted className='opacity-60'/>
        <div className="content">
            <h1 className='herotxt'>Home of the Country's Rising & Biggest Rock act's in the scene today.</h1>
            <div className='pt-20'>
            <Link to='/hero'><button className='herobtn'>Explore More</button></Link>
            </div>           
        </div>
    </div>
    </div>
  )
}

export default Herobody