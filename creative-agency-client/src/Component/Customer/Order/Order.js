import React, { useContext, useState } from 'react';
import { Link, NavLink, useParams  } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Order.css';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {title} = useParams()
   
    const { register, handleSubmit, err } = useForm();
    const onSubmit = (data) => {
        data.email = `${loggedInUser.email}` ;
        data.Design = {title};
        fetch('http://localhost:5000/NewOrder', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success) {
                alert('Your order place successfully')
            }
        })
        .catch(err => {
            console.log(err)
        })
    };

    return (
        
        <div style={{background: '#FFFFFF'}}>
            <div className='container'>
                <div style={{padding: '20px 0'}} className="Topbar d-flex">
                    <div style={{width: '20%'}} className="top">
                    <Link to='/home'><img style={{width: "150px"}} src={logo} alt=""/></Link>  
                    </div>
                    <div style={{width: '80%'}} className="userData d-flex justify-content-between">
                        <h5 style={{marginTop: '15px'}}>Order</h5>
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
                            <form onSubmit={handleSubmit(onSubmit)} >
                            <input name="name" style={{width:'570px', padding:'20px 10px'}} className='form-control' value={loggedInUser.name || 'No Name'} disabled /> <br/> 
                            <input name="email" value={loggedInUser.email || 'Email Not Found'} style={{width:'570px', padding:'20px 10px'}}  className='form-control'  disabled /> <br/>
                            <input name="Design" value={title} style={{width:'570px', padding:'20px 10px'}} className='form-control' disabled/> <br/>
                            <div className='d-flex'>
                                <input name="Price" style={{width:'288px', padding:'20px 10px'}} placeholder='Price' className='form-control'  value='$1500' disabled /> 
                                <label style={{width:'270px', backgroundColor: "#DEFFED", color: "#009444", border: "1px solid #009444" }} class="custom-file-upload ml-3 p-2 text-center">
                                    <input style={{ display: "none" }} name='file' type="file" />
                                     upload project file 
                                </label>
                            </div>
                            
                            <input type="submit" value='SEND' style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#111430' ,color:'#FFFFFF' , borderRadius:'10px' , marginTop :'20px'}} />
                            </form>
                        </div>
                    </div>
                </div >
            </div>
    );
};

export default Order;