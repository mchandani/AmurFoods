import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Home.css'
import CarouselGallery from './Carousel_gallery'
import NavBar from '../NavBar/NavBar'
import Ftco_section from '../ftco-section'
import Footer from '../Footer/Footer'
import Product1 from './home_assets/product-1.jpg'
import SetStarRating from '../setStarRating'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/Actions/HomeAction'
import { Increase } from '../Redux/Actions/UpdateCartAction'

function Home() {
    const AddToCart = (product) => {
        dispatch(addToCart(product))
    }

    const increase = (product) => {
        dispatch(Increase(product))
    }

    const dispatch = useDispatch();
    const [product] = useState({});
    const [products] = useState([
        {
            name: 'Bell Pepper',
            quantity: '500 Gm',
            cost: 'Rs 120',
            image: 'data:image/jpeg;base64,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',
            discount: '30%',
            discountedPrice: 'Rs 84',
            units: 0,

        },
        {
            name: 'Ladyfinger',
            quantity: '500 Gm',
            cost: 'Rs 50',
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUWFRIVFhISFRIPFxIVFRUWFhUWFRUYHSggGBolHhcVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARMAtwMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUCAwYHAQj/xAA9EAACAQIDBQQIBAUDBQAAAAAAAQIDEQQFIQYSMUFRE2FxgSIyQlKRobHBB7LR4RRiY3LwU3PxFRYjM0T/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAgMEBQEGB//EADERAQACAgEDAwIFBAAHAAAAAAABAgMRBBIhMQVBURMiFDJhcaGBkbHBBhUjJNHh8P/aAAwDAQACEQMRAD8A9xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUOebUUsPPs91zqWUnFWVk+F2zPlzxj7aeTKBhtuIN2qUnFdYyU2vFWRTXnV33hHrh0+ExUKkVOnJSi+DX0fR9xsraLRuE4luJAAAAAAAAAAAAAAAAAAAAAABXZvk1LERtONpWsprSS/VdxXkx1vGpNbcZmOwEqdPtKVSVWqruUZJLeX9Po0uT493AyTxOmu6zuUL13HZUZBnVTDz3oaxek6b4O3Xo+8rx5JpO4/rCmtprL1DLMxp14KpTd1wa5xfNNcmdCl4vG4aImJSyb0AAAAAAAAAAAAAAAAAAAAAAAeY7dyw8K/a0JxdR6VqS4S/m09rr8et+ZyL0rfdZ7+8Lr+n55xTm6Z1CJk2cSw9RVaesJWUoe9H9VrZkaZJx23HhgrbTt8ZtlhYRupOWidkrWv1bNtuTSPDrcfgZc8RaviVVD8R6N7OlK3VPe+xXHMrPs229FyRG+qHR4DaDD1YdpGokuk/Raf38jRXLW0b25uTi5cdumY7ptDF05+pOMvBk4tE+FNqWr5hvPUQAAAjTx9JVFSc0ptJqPOzvb6MhN6xbp33ebjwkk3oAAAAAAAAAAUecbRU6TcVKO8uLfBfApvmrVswcO+TvqXOZntHVnSklUThJNOVJpOKfR8UZ8mWZr57N+HiUpeNxqY9peb4iDpzUt7ei3ZN8bvlLo+j59xz4wRvcPo55MWx9No127rjKZqV4x1i72fTnb/ADoWY++6y/POTWtcsxSdx7M8ZhHKFm7Nap8U10ZDcTGpdH031KeLMxbvWf4/ZX9rGHop621b017r8S2NRHZ3a+pYLzvq/SISVm8aKTa3ml6NPgl3zf2H1Iq6FOJbP2r2j3n/AMJOLzzEUadPEdpG0n6kI7u759ScZbxEW2pjg4Ml7Yunx7y9M2Pz5YuipP1lbe778GdDFk667fL8zjfQyTVfFrIAAPHtoMc6tWdW9t+o9135RtCnbw4+Zxst5vbfzLNNvu29fhGyS42SV3rc7MNLIAAAAAAAABQbb53/AAmEqVV62kIf3S4fcpz5Oim4bvTuN+I5FaT48y/P2Ix1Wq3Kc229Xq/ocme/eX6FixY8carCxyTMoUm3OUt23qLVyfRPgkTpaIlk5vFtl1FfPyyr51TldKho+Tm/tp8h1/EM9vSpvXptf+0LPJlWjBKlhW48bKom+N+DQ6JtO9ORl9G4NJ1N9f3SauapvsZxlRqP1VUs1fxXA8nFExqOzFn9BiKdeG+4UlGrFuam1GScoupO63eTUIq7k+PK3O5OmqxqZYuD6ZyMmaJ6fyz/AIX2Fx2EUb057svfcH+aS0JRNI/L5fT3xcmZ1kjcfG/9K6tmSctyuo1IN2u1qr8LPkQjJ31buunj6r1YZmsu4/Dul2Nfci705024+CaeverNG/DGp7Pm/UMk5I3bzE93o5pcoAr9oMT2eGrTXGNKo147rt87EMs9NJn9Hk+HjWLnJU6bfLp4to4Vp1rTL7vcaFVSjGS4SSkvBq6O/E7jbXDYegAAAAAAAB5t+OFRrDUFydZ38oOxj5fiH0H/AA9EfWtP6f7eQ4eole99VZW+5ijXu+v3MrPZ/K+3nZ8PuTpi6p0z8zlfRruHT19iYxW86kY6cC2eNqN7c2nrFpnXTtR4mjWoXcKz06dCrUx4bq3x5u1qKvOK9WThOrK7cbpkN7W4646xNaQm7PZd/GVWpT3Wk5Nvg1+pKlOudKs3I/C06qxv2T8zr1KSlg4uM42burXF5msdKvDWmSY5E7iXKTqPhf8AYhEN1ph6l+EeO7ScYN+lBTa/tcbP57pu41t/a+O9Yx9N9x4l6ZmWcUKH/uqxhfgm9X5LU03vWkbtLhTaI8oUdq8JKLcKm+0vVinvPwTIRyMc+JR+pVxuebXTxMJ0oRSg9HpfmnZvyOdyOX11mlVU5JlVV8E50o6ar7O5kt4hXELnDbV16OHp04xTcFuXacm17Onhp5I3YeXPRFY8ws+pMQn5VtxP/wCiEVHqvRl5R5/Ivpyp39/Z7GWfdcUNscO3aUakF78oPd82XxnrKUZYl0EJppNNNNXTWqa6ouWsgAAAAA89/GujfBQl7taPzTRk5cfbDueg21yJj5h4mYpfYwkYHHVKT3oSaZKs6V5MdMkatDbiM1rT9apJ+djy13tMOOniGutiJyS3pO3JEeqU61rE9oY4vFucYR91NXPIhVFOmZmPdnlmLdNtp8VbyPZnXgnHF41LOGJfaKouvPoQ3tO9YinSiV4Ped1xbJ+FNrx0uh2Dzn+FxPatXUKOIlu+840pOMfOSivMt4/bJv8Ad876t3x7/VPy3Oajqyr1UqtSd3KT6vlF+zFcElb9KM3Kml962+VvqF4sfOrxhF21s4q66WfErpy75bdo8KupB/6gnN9onFavdi9ZPzXzF8lJj7+36POp8qY+c2t1bq5K8rfUzfX6rarWHm5bquJcLdrStfhOHofTR/A21mI/PXX6w96vljjcdeO9QeqWqes7d0nx8NC2Y7bxef5JnarweYVJSVpyu+8x0yZevyht6P8Ah3n/AGm9hp+tG7jyuvaVuXX4nX42br3WfMNOG2+0u4Na8AAAAFHtrlyr4OrBq9kpLxi7/S5Tnr1Ulr4OacWetoeFYzI0r7unQ5+n2ePlz7tNDKPeZ7HhOeR8NGNwSg+4hfsuxZZug1ZXZCF2tQ1slCMsqcW+Cb8E2eTMPIvES+ttaPTx0Hl7NolsxmI9GPUlWNufbtModHEred+LjaPfJyj9t5+RdWOmsy4Pqt9Y9fq6/Z7D70oxutdNTmTT6mTpfLWncuixeGqUGpL5FlsF+PPVCEypMdV3qik+aXDlyKcs9c7n3Rh0uX5VTnST30pdNDbj4eK1NxPdP2Q8dWnCLpVFePJ9Cu2S2OOi/h452emsdDPGTU7q8ZYbFJS37LejrbqbK3i0dXvD1Y7H4/dzClJP1pqL5aS0f1JcW3/V38pY51Z7qdhtAAAABjUgmmnwaafmeTG3sTqdvHM8wLp1JR6Nr5nNvXU6fU8XLF6RKmlEhtshT5ynp0+5Vby28aY0tsg2IqVUp126cXqor13439X6+By+V6pTHM1x95/j/wBqORz61nVO8u0y/ZrC0uFJNr2pLefxepyLeo5Mk7vM/tHaHMycnLf3Wu5TXsJCOTinzVn+/wCWmthKMlaUU13pM0Uy4fbt/XT3qyR4lQZrsLg6ye6nSlylB2XnDh8DqYOVNY/N/fv/AD5S/E5o893nWcbNvCKMqj3pOs4xlG9lTjC93yTlKXD+Q6WHlY8+OYr594/+9nJ9Sva2u3ZuyzHWs0+BlyUms7hxdOjnnznG0m3ZWLJ5E2rqzyYVuOrp7jTV1GzSVrWb+JROpiP2RbcFjJJ8WVzNqd4epOJxTlxIXyTfyhLRuKSuuNuB7ERpZHeFVipWdy/GhtYbJrexuHX9WH5ka+LH3pU72h+iDstwAAAAAHD7dZdaSqpaS0f9y/b6MyZ6d9ut6dl7TSXDxwM6k9yCu+Pcl1b6GDNkrjrNreIdz6kVruXRZbkFKnacrTkubXB9y5Hz3K5tsmPq328REf7+WS/JtaemO0LiJxLTtVLJoi82+ToPd3uRf9G304ye3grkjq6UaRGF0PikXY8k1/Z5Ndq/OcFGrTlCcbxkrNP6+Jpx5rUyRevZVkxVvWay8hqUXRqypP2ZNX6rk/hY+qi0ZaRePd8xlxzS81n2WGFlvcyro3KqYbsVGyT6kZp0ozD5QqldqvFlRd0V1pt5L5G8WeTWYkrOkDHR1LcfZ5PlcbG4e2Lw8r69pTt5yRv41e8SspHeHvx1mwAAAAACNmODjVpyhLnwfR8mRtXqjSeO80tFocVhcLGneMddbyfvP9Fy+PM+C9W5n1ck46/lj+Zd6LTb7pbnCzOTudPdvsSMkpeGoKafpWa6m/icOnIpP36tHz8KMmSaT47I84tNox3rOO00lbWYnu1zpidwnFmvdPYlPbKSjaxurlxxGvKE1mXL5/spQrNzs4z9+Hy3o8H9e81YOdkwxqJ3X4ZM/Cpl7z2n5cTmGTVsO/SV4+/Hh5rkdfFyseePt8/DjZ+LkxefHyhOvyZd0sibSo3V0/IfSma7eSk06m7xKo+2e6EykRqpk+0iPikRmombP1WsVQt/qU/zI24I1aFlZ7w/QZ1WwAAAAFJic8lGpOmqa9C3rTUXK6Tul5mK/Lmt7Vivj9df2ebhVYnaqbfZqnGO96N1JyavpfhY5XM9XvWlorXW4nvvx/DRgrFrxtCjU3T46Y27cpM8TGcdFrH5rmdG01z4emI1av8AMM0bpbfs1wkcuYaY7sokSWe9p39SczHTrXdHXd9p0t52vYngxTlv0RLy1+mNtFWFnY8mJrOpW1ncNDPVjBsnWdEwh4rDppq10+T1L6X1O4V2rExqXmW1GXdhW9H1Jq8e63FfT4n03Cz/AFsffzHl85zOPGK/bxPhvyCCm7Sf7mzFXc6YZSszilKyKORERZBEjJ8DO8bahorEvVpszQvi6H+7T/Mjbhr3WVjvD306DYAAAADmdrMtk71qfRKaXRcJeRzubgm0ddf6oWj4cU3JTjP3Xw6nBz8Wb1nXulhzdFot8LqnUhUjo7S918f3OR+Gmm4v2n2+HXryK5Pyo8K247v5nmO1qW3CVtaQP+4qanb2fe5d1u7iaJ9Oves28T8Mn/MKVvr2+VtSx0Jq8ZJnOvgvSdWh08eWmSN1lKpsplOyXUoSilL6GrJxM/HiMk/3UVyVv2Ra0r6lF7za02ldSNQjzELoapk4Sa1IuxzqULQ438QcNelGXuzXwkmvrY7HplunLNPmHK9SrvHE/EuWy+bTTR1p3E7hw5hPU25XZReZme6uPLY4a3JRR7Oi2porCDpdiqG9jqHdJO39qb+xtxR3hbT80PazY1gAAAAMDitp9mWr1aHDVyprl3xXNd3+Lm8njdO7V8e8KrY5nw5NSkuOj6rh+xy8uOLdp8PK2mGnMX2kNybfJqS1at3mOuKMNuqq62e169NlXHK4qLTcn0b0t5GmMl57sk1hLyWmoYiKnqvZfS6svm/mU86JthtMeWv06/Tmivs7mCPl5fRSkTxEmrN6GnLzM2WvRaeyqMdYncI7M21rRMshdCPMshJqXEtrG5h5bw5zb1/+CS53h8pJ/RM7PDr/ANz/AElyfUJj6E/vH+XD5dKzOx7uHK8UUeTHdWxsS0jLZShqiykEO3/DfAOWKdS2lOMn5v0V9X8DXhjuvxx3eomloAAAAAAMDiMfg4TlJ2trKzWml9L9T89y+o5Mee8V/LudR8Rv2dO3EpkrEz515UmOypRTlo0rt2vF2L8fqNckxWY1/hky8GaRvajxFaCty723/nM6Fa2+HPtarfk1FVK/O0bOzVtVqu/oV8/JOPjzr37L/TqRfPH6d3YwR8vL6OVnTpLs9VrY7+LjY44kzavfTHa09faVaz59rR6hbVdVFqFkJvlKGtzZxsfVaJV5LahxG22YJ1XBezx8bf8APxO9xa6mb/PaP6Pn/UMm7RT4cpgMSt7dfkb5jttztugoO6IIyyUSfl5MJmDo31sW0gh63sXlfYUE5K06npS6peyn9fM3Y66hpxxqHQk1oAAAAAADksVT3ZyXRv6n5n6hhnDyb1n5l28NuqkS1KKej4O9/Ap48xGSOqdQlkjcOXzDJHKpJQ9S6acuXcuuv2O3HqNK179+/wDDkX9Ota/29oTsDlCptTu3LjxaWqtw56HP5PNtm3X2dLi8SuGP1+VvTlZpmLHfovFtb002jcaSsRj95WSsdLk+qWy06K11tRTB0zuZQ2zl6adNEycLIaWi/HSbeHs2R80xio0ZVGm7LSK4yk+CR3eJx99oYs+WKRMvIMXWqzlKUovek23pzZ1644js+evFrTMz7o0cLO97WNFYrrUo9ErrB4iUVqiv6M+yE1WFDEb3svyTJRSUdO32UyqUpRnKOiaaTXPvNOOi2tXptBaGlbVtQTfQAAAAAxlI82KDOqXp764Na+KPkP8AiLiz1xmr48S6XDv26ZVzdk+8+ZraYbdbaowEyl2Z2Im2MUey9mX08GubJxCUQ1NNmjHiteeyUzECjbidnjcbXZRkyREbTqeDhONmr+J9LgxUpXUOLmva9tyiYjZWlP2V8C2cUSpQnsJSZ5GE23UthKXMnGLSMrTBbJUYeyicY4R06LC4WMFZIsiNPYhKSPU4hkHoAAAAPjAi1WyuZThGrRUk0ynNjplpNLeJWVmazuFVWw+69eHJnx3K9L/DWmZ7x7S6OPNF/wB0U4TQ3U6yUWnFO/PmjZg5GOmOcd6RO/f3V2pM23Eo0mZV0Q1SmSiE4q1uoXYorvu90xlV7zqYp+Fcw0wk5vTgdTBDNldHluGeh2MMS5uTW1vCgaohQ2xok9DNUz15pkog0ysDT6HoAAAAAHy5GZGE43Iy9iUWdMqt2XQ01KV1ZmbNWuSs0t4lZWdTuFLiaLg9fJ9T4jn8K3Hv+k+JdHHeLw0SZgWxDXNk4hOIaJyLK1me0LEedTpq+iNuLjz5lGZZ0cHOfHh0Orh40ypveIXuX5ZbkdjBx9MGXLtf4egkjpVrphtZISLNIPp6AAAAAAAAAAB8seaCx50jFwIzR7toq0uhnyY5WVuiVaV9GrrvMeTFF41aNwvrfXeECrla5Nr5nKyejYbTuu4aa8qfdoeU/wAz+BGvo2OPMzK38VIsnXNtmqnp9K+Hk8lJo5XFcEa8fErHsqtyJlPoYNLkbKYYhlvl2nU6djVWmlFrbbEixB9AAAAAAAAAAAAAAAALHkwMHTRGccS9iZhi6KITihLrl87BdB9GDrl97FHv0oOuX1U0SikPOqWaiS0i+noAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q==',
            discount: null,
            discountedPrice: 'Rs 50',
            units: 0,
        },
    ]);
    return (
        <Container fluid>
           
            <CarouselGallery />
            <Ftco_section />
            <section>
                <div style={{ textAlign: "center" }} className='container'>
                    <Row>
                        <Col>
                            <span className='feature-subheading'>Featured products</span>
                            <h2 className='heading-section-h2'>Our Products</h2>
                        </Col>
                    </Row>
                </div>
                <div className='container'>
                    <Row>
                        {products.map((product, index) => (

                            <Col lg='3' md='6' key={index} >
                                <div className='product'>
                                    <a>
                                        <img className='product-img' alt='products' src={product.image} />
                                        <span className='status'>{product.discount}</span>
                                    </a>
                                    <div className='product-details'>
                                        <span style={{ color: "black", display: "block", fontSize: "14px" }} className='fontxl'>{product.name}</span>
                                        <div >
                                            <del style={{ color: "gray" }}>
                                                {product.discount === null ?
                                                    ''
                                                    :
                                                    product.cost
                                                }
                                            </del>
                                            <span>
                                                {product.discountedPrice}
                                            </span>
                                            <div className='mt-3'>
                                                {product.units === 0 ?
                                                    <div>
                                                        <button style={{background:"transparent",border:"none"}} onClick={() => { AddToCart(product); increase(product) }}>Add to cart</button>
                                                        
                                                    </div>
                                                    :
                                                    <div >
                                                        <div>
                                                            -
                                                            </div>&nbsp;
                                                            {product.units}&nbsp;
                                                            <div>
                                                            +
                                                            </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
            <Footer />
        </Container>
    );
}


export default Home;

