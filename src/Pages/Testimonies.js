import React from 'react'
import { testimonials } from '../components/Data'
const Testimonies = () => {
  

  return (
    <div className="testimonies">
      {testimonials.map((testimonial, index) => (
        <div>
          
        <div key={index} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'maroon',
          fontFamily: 'Roboto',
          flexDirection: 'column'
          
        }}>
          <h3 style={{alignSelf:'center'}}>{testimonial.name}</h3>
          <p style={{fontSize:20}}>{testimonial.description}</p>
        </div>
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center'

          }}>
            <img src={testimonial.img} alt={testimonial.name} style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              boxShadow: '5px 5px 15px #000000',
              margin: '20px',
              
            
            }}/>
      
          </div>
          <hr style={{}}></hr>
        </div>
      ))}
    </div>
  );
}

export default Testimonies