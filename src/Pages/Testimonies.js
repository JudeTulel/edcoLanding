import React from 'react'
import { testimonials } from '../components/Data'
const Testimonies = () => {
  

  return (
    <div className="testimonies">
      {testimonials.map((testimonial, index) => (
        <div>
          <div>
            <img src={testimonial.img} alt={testimonial.name} />
          </div>
        <div key={index} className="testimonial">
          <h3>{testimonial.name}</h3>
          <p>{testimonial.description}</p>
        </div>
        </div>
      ))}
    </div>
  );
}

export default Testimonies