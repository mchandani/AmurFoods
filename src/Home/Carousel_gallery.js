import Carousel from 'react-bootstrap/Carousel'
import BG1 from './home_assets/bg_1.jpg'
import './Home.css'
import BG2 from './home_assets/bg_2.jpg'
import BG3 from './home_assets/bg_3.jpg'
import React, { useState } from 'react'
import { Contanier, Row, Col } from 'reactstrap';

export default function Carousel_gallery() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel style={{ height: '100vh' }}>
      <Carousel.Item interval={50000} style={{ height: "100vh" }}>
        <img
          className="d-block imgxl"
          src={BG2}

        />
        <div className='overlay'>

        </div>
        <div className='contain '>
          <Row style={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
            <Col md='12' className='carousel-col' >
              <h1 className='overlayspan' > we serve fresh vegetables and fruits</h1>
              <h2 className='fontxl'>We deliver organic foods and vegetables</h2>
            </Col>
          </Row>


        </div>
      </Carousel.Item>
      <Carousel.Item interval={50000} style={{ height: "100vh" }}>
        <img
          className="d-block imgxl"
          src={BG1}

        />
        <div className='overlay'>

        </div>
        <div className='contain '>
          <Row style={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
            <Col md='12' className='carousel-col' >
              <h1 className='overlayspan' > 100% fresh and organic food</h1>
              <h2 className='fontxl'>We deliver organic foods and vegetables</h2>
            </Col>
          </Row>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

