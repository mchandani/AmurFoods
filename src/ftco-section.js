import React from 'react';
import {Row, Col } from 'reactstrap'
import './Home/Home.css'
import DeliveryTruck from './Home/home_assets/delivery-truck.svg'

import Crown from './Home/home_assets/crown.svg'
import Diet from './Home/home_assets/diet.svg'
function Ftco_section(){
    return(
        <section className='section'>
                <div className='container'>
                    <Row>
                        <Col xs='12' md='4' className='d-flex justify-content-center align-items-center' style={{ flexDirection: "column" }} >
                            <div className='icon-bg d-flex justify-content-center align-items-center mb-2'>
                                <img className='icon' alt='delivery-truck icon' src={DeliveryTruck} />
                            </div>
                            <h3 className='h3'> free shipping</h3>
                            <span className='media-span'>on orders above rs 200</span>
                        </Col>
                        <Col xs='12' md='4' className='d-flex justify-content-center align-items-center' style={{ flexDirection: "column" }}>
                            <div className='icon-bg d-flex justify-content-center align-items-center mb-2' style={{ backgroundColor: "#dcc698" }}>
                                <img className='icon' alt='diet icon' src={Diet} />
                            </div>
                            <h3 className='h3'>always fresh</h3>
                            <span className='media-span'>product well package</span>
                        </Col>
                        <Col xs='12' md='4' className='d-flex justify-content-center align-items-center' style={{ flexDirection: "column" }} >
                            <div className='icon-bg d-flex justify-content-center align-items-center mb-2' style={{ backgroundColor: "#a2d1e1" }}>
                                <img className='icon' alt='premium icon' src={Crown} />
                            </div>
                            <h3 className='h3'> superior quality</h3>
                            <span className='media-span'>quality products</span>
                        </Col>
                    </Row>
                </div>
            </section>
    );
}

export default Ftco_section;