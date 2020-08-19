import React from 'react';
import { ItemTypes } from './Constants';
import { useDrag } from 'react-dnd'

const Knight = () => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.GAMEPIECE },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })


  return (
      <div
        ref={drag} 
        style={{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          padding: '40px',
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: 'bold',
          cursor: 'move'
        }}
      >
            &#x2654;
      </div>
      
  )
}

export default Knight