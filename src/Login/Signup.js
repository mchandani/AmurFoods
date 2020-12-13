import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import './Switcher.css'
import { eyeSlash, eye } from 'react-icons-kit/fa/'
import { Icon } from 'react-icons-kit'
import { Redirect } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { isUserValid } from '../Redux/Actions/SignupAction'

function Signup() {
    const [showPass , setShowPass] = useState(false)
    const dispatch = useDispatch();
    const isAuthorized = useSelector(state => state.SignupReducer.isUserAuthorized)
    const user = useSelector(state => state.SignupReducer.user)
    
         console.log(user)
         console.log(isAuthorized)
    function signUp(e) {
             e.preventDefault();

             if(e.target.mobile.value.length !== 10){
                 alert('Mobile number should be of 10 digits')
             }
             if(e.target.password.value.length<8){
                alert('Password should be atleast 10 characters')
            }
             const signUpDetails = {
                 "name": e.target.name.value,
                 "email": e.target.email.value,
                 "mobile": e.target.mobile.value,
                 "password": e.target.password.value,
                 "prepFor":e.target.prep.value
    
             }
             dispatch(isUserValid(signUpDetails));
             console.log(signUpDetails)
    
            }
            if(isAuthorized)
             return <Redirect to="/" />

        return (
            <form onSubmit={signUp}>
                <div >
                    <Row>
                        <Col md="12">
                            <label className="labelxl">
                                USERNAME
                    </label>
                        </Col>

                        <Col>
                            <input required name="name" className="inputxl" placeholder="Enter username" />
                        </Col>
                    </Row>

                    <Row>
                        <Col md="12">
                            <label className="labelxl">
                                EMAIL
                            </label>
                        </Col>

                        <Col>
                            <input type="email" required name="email" className="inputxl" placeholder="Enter your email" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <label className="labelxl">
                                MOBILE NO.
                    </label>
                        </Col>

                        <Col>
                            <input required tyoe="digits" name="mobile" className="inputxl" placeholder="enter your phone no." />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <label className="labelxl">
                                PASSWORD
                            </label>
                            
                        </Col>

                        <Col>
                            <input required name="password" type={showPass===false?"password":"text"} className="inputxl" placeholder="enter your password" />
                            {showPass===false?<Icon onClick={()=>setShowPass(!showPass)} className="eyeIcon" icon={eyeSlash} size={21} />:<Icon onClick={()=>setShowPass(!showPass)} className="eyeIcon" icon={eye} size={21} />}
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <label className="labelxl">
                                PREPARING FOR
                            </label>
                        </Col>

                        <Col>
                            <select className="inputxl">
                                <option>
                                    Engineering
                                </option>
                                <option>
                                    Medical
                                </option>
                            </select>
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
export default Signup;
