import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import icon1 from '../../../images/icons/service2.png';
import icon2 from '../../../images/icons/service3.png';
import ServiceCard from '../ServiceCard/ServiceCard';
import { UserContext } from '../../../App';

// const serviceOrder = [
//     {
//         img : icon1,
//         button : 'Pending' ,
//         title : 'Web & Mobile design',
//         description : 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
//         id : 1
//     },
//     {
//         img : icon2,
//         button : 'Done' ,
//         title : 'Graphic design',
//         description : 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
//         id : 2
//     }
// ]

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderService , setOrderService] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/review?email=" + loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setOrderService(data)
        })
    }, [])

    return (
        <div style={{background: '#FFFFFF'}}>
            <div className='container'>
                <div style={{padding: '20px 0'}} className="Topbar d-flex">
                    <div style={{width: '20%'}} className="top">
                    <Link to='/home'><img style={{width: '150px'}} src={logo} alt=""/></Link>  
                    </div>
                    <div style={{width: '80%'}} className="userData d-flex justify-content-between">
                        <h5 style={{marginTop: '15px'}}>Service list</h5>
                        <h5 style={{marginTop: '15px'}}>{loggedInUser.name}</h5>
                    </div>
                
                </div> 
            </div>
            
            <div className="row">
                    <div className="col-md-3">
                        <div className="orderList">
                            <NavLink className="navList" activeClassName='text-success' to="/order">
                                Order
                            </NavLink>
                            <NavLink className="navList" activeClassName='text-success' to="/serviceList">
                                Service list
                            </NavLink>
                            <NavLink className="navList" activeClassName='text-success' to="/review">
                                Review
                            </NavLink>
                        </div>
                    </div>
                    
                    <div className="col-md-9">
                        <div className="orderSubmit">
                            <div className="row">
                            {
                            orderService.map(service => <ServiceCard key={service.id}  service={service}></ServiceCard>)}
                            </div>
                        </div>
                    </div>
                </div >
            </div>
    );
};

export default ServiceList;