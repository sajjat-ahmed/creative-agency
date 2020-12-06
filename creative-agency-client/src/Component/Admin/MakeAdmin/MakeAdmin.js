import React, { useContext,useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);  
    
    const { register, handleSubmit, err } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addEmail', {
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
        .catch(err => console.log(err))
        
    }

    const addServices ={
        width : '900px',
        height : '300px',
        background : '#ffffff',
        borderRadius : '15px' ,
        padding :'20px'
    }
    return (
        <div style={{background: '#FFFFFF'}}>
        <div className='container'>
            <div style={{padding: '20px 0'}} className="Topbar d-flex">
                <div style={{width: '20%'}} className="top">
                <Link to='/home'><img style={{width: '150px'}} src={logo} alt=""/></Link>  
                </div>
                <div style={{width: '80%'}} className="userData d-flex justify-content-between">
                    <h5 style={{marginTop: '15px'}}>Make Admin</h5>
                    <h5 style={{marginTop: '15px'}}>{loggedInUser.name}</h5>
                </div>
            
            </div> 
        </div>
        
        <div className="row">
                <div className="col-md-3">
                    <div className="orderList">
                        <NavLink className="navList" activeClassName='text-success' to="/adminService">
                        Service list
                        </NavLink>
                        <NavLink className="navList" activeClassName='text-success' to="/addService">
                        Add Service
                        </NavLink>
                        <NavLink className="navList" activeClassName='text-success' to="/makeAdmin">
                        Make Admin
                        </NavLink>
                    </div>
                </div>
                
                <div className="col-md-9">
                    <div className="orderSubmit">
                    <form onSubmit={handleSubmit(onSubmit)} style={addServices} >
                                <label>Email</label>
                            <div className='d-flex '>
                                <input name="email" style={{width:'400px', padding:'20px 10px'}} placeholder='Enter Your Email' className='form-control' ref={register({ required: true })} />
                                <input type="submit" value='SEND' style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#009444' ,color:'#FFFFFF' , borderRadius:'10px' , marginLeft :'20px'}} />
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default MakeAdmin;