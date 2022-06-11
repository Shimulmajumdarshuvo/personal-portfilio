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

                <div className='text-center'>
                    <img src={service?.img} alt="" />
                    <img src={service?.img2nd} alt="" />
                    <img src={service?.img3rd} alt="" />
                </div>
                <div>
                    <h2> {service?.name}</h2>
                    <p>{service?.description}</p>
                    <p>{service?.feature}</p>
                    <p>{service?.technology}</p>
                    <a className="btn  shadow-lg mt-1 me-1 buttons" href={service?.live} target="_blank">LIVE LINK </a>
                    <a className="btn  shadow-lg mt-1 me-1 buttons" href={service?.gitClient} target="_blank">Git Client </a>
                    <a className="btn  shadow-lg mt-1 me-1 buttons" href={service?.gitServer} target="_blank">Git Server </a>




                </div>


            </div>


        </div>
    );
};

export default DetailsProjects;