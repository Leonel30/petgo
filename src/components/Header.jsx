import React from "react";

export const Header = ({ title,handleView }) => {
  const handleChangeView = ()=> {
    handleView("location")
  }
  return ( 
    <div onClick={handleChangeView } className="container-header">
      <div className="menu-header"></div>
       {title && <span><b>{title}</b></span>}
       <div className="menu-car"></div>
      </div>
  )
};
