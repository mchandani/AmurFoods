import NavBar from '../NavBar/NavBar'
import React from 'react'
import { Row, Col } from 'reactstrap'
import Carousel from 'react-bootstrap/Carousel'
import Video_player from '../Video_player/Video_player'
import BG3 from '../Home/home_assets/bg_3.jpg'
import './About.css'
import Footer from '../Footer/Footer'
import Ftco_section from '../ftco-section';


function About(props) {
    return (
        <div>
            <NavBar  />
            <div className='hero_wrap' style={{ backgroundImage: `url(${BG3})`, padding: "10em 0" }}>
            </div>
            <section className='bg-light'>
                <div className='container'>
                    <Row>
                        <Col className='pb-5 ' xs='12' md='6'>
                            <Video_player />
                        </Col>
                        <Col xs='12' md='6' className='pt-5 pb-5 pl-3'>
                            <div>
                                <h1 className='mb-3' style={{fontWeight:"600"}}>Welcome to Amurfoods an eCommerce website</h1>
                            </div>
                            <div>
                                <p style={{color:"#808080"}}>
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                    <br /><br />
                                    But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
                                </p>
                            </div>
                        </Col>
                    </Row>

                </div>
            </section>
            <Ftco_section style={{background: '#f7f6f2' }}/>
            <Footer/>
        </div>

    );
}

export default About;