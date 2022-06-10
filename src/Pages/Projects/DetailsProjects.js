import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailsProjects.css';

const DetailsProjects = () => {

    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = '/service.json'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data);
            });
    }, [serviceId]);
    const service = services?.find(service => service.id === serviceId);

    return (
        <div >
            <div className='add-card'>

                <div >
                    <img src={service.img} alt="" />
                </div>
                <div>
                    <h2> {service?.name}</h2>
                    <p>{service?.description}</p>
                    <p>Feature :{service?.feature}</p>
                    <p> Technology :{service?.technology}</p>


                </div>


            </div>


        </div>
    );
};

export default DetailsProjects;