import React from 'react';

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>

            <div className='text-center'><p >Copy Right<small><span>&copy;</span>
                Developer Shimul Majumdar. {new Date().getUTCFullYear()}</small></p>
            </div>


        </div>
    );
};


export default Footer;