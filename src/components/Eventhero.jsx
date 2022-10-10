import React from 'react'
import Up1 from '../assets/upevents/up1.jpg'
import Up2 from '../assets/upevents/up2.jpg'
import Up3 from '../assets/upevents/up3.jpg'
import Metal from '../assets/pastevent/past1.jpg'
import Resure from '../assets/pastevent/past2.jpg'
import One from '../assets/pastevent/past3.jpg'
import Notfor from '../assets/pastevent/past4.jpg'
import Tribal from '../assets/pastevent/past5.jpg'
import Dream from '../assets/pastevent/past6.jpg'
const Eventhero = () => {
    const upcoming = [
        {
            id: 1,
            src: Up1,
            title:'DEMONVAPE  10th ANIVERSARY',
            date:'October 01, 2022',
            loc:' South Triangle, Queszon City Philippines',
        },
        {
            id: 2,
            src: Up2,
            title:'ROCKTOBER FEST',
            date:'October 22, 2022',
            loc:'Lucena City, Queszon Philippines',
        },
        {
            id: 3,
            src:Up3,
            title:'DEMONVAPE  10th ANIVERSARY',
            date:'October 01, 2022',
            loc:'South Triangle, Queszon City Philippines',
        },
    ]
    const previous = [
      {
          id: 1,
          src: Metal,
          title:'METAL NIGTHS 1',
          date:'Mach 26, 2020',
          loc:'BGC, Taguig City Philippines',
      },
      {
          id: 2,
          src: Resure,
          title:'RESURGENCE',
          date:'October 18, 2019',
          loc:'Bacolod City,  PhilippinesBacolod City,  Philippines',
      },
      {
          id: 3,
          src:One,
          title:'ONE NIGTH. ONE CAUSE.',
          date:'October 20, 2018',
          loc:'Dasmarinas City , Philippines',
      },
      {
        id: 4,
        src: Notfor,
        title:'NOT FOR THE FAINT of HEART',
        date:'October 06, 2018',
        loc:'Cebu City, Philippines',
    },
    {
        id: 5,
        src: Tribal,
        title:'DUTDUTAN ROADTRIP',
        date:'July 28, 2018',
        loc:'Philippines',
    },
    {
        id: 6,
        src: Dream,
        title:'DREAMERS CRIME',
        date:'July 07, 2018',
        loc:'Dasmarinas City, Philippines',
    },
  ]
  
  return (
    <div className='bg-[#323232] w-full h-full'>
      <h1 className="title">Up comming Events</h1>
        <div className="card py-5 md:py-14 ">
          {upcoming .map(({ id, src, title,date,loc }) => (
          <div key={id} className="card2">
            <div className="px-16 py-2">
              <img src={src} alt="/" className="rounded-md" />
            </div>
            <div className="cardtext">
              <p>{title}</p>
              <p>{date}</p>
              <p>{loc}</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className="title">Our Previous Events</h1>
        <div className="card py-5 md:py-14 ">
          {previous.map(({ id, src, title,date,loc }) => (
          <div key={id} className="card2">
            <div className="px-16 py-2">
              <img src={src} alt="/" className="rounded-md" />
            </div>
            <div className="cardtext">
              <p>{title}</p>
              <p>{date}</p>
              <p>{loc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eventhero