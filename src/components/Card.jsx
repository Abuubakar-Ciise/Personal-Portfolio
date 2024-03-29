import React from "react";
import './BioCard.css'


const BioCard = ({children ,color,width,height,boxShadow }) =>{

  const cardStyle = {
    backgroundColor : color,
    maxWidth: width,
    height: height,
    boxShadow: boxShadow ,
  }
    return(
        <div className="card" style={cardStyle} >
          {children}
        </div>
    )
}
export default BioCard