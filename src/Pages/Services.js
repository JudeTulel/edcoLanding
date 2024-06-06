import React from 'react';
import { useParams } from 'react-router-dom';
import { Services } from '../components/Data'

const Service = () => {
    const  {serviceId}  = useParams();
    console.log(serviceId);
    const service = Services.find(service => service.link === serviceId);
    

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <div style={{backgroundImage: `url(${service.image})`,
        backgroundSize:'contain',
         height: 'auto',
         width: '100%'
       , display: 'flex'
       , flexDirection: 'column',
        alignItems: 'center'
       , justifyContent: 'center',
        
       }}>
       
        <div>
            <h1 style={{
                color: 'white',
                textShadow: '4px 4px 8px #000000',
                fontSize: '40px',
                fontFamily: 'Roboto, sans-serif',
                textAlign: 'center',
                
                padding: '20px',
                
            }}>{service.title}</h1>
            <br/>
           
      
        <h2 style={{
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        textShadow: '4px 4px 8px #000000',
        fontSize: '30px',
        

    }}>What is {service.title}?</h2>
         <div style={{
            margin:'20px',
            padding: '20px',
            border: '1px solid black',
            borderRadius: '10px',
            boxShadow: '5px 5px 15px #000000',
            backgroundColor: 'white',
            opacity:0.9,
            zIndex:1
            
        }}>
            
         <p style={{
            color: 'black',
            textShadow: '4px 4px 8px #fff',
            fontSize: '20px',
            fontFamily: 'Times New Roman, Times, serif',
            textAlign: 'center',
            padding: '0px',
            margin: '20px',
            fontWeight:'bold',
            opacity:1,
        }}>{service.description}</p>

        </div>
        <div style={{backgroundColor: 'black',
                opacity:0.7, }} >
            <h2 style={{
                color: 'white',
                textAlign: 'center',
                padding: '20px',
                textShadow: '4px 4px 8px #000000',
                fontSize: '30px',
                 opacity:1,            
                
            }}>Why is {service.title} important?</h2>
            <div style={{
                margin:'20px',
                padding: '20px',
                border: '1px solid black',
                borderRadius: '10px',
                boxShadow: '5px 5px 15px #000000',
                backgroundColor: 'white',
                opacity:0.9,
                zIndex:1
                
                
            }}>
                <div className='why-choose-us'>
                        {
                          Object.keys(service.advantages).map((key,index)=>(
                            <div key={index}>
                                 <h3 style={{fontFamily:'Times New Roman,Times, serif'}}>{service.advantages[key]}</h3>
                            </div>
                          ))
                   }
                </div>
    
            </div>
        </div>
        </div>
        </div>
    );
};

export default Service;
