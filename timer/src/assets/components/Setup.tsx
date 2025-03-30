import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


interface SetUpProps {
    info?:string;
    style?:string;
    length?:number;
    id?:string;
  }
  


const SetUp: React.FC<SetUpProps> = ({info,style, length}) => {
  return (
    <div className = {style}>
        <div className="btn btn-circle">
        <FontAwesomeIcon icon={ faArrowUp } />        
        </div>

        {info} {length}


        <div className="btn btn-circle">
        <FontAwesomeIcon icon={faArrowDown} />        
        </div>    
    
    </div>

  );
};

export default SetUp;