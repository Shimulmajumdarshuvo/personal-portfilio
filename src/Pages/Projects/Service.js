import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { id, name, img, description, feature, technology } = service;
    const navigate = useNavigate();


    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }


    return (
        <div id="services" className='service'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
            <p> Feature : {feature}</p>
            <p> Technology : {technology}</p>



            <Link to='/checkout'>
                <button className='button '>LIVE LINK</button>

            </Link>



            <button className='button mx-5' onClick={() => navigateToServiceDetail(id)}>
                See Details
            </button>






        </div>
    );
};

export default Service;