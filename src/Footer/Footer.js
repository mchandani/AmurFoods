import React from 'react'
import { Row, Col } from 'reactstrap'
import './Footer.css'
import { Icon } from 'react-icons-kit';
import { facebook, instagram, mapMarker, phone, envelope ,copyright} from 'react-icons-kit/fa/';
function Footer() {
    return (
        <footer className='footer-section'>
            <div className='container'>
                <Row>
                    <Col md='3' className='mb-5'>
                        <h2 className='h2'>
                            Amur Foods
                        </h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </Col>
                    <Col md='3' className='mb-5'>
                        <div >
                            <h2 className='h2'>
                                Help
                            </h2>
                            <div className='d-flex' style={{ flexDirection: "column" }}>
                                <button className='ft-btn pb-2 pt-2'>Shipping Information</button>
                                <button className='ft-btn pb-2 pt-2'>Returns & Exchange</button>
                            </div>
                        </div>
                    </Col>
                    <Col md='3' className='mb-5'>
                        <h2 className='h2'>
                            Connect with us
                        </h2>
                        <div className='d-flex space-evenly' >
                            <div className='ft-icon-bg d-flex justify-content-center align-items-center' style={{marginRight:"2rem"}}>
                                <a >
                                    <Icon icon={facebook} size='30' />
                                </a>
                            </div>
                            <div className='ft-icon-bg d-flex justify-content-center align-items-center'>
                                <a>
                                    <Icon icon={instagram} size='30' />
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col md='3' className='mb-5'>
                        <h2 className='h2'>
                            Have a question?
                        </h2>
                        <div className='d-flex mb-2' style={{ flexDirection: "row" }}>
                            <div style={{width:"50px"}}>
                                <a>
                                    <Icon icon={mapMarker} size='22' />
                                </a>
                            </div>
                            <div >
                                <span >Airport Area, Gorakhpur, Uttar Pradesh 273001</span>
                            </div>
                        </div>

                        <div className='d-flex mb-2' style={{ flexDirection: "row" }}>
                            <div style={{width:"40px"}}>
                                <a>
                                    <Icon icon={phone} size='22' />
                                </a>
                            </div>
                            <div >
                                <span >+2 392 3929 210</span>
                            </div>
                        </div>
                        <div className='d-flex mb-2' style={{ flexDirection: "row" }}>
                            <div style={{width:"44px"}}>
                                <a>
                                    <Icon icon={envelope} size='22' />
                                </a>
                            </div>
                            <div >
                                <span >info@gmail.com</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign:"center"}}>
                        <span>Copyright <Icon icon={copyright}/>2020 Amur Foods All rights reserved </span>
                    </Col>
                </Row>
            </div>
            
        </footer>
    );

}
export default Footer;