import React from 'react'
import {  faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ContactButton = () => {
  return (
    <div>
        <div>
                <button style={{
                    color:'white',
                    backgroundColor:'maroon',
                    border:'none',
                    padding:'10px 20px',
                    borderRadius:'15px',
                    cursor:'pointer',
                    
                }}>
                    <FontAwesomeIcon icon={faComment} color='white' size='32px' style={{ marginRight: 6}} />
                    Get in Touch
                </button>
            </div>
    </div>
  )
}

export default ContactButton