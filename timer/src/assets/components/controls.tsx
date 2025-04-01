import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';



interface ControlsProps {
    style?:string;
    handler?:any;
  }
  


const Controls: React.FC<ControlsProps> = ({style, handler}) => {
  return (
    <div className = {style}>
        
        <div className="btn" id = "start_stop" onClick = {()=>handler("playpause")}>
        <FontAwesomeIcon icon={ faPlay } />
        <FontAwesomeIcon icon={faPause} />        
        
        </div>


        <div className="btn" id = "reset" onClick = {()=>handler("reset")}>
        <FontAwesomeIcon icon={faRefresh} />        
        </div>  
    
    </div>

  );
};

export default Controls;