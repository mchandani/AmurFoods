import React, { useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import Signup from './Signup'
import Login from './Login'
import './Switcher.css'
import {useHistory} from 'react-router-dom'
import Switcher_img from './switcher_img.png'
import NavBar from '../NavBar/NavBar'
function Switcher()  {

   const [showLogin,setShowLogin] = useState({'selected':'login'})

   const history = useHistory()
     
        return (
            <div>
            
            <section >

            
            <div className='container'>

                
                <Row >
                   

                    <Col >
                        <div className="formPos">
                        <Row>
                            <Col style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <button className={showLogin.selected=== 'login' ? "selectedbtn" : "unselectedbtn"} onClick={() => setShowLogin({selected:'login'})}>LOGIN</button>
                                <button className={showLogin.selected === 'signup' ? "selectedbtn" : "unselectedbtn"} onClick={() => setShowLogin({selected:'signup'})}>SIGNUP</button>
                            </Col>
                        </Row>
                        {(() => {
                            switch (showLogin.selected) {
                                case 'login' : return <Login />;
                                case 'signup' : return <Signup />;
                                default: return "#0000FF";
                            }
                        })()}
                        </div>     
                        <div className="forgotpass">forgot your password?don't worry <a href="https://www.google.com">Click here</a></div>                   

                    </Col>
                </Row>
            </div>
            </section>
            </div>
        );
    }


export default Switcher;