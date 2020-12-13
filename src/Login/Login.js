import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import './Switcher.css'
import { eyeSlash, eye } from 'react-icons-kit/fa/'
import { Icon } from 'react-icons-kit'
import { Redirect } from 'react-router-dom'
import { useSelector , useDispatch  } from 'react-redux'
import { authenticateUser  } from '../Redux/Actions/LoginAction';


function Login() {
    const dispatch = useDispatch();
    const [showPass , setShowPass] = useState(false)
    const isAuthorized = useSelector(state => state.LoginReducer.isUserAuthorized)
    
    function userLogin(e) {
        e.preventDefault();
        if(e.target.password.value.length<10){
            alert('Password should be atleast 10 characters')
        }
        const userDetails = {
            "email": e.target.email.value,
            "password": e.target.password.value,   
            
        }

        dispatch(authenticateUser(userDetails));
             console.log(userDetails)
    }
    if(isAuthorized)
    {
        return <Redirect to="/" />
    }
    return (
        <form onSubmit={userLogin}>
            <div >
                <Row>
                    
                    <Col md="12">
                        <label className="labelxl">EMAIL</label>
                    </Col>

                    <Col>
                        <input required type="email" name="email" className="inputxl" placeholder="Enter your email or phone number" />
                    </Col>
                    
                </Row>
                <Row>
                    <Col md="12">
                        <label className="labelxl">PASSWORD</label>
                    </Col>

                    <Col>
                        <input required name="password" type={showPass===false?"password":"text"} className="inputxl" placeholder="Enter password" />
                        {showPass===false?<Icon onClick={()=>setShowPass(!showPass)} className="eyeIcon" icon={eyeSlash} size={21} />:<Icon onClick={()=>setShowPass(!showPass)} className="eyeIcon" icon={eye} size={21} />}
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign:"center"}}>
                        <button className="enterbtn" type="submit">Enter</button>
                    </Col>
                </Row>
            </div>
        </form>
    );
    }

export default Login;