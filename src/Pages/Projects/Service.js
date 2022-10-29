import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { id, name, live, img, description } = service;
    const navigate = useNavigate();


    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div id="services" className='service'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
            <a className="btn  shadow-lg mt-1 me-1 buttons" href={live} target="_blank">Live Link </a>
            <button className='button mx-5' onClick={() => navigateToServiceDetail(id)}>
                See Details
            </button>






        </div>
    );
};

export default Service;