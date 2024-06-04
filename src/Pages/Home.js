import React,{SVGProps} from 'react'
import ContactButton from '../components/ContactButton'
import bgCoder from '../Assets/bgCoder.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faNodeJs, faPython, faReact, faUnity, } from '@fortawesome/free-brands-svg-icons'
import { faBrain, faCogs, faDatabase, faGlobe, faMobileAlt, faRecycle, faSyncAlt, faWarehouse, faChartLine } from '@fortawesome/free-solid-svg-icons'

import { faCloud } from '@fortawesome/free-solid-svg-icons'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = (props) => {
  return (
    <body
      style={{

        width: '100%',
        height: '100%',
       
       

      }}

    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'maroon',
        fontFamily: 'Roboto',
        flexDirection: 'column'
      }}><h1
      >
          Who are we?
        </h1>
        <p style={{
          fontSize: '20px',
          textAlign: 'center',
          padding: '20px',
          color: 'black',
          border: '2px'
          , borderColor: 'maroon',
          fontFamily: 'Roboto',



        }}>
          EDCO is a tech Consulting and analytics agency head quaterd in Eldoret-Kenya .We have our clients needs at heart and we are always ready to provide the best services to meet their needs
          by leveraging the latest technologies.
          We have a team of experienced dedicated professionals who are fit to provide the best services to our clients.
          Dont be left out of the digital age, join us today and lets help you take your business to the next level.

        </p>
        <div>
          <ContactButton />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'maroon',
          fontFamily: 'Roboto',
          flexDirection: 'column'
        }}>
          <h1>Our Tech Stack</h1>
        </div>
        <div
          className='tech-stack'

        >
          <div>
            <FontAwesomeIcon icon={faReact} color='#0165FC' size='6x' style={{ marginRight: 6 }} />
            <p>ReactJs</p>
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="6em" height="6em" viewBox="0 0 24 24" {...props}><path fill="green" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115c-.28-.394-.53-.954-.735-1.44c-.036.495-.055.685-.523 1.184c-.723.566-4.438 3.682-4.74 10.02c-.282 5.912 4.27 9.435 4.888 9.884l.07.05A74 74 0 0 1 11.91 24h.481a29 29 0 0 1 .51-3.07c.417-.296.604-.463.85-.693a11.34 11.34 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218m-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695c-.381-.045-.765-1.76-.765-2.405"></path></svg>
          <p>Mongo DB</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPython} color='#0197F4' size='6x' style={{ marginRight: 6 }} />
            <p>Python</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faJava} color='red' size='6x' style={{ marginRight: 6 }} />
            <p>Java</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faNodeJs} color='green' size='6x' style={{ marginRight: 6 }} />
            <p>NodeJs</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faUnity} color='black' size='6x' style={{ marginRight: 6 }} />
            <p>Unity Game Engine</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCloud} color='blue' size='6x' style={{ marginRight: 6 }} />
            <p>Cloud Technologies</p>
          </div>

        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'maroon',
          fontFamily: 'Roboto',


          flexDirection: 'column'
        }}>
          <h1>Our Services</h1>
        </div>
        <div className="services-section">
          <div className="services-row">
            <Link to="/BigData" className="service-item">
              <FontAwesomeIcon icon={faDatabase} color="#a4c161" size="4x" />
              <p>Big Data</p>
            </Link>
            <Link to="/AppDevelopment" className="service-item">
              <FontAwesomeIcon icon={faMobileAlt} color="#a4c161" size="4x" />
              <p>Application Development</p>
            </Link>
            <Link to="/WebDevelopment" className="service-item">
              <FontAwesomeIcon icon={faGlobe} color="#a4c161" size="4x" />
              <p>Web Development</p>
            </Link>
            <Link to="/MachineLearning" className="service-item">
              <FontAwesomeIcon icon={faBrain} color="#a4c161" size="4x" />
              <p>Machine Learning</p>
            </Link>
          </div>
          <div className="services-row">
            <Link to="/CloudComputing" className="service-item">
              <FontAwesomeIcon icon={faCloud} color="#a4c161" size="4x" />
              <p>Cloud Computing</p>
            </Link>
            <Link to="/DataWarehousing" className="service-item">
              <FontAwesomeIcon icon={faWarehouse} color="#a4c161" size="4x" />
              <p>Data Warehousing</p>
            </Link>
            <Link to="/ETLServices" className="service-item">
              <FontAwesomeIcon icon={faSyncAlt} color="#a4c161" size="4x" />
              <p>ETL Services</p>
            </Link>
            <Link to="/DataModelling" className="service-item">
              <FontAwesomeIcon icon={faChartLine} color="#a4c161" size="4x" />
              <p>Data Modelling</p>
            </Link>
          </div>
          <div className="services-row">
            <Link to="/ERPImplementation" className="service-item">
              <FontAwesomeIcon icon={faCogs} color="#a4c161" size="4x" />
              <p>ERP Implementation</p>
            </Link>
            <Link to="/EWasteManagement" className="service-item">
              <FontAwesomeIcon icon={faRecycle} color="#a4c161" size="4x" />
              <p>E-waste Management</p>
            </Link>
          </div>

        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'maroon',
          fontFamily: 'Roboto',


          flexDirection: 'column'
        }}>
          <h1>Why choose us </h1>
        </div>
        <div className='why-choose-us'>
          <div>
            <h3>Experienced Professionals</h3>
            <p>Our team is made up of experienced professionals who are dedicated to providing the best services to our clients</p>
          </div>
          <div>
            <h3>Client Focused</h3>
            <p>Our clients are our priority, we are always ready to provide the best services to meet their needs</p>
          </div>
          <div>
            <h3 >Latest Technologies</h3>
            <p>We leverage the latest technologies to provide the best services to our clients</p>
          </div>
          <div>
            <h3>Quality Services</h3>
            <p>We provide quality services to our clients to meet their business needs</p>
          </div>
        </div>
        

      </div>



    </body>
  )
}

export default Home