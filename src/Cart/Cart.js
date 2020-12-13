import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import NavBar from '../NavBar/NavBar';

import { Row, Col } from 'reactstrap'
function Cart() {


    const [cartProducts] = useState([useSelector(state => state.home.cartValue)]);
    
    console.log(cartProducts)

    return (

        <div>
            

            <section style={{ top: "10vh", position: "relative" }}>
                <div className='container' >


                    <h3 >Shopping Cart</h3>

                    <hr />
                    {cartProducts[0].map((cartProduct, index) => (
                        <Row style={{ borderBottom: "1px solid #DDD", borderBottomStyle: 'dashed', margin: "10px 0px" }}>
                            <Col style={{ padding: "0" }} className='d-flex' >

                                <div>
                                    <img style={{ height: "170px" }} className='product-img' src={cartProduct.image} alt={cartProduct.name} />
                                </div>

                                <div style={{ marginLeft: "4rem", display: "flex", flexDirection: "column" }}>
                                    <div style={{ fontSize: "20px" }}>
                                        {cartProduct.name}, &nbsp;
                                    {cartProduct.quantity}
                                    </div>
                                    <div>
                                        <span style={{ color: "green" }}>In stock</span>
                                    </div>
                                    <div>
                                        <div>

                                            {cartProduct.discount === null ?
                                                ''
                                                :
                                                <>
                                                    <del>{cartProduct.cost}</del> &nbsp;
                                                <span style={{ color: "red" }}>{cartProduct.discount}</span>
                                                </>
                                            }
                                            <div >

                                                {cartProduct.discountedPrice}

                                            </div>

                                        </div>

                                    
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>


                            </Col>
                        </Row>
                    ))}


                </div>
            </section>

        </div>
    );
}

export default Cart;