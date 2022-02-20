import React from 'react';
import './ServicesCard.css';

const ServicesCard = (props) => {
  return (
    <div className="ServicesCardContainer col-md">
      <div className="ServicesCardBody text-left">
        <div className="IconContainer">{props.icon}</div>
        <h3 className="pt-3">{props.Heading}</h3>
        <p className="lead pt-3 text-muted">{props.description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
