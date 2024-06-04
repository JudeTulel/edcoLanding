import React from 'react'
import { theTeam } from '../components/Data'
const Team = () => {
  return (
    <div>
      {theTeam.map((teamMember,index)=>(
          <div > 
          <img src={teamMember.img}
          alt={teamMember.name}
          style={{
            width:'400px',
            height:'400px'
            }}
            />
            <h3>
              {teamMember.designation}
            </h3>
            <p>{teamMember.name}</p>
          </div>
      )
       )}
    </div>
  )
}

export default Team