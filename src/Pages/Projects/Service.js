import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { id, name, img, description, feature, technology } = service;



    return (
        <div id="services" className='service'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
            <p> Feature : {feature}</p>
            <p> Technology : {technology}</p>


            <div>
                <Link to='/checkout'>
                    <button className='btn'>LIVE LINK</button>

                </Link>
            </div>




        </div>
    );
};

export default Service;