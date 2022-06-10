
import React, { useEffect, useState } from 'react';
import './Projects.css';
import Service from './Service';

const Projects = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data));

    }, []);
    return (
        <div className='container'>
            <div className='services-title'>
                <h1>My Projects</h1>
            </div>

            <div className='services-container'>

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}

                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Projects;