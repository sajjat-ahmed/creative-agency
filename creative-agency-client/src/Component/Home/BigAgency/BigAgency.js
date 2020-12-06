import React from 'react';
import LogoSet from '../LogoSet/LogoSet';

const agencyLogo = [
  {
    pic: 'slack.png'
  },
  {
    pic: 'google.png'
  },
  {
    pic: 'uber.png'
  },
  {
    pic: 'netflix.png'
  },
  {
    pic: 'airbnb.png'
  }
]

const BigAgency = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="container row pt-5 d-flex justify-content-center">
        {
          agencyLogo.map(logo => <LogoSet logo={logo}></LogoSet>)
        }
      </div>
    </div>
  );
};

export default BigAgency;