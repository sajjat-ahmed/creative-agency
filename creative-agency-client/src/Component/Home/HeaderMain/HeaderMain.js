import React from 'react';
import frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
  return (
    <main style={{height:'100%'}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1 p-5">
                <h1 className="font-weight-bold">Let’s Grow Your <br/> Brand To The <br/> Next Level</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                <button className="btn btn-dark text-white pr-4 pl-4"> Hire us</button>
            </div>
            <div className="col-md-6 col-sm-6 col-12 p-5">
                <img  src={frame} alt="" className="img-fluid"/>
            </div>
        </main>
  );
};

export default HeaderMain;