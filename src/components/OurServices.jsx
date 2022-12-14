import React from 'react'
import ServicesData from './ServicesData'


const OurServices = () => {
  return (
    <div className="services">
    <h1>
      Our <span>Services</span>
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, maiores.
    </p>
  
    <div className="service-card">
      <ServicesData
        image="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8R3ltJTIwZXF1aXBtZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
        heading="Personal Training"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, maiores."
      />
      <ServicesData
        image="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8R3ltJTIwZXF1aXBtZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
        heading="Personal Training"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, maiores."
      />
      <ServicesData
        image="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8R3ltJTIwZXF1aXBtZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
        heading="Personal Training"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, maiores."
      />
    </div>
  </div>
  )
}

export default OurServices