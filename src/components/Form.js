import React, { useState } from 'react';

import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './form.css';
import { ToastContainer } from 'react-toastify';
const scriptURL = 'https://script.google.com/macros/s/AKfycbwziXlPKXWuGkwAZi8NlFs4byfcSzu09J_UWKho1E30on9LDuttfMWvuZrIP4K3YAyF/exec'

const Form = ({ closeModal }) => {
    
const [service, setService] = useState('')
function getService(e){
    setService(e.target.value)}

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.querySelector('.form-container');

    const data = new FormData(form);
    fetch(scriptURL, { method: 'POST', body: data })
      .then((response) => {
        console.log('Success!', response);
        toast.success('Form submitted successfully');
        form.reset();
        closeModal();
      })
      .catch((error) => {
        console.error('Error!', error.message);
        toast.error('An error occurred. Please try again');
      });
      <ToastContainer transition={Slide} />
    
  };
  function sendMsg(){
   
       
    const message = "Hi there I would like to enqure about your "+ service
    let whatsappLink = "https://wa.me/254736260626?text=" + message;
    window.open(whatsappLink,'_blank','noopenner','noreferrer')
   
  }
 
   
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
            <label className="form-label">Name:</label>
            <input type="text" name="name" className="form-input"  required />
        </div>
        <div className="form-group">
            <label className="form-label">Company:</label>
            <input type="text" name="company" className="form-input"   required />
        </div>
        <div className="form-group">
            <label className="form-label">Which Service do you require:</label>
            <input type="text" name="serviceReqiured" className="form-input"  value={service} onChange={getService} required />
        </div>
        <div className="form-group">
<label className="form-label">Phone Number:</label>
            <input type="text" name="phoneNumber" className="form-input"     required />
        </div> 
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input type="email" name="email" className="form-input"   required />
        </div>
    <button type="submit" className="form-button" onClick={sendMsg}>Submit</button>
      </form>
     
    </>
  );
};

export default Form;
