import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


interface SetUpProps {
    info:string;
    style?:string;
    length?:number;
    id?:string;
    handler:any;
  }
  


const SetUp: React.FC<SetUpProps> = ({info,style, length, handler,id}) => {
  return (
    <div className = {style} >
        <div className="btn btn-circle" id = {`${info.toLowerCase()}-increment`} onClick={()=> handler("up", id)}>
        <FontAwesomeIcon icon={ faArrowUp } />        
        </div>

        <p className ="text-2xl" id = {id}>{info}: <span id = {`${info.toLowerCase()}-length`}>{length}</span>  </p>


        <div className="btn btn-circle" id = {`${info.toLowerCase()}-decrement`} onClick={()=> handler("down", id)}>
        <FontAwesomeIcon icon={faArrowDown} />        
        </div>    
    
    </div>

  );
};

export default SetUp;