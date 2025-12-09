import React from 'react'

const Content = ({frnds}) => {
    
  return (
    <>
    <div>
        <ul>
            {
            frnds.map((name, index) => (
            <li key={index}>{name}</li>
            ))
            }
        </ul>
    </div>
    
      </>
  )
}

export default Content