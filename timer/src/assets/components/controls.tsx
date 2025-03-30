import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';



interface ControlsProps {
    style?:string;
  }
  


const Controls: React.FC<ControlsProps> = ({style}) => {
  return (
    <div className = {style}>
        
        <div className="btn">
        <FontAwesomeIcon icon={ faPlay } />        
        </div>

        <div className="btn">
        <FontAwesomeIcon icon={faPause} />        
        </div>    

        <div className="btn">
        <FontAwesomeIcon icon={faRefresh} />        
        </div>  
    
    </div>

  );
};

export default Controls;