import React from 'react';

interface HeaderProps {
    title:string;
  }
  


const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <div className = "text-3xl fixed left-0 top-0 h-1/10 flex flex-row justify-center items-center footer font-sans font-bold bg-neutral text-neutral-content p-3 ">
        <h1> {title} </h1>
    </div>

  );
};

export default Header;