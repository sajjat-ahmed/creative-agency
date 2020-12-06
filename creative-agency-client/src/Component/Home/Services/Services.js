import React, { useEffect, useState } from 'react';
import {Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
  const [getService , setGetService] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/getService")
        .then(res => res.json())
        .then(data => {
            setGetService(data)
        })
    }, [])
  return (
    <div style={{marginTop:'100px', marginBottom:'50px'}}>
        <Container>
            <h4 style={{color:'#2d2d2d', fontSize:'34px', fontWeight:'600'}} className='text-center'>
                Provide awesome <span style={{color: '#7AB259'}}>services</span>
            </h4>
            <Row xs={12} className='align-items-center' style={{marginTop:'60px'}}>
                {
                    getService.map(service=>{
                        return <Service service={service}></Service>
                    })
                }
            </Row>
        </Container>

    </div>
);
};

export default Services;