import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>

            <CardGroup >

                <Card className='footer'>

                    <Card.Body>

                        <h5>Our Services</h5>
                        <p>Services</p>

                    </Card.Body>

                </Card>
                <Card className='footer'>

                    <Card.Body >

                        <h5>Contact </h5>
                        <p>shimulmajumdar906@gmail.com</p>
                        <p>01303461237</p>


                        <ul class="nav ">
                            <li class="nav-item"><a class="nav-link" href="https://www.fiverr.com" title="Twitter"><i
                                class="fab fa-twitter"></i><span >Twitter</span></a>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="https://www.facebook.com/shimulmajumdarshuvo"
                                title="Facebook"><i class="fab fa-facebook"></i><span >Facebook</span></a>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="https://www.youtube.com" title="Instagram"><i
                                class="fab fa-instagram"></i><span >Instagram</span></a>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="https://github.com/ShimulMajumdarShuvo" title="Github"><i
                                class="fab fa-github"></i><span >Github</span></a>
                            </li>
                        </ul>


                    </Card.Body>

                </Card>

            </CardGroup>

            <div className='text-center'><p >Copy Right<small><span>&copy;</span>
                Developer Shimul Majumdar. {new Date().getUTCFullYear()}</small></p>
            </div>


        </div>
    );
};


export default Footer;