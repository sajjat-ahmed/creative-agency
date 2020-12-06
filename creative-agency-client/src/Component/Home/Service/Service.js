import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import brandService from "../../../images/icons/service3.png";

const Service = ({service}) => {


    return (
        <Link to={`/serviceOrder/${service.title}`} >
        <Col xs={12} sm={6} md={4} className='text-center'>
            <Card className='serviceBox mt-5 ' style={{ width: '18rem',border:'none',margin:'auto' }}>
                <Card.Body>
                <img style={{height: '74px'}} src={brandService} alt=""/>
                    <Card.Title  style={{fontSize:'20px', fontWeight:'600', color:'#111430'}}>{service.title}</Card.Title>
                        <Card.Text  style={{fontSize:'16px', fontWeight:'300', color:'#111430'}}>
                        {service.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
        </Col>
        </Link>
    );
};


export default Service;