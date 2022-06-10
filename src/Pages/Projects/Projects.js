import React from 'react';

const Projects = () => {
    return (
        <div className='container'>
            <h1 className='text-info text-center'>My Projects</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                        <img src="https://i.ibb.co/VqxnpJK/Screenshot-58.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Tech BD</h5>
                            <p class="card-text">  This is a Fruits Warehouse company where owner can manage their Products. <br />

                                # Features: HomePage, All Item,Featured Category, Login-SignUp, CRUD Operation. <br />
                                # Technology: HTML, CSS, React-Bootstrap, JavaScript, React, React Router, NodeJs, ExpressJs, MongoDB, CRUD, Firebase.        </p>
                            <a className="btn  shadow-lg mt-1 me-1 buttons" href="https://tech-bd-abf2a.firebaseapp.com/" target="_blank">Live Site</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://i.ibb.co/ZhJd4bH/Screenshot-57.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Laptop Devices</h5>
                            <p class="card-text">This is a Computer Parts Manufacturer company who supplies wholesale products to their clients. <br />

                                # Features: HomePage, All Product, Login-SignUp, Admin-Panel, Dashboard, Stripe. <br />
                                # Technology: HTML, CSS, Tailwind, DaisyUI, JavaScript, React, React Router, React-Hook-Form, NodeJs, ExpressJs, MongoDB, CRUD, Firebase.</p>
                            <a className="btn  shadow-lg mt-1 me-1 buttons" href="https://laptop-services-39c63.firebaseapp.com/" target="_blank">Live Site</a>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://i.ibb.co/GTghzt3/Screenshot-56.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Weeding Photography</h5>
                            <p class="card-text">This is a Personal or Freelance Photographer's Website who can independently work. <br />

                                # Features: HomePage, Services, Login-SignUp <br />
                                #  Technology: HTML, CSS, React-Bootstrap, JavaScript, React, React Router, Firebase</p>
                            <a className="btn  shadow-lg mt-1 me-1 buttons" href="https://wedding-phographer-projects.firebaseapp.com/" target="_blank">Live Site</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://i.ibb.co/P4Xz91c/Screenshot-60.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Laptop Ecommerce Site</h5>
                            <p class="card-text">This is Laptop Ecommerce Site in font end web application <br />
                                # Features : Home Page , banner section ,Review part , Dashboard ,blogs part etc.. <br />
                                # Technology : Html , CSS , JavaScript , Netlify </p>
                            <a className="btn  shadow-lg mt-1 me-1 buttons" href="https://timely-tulumba-4088e2.netlify.app/" target="_blank">Live Site</a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Projects;