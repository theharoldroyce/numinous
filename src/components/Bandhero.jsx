import React from 'react'
import { Link } from "react-router-dom";
import { BsFacebook,BsInstagram,BsYoutube,BsSpotify } from "react-icons/bs";
import Queso from '../assets/band/a1.jpg'
import Grey from '../assets/band/a2.jpg'
import Voc from '../assets/band/a3.jpg'
import Type from '../assets/band/a5.jpg'
import Rep from '../assets/band/a6.jpg'
import Sky from '../assets/band/a4.jpg'

const Bandhero = () => {
    const items = [
        {
            id:1,
            band: 'QUESO',
            dsc:'Queso are a Filipino Rock band who enjoyed mainstream success in the late 1990s and early 2000s. The band eventually broke up after the release of their third album but reunited in 2012.At the height of their popularity Queso, who previously called themselves Cheese until 2003, were considered part of the Filipino Nu Metal genre. The band is best known for the single Mottaka, a song about their ideology of their friendship, from their second album Pilipinas.',
            mem:'Ian Tayao,Ocho Toleran,B-Boy Garcia,Tuts Calinawan,Enzo Ruidera,John Raphael Warp Gonzales',
            src: Queso,
            fb:'https://www.facebook.com/queso.ph',
            ig:'https://www.instagram.com/quesoofficial/',
            yt:'https://www.youtube.com/results?search_query=queso+ph',
            spt:'https://open.spotify.com/artist/6wQZGv0ObyrUqhj6r9fP0d',
        },
        {
            id:2,
            band: 'GREYHOUNDZ',
            dsc:'A group of individuals who write and perform real music. Playing a fusion of rock, metal, hip-hop, experimental, blues and juice. This band paved the way to a whole new different music movement in the scene.',
            mem:'Reg Rubio,Niño Avenido,TJ Brillantes,Audie Avenido',
            src: Grey,
            fb:'https://www.facebook.com/greyhoundzgang',
            ig:'https://www.instagram.com/greyhoundzgang/',
            yt:'https://www.youtube.com/channel/UCaknIhLzBUkbisvfqKGGXpQ',
            spt:'https://open.spotify.com/artist/6M0MpnwmM5ypkHNBJDQnIu',
        },
        {
            id:3,
            band: 'Valley Of Chrome',
            dsc:'Can a band serve two masters at the same time? One side a driving heavy sound. While the other one is of pure melodicism that can lead massive sing-a-longs. This has been Valley of Chromes main specialty- the best of both worlds. Heavy, melodic, and real. A forceful tug at your heartstrings.',
            mem:'Rogel Africa,Jordan Constantino,Tatel Marcelino,Paul Eusebio,Kaloi Cambaliza',
            src: Voc,
            fb:'https://www.facebook.com/valleyofchromemusic',
            ig:'https://www.instagram.com/valleyofchromemusic/',
            yt:'https://www.youtube.com/channel/UC2EthH95ByezN-K_XeKuGbw',
            spt:'https://open.spotify.com/artist/7F9tLNLBhpF8CBucAx4RIH',
        },
        {
            id:4,
            band: 'Typecast',
            dsc:'Filipino emo rock band from the Philippines. Originally an underground act, they have surfaced on the mainstream Philippine music scene, while managing to hold on to their underground roots.',
            mem:'Steve Badiola,Chi Ressureccion,Pakoy Fletchero,Sep Roño',
            src: Type,
            fb:'https://www.facebook.com/typecastrock',
            ig:'https://www.instagram.com/typecastrock/',
            yt:'https://www.youtube.com/channel/UC2cRFoCbKALXLddpBRibFKg',
            spt:'https://open.spotify.com/artist/7vbAIeiw0afuAqTiReJItY',
        },
        {
            id:5,
            band: 'The Republicats',
            dsc:'Filipino punk-rock band The Republicats happens to be the “brains” behind the popular song. But more than just a ditty, it is catchy, raw, but with a strong message.',
            mem:'Wendy Villanueva,Renmin Nadela,Lax Berin,Jomal Linao',
            src:Rep,
            fb:'https://www.facebook.com/TheRepublicats',
            ig:'https://www.instagram.com/therepublicats/',
            yt:'https://www.youtube.com/channel/UCgseK0L5VPh0RAsrDLk1YFQ',
            spt:'https://open.spotify.com/artist/0Uq8YHs8dkDlgct3xPBLZU',
        },
        {
            id:6,
            band: 'SkyChurch',
            dsc:'Skychurch are a Filipino metal band founded in 1990 when the three Dela Cruz brothers—Rommel, Robert, and Russell—were barely in their teens. Despite long gaps between album and EP releases, Skychurch is one of the more senior bands in the Filipino rock and metal scene.',
            mem:'Russell Dela Cruz,Jomal Linao,Paul Eusebio',
            src: Sky,
            fb:'https://www.facebook.com/skychurchph',
            ig:'https://www.instagram.com/skychurchph/',
            yt:'https://www.youtube.com/channel/UCXEey1_b3kldWmLv3uJwVIQ',
            spt:'https://open.spotify.com/artist/1TatObVuEr3xINQwOAiJKB',
        },
    ]

  return (
    <div className='bg-[#323232] w-full h-full pt-6 pb-10'>
    {items.map(({ id,band,dsc,mem,src,fb,ig,yt,spt}) => (
      <div key={id} className='bandcard'>
        <div className='grid md:grid-cols-2 m-auto gap-7'>
          <div  className='flex flex-col justify-center'>  
            <div  className='text-center px-1'>
              <p className="text-xl font-sfbold text-white px-2">{band}</p>
              <p className='bandsc'>
                {dsc}
              </p>
              <p className="text-lg font-sfmid text-white">Members</p>
              <p className='bandsc'>
                {mem}
              </p>
            </div>             
          </div>
          <div className="flex flex-col justify-center">
            <div className="p-2">
              <img className="m-auto p-2" src={src} alt="/" />
              <div className="p-2">
                <ul className="flex justify-center gap-7">
                  <li>
                    <a href={fb} target="_blank" rel="noopener noreferrer"><BsFacebook className='bandsocial'/></a>
                  </li>
                  <li>
                    <a href={ig} target="_blank" rel="noopener noreferrer"><BsInstagram className='bandsocial'/></a>               
                  </li>
                  <li>
                    <a href={yt} target="_blank" rel="noopener noreferrer"><BsYoutube className='bandsocial'/></a>                    
                  </li>
                  <li>
                    <a href={spt} target="_blank" rel="noopener noreferrer"><BsSpotify className='bandsocial'/></a>                   
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Link to='/contactcard'><button className='btnsm'>Book us now!</button></Link>
      </div>
      ))}
    </div>
  );
}

export default Bandhero