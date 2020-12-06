import React from 'react';
import anylogo from '../../../images/logos/airbnb.png';

const LogoSet = ({logo}) => {
  return (
    <div className="col-md-2 col-sm-4">
      <img className="m-2" style={{height: '36px'}} src={require(`../../../images/logos/${logo.pic}`)}  alt=""/>
    </div>
  );
};

export default LogoSet;