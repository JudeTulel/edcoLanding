import React from 'react'
import ContactButton from '../components/ContactButton'
import bgCoder from '../Assets/bgCoder.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faNodeJs, faPython, faReact, faUnity } from '@fortawesome/free-brands-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
  return (
    <body 
    style={{
        
        width: '100%',
        height: '100%',
        
    }}
    
    >
    <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        color:'maroon',
        zIndex: '1', 
        flexDirection:'column'
       }}><h1 
   >
      Where Ambition meets Innovation 
    </h1>
     <p style={{fontSize:'20px',
      textAlign:'center',
      padding:'20px',
      color:'black',
      textShadow: '4px 4px 8px #870000',
     
    }}>
      At EDCO we have our clients needs at heart and we are always ready to provide the best services to meet their needs.
      By leveraging the latest technologies, we are able to provide the best services to our clients to fit their business needs.
      We have a team of dedicated professionals who are fit to provide the best services to our clients.
      Dont be left out of the digital age, join us today and lets help you take your business to the next level.
      
     </p>
     <div>
      <ContactButton/>
     </div>
     <div>
      Our Tech Stack
     </div>
     <div
     style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px',
      width: '60%',
     }}
     >
      <div>
      <FontAwesomeIcon icon={faReact} color='blue' size= '6x' style={{ marginRight: 6}} />
      <p>ReactJs</p>
      </div>
      <div>
      <FontAwesomeIcon icon={faPython} color='blue' size= '6x' style={{ marginRight: 6}} />
      <p>Python</p>
      </div>
      <div>
      <FontAwesomeIcon icon={faJava} color='red' size= '6x' style={{ marginRight: 6}} />
      <p>ReactJs</p>
      </div>
      <div>
      <FontAwesomeIcon icon={faNodeJs} color='green' size= '6x' style={{ marginRight: 6}} />
      <p>NodeJs</p>
      </div>
      <div>
      <FontAwesomeIcon icon={faUnity} color='black' size= '6x' style={{ marginRight: 6}} />
      <p>Unity Game Engine</p>
      </div>
      <div>
      <FontAwesomeIcon icon={faCloud} color='blue' size= '6x' style={{ marginRight: 6}} />
      <p>Cloud Technologies</p>
      </div>
      </div>
    </div>
     
    
    </body>
  )
}

export default Home