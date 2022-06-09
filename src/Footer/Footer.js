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