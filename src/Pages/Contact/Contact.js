import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_ghszne1', 'template_pi3bf69', e.target,
            'J1mGwTDgtGg2cny5I'
        ).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }
    return (



        <div id="contact" className='container border py-3' style={{
            marginTop: "50px",
            width: "100%",
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFH19T231E01SIxN2amaREEbjeDugqT6Xog&usqp=CAU')`,
            backgroundPosition: 'center',
            backgroundSize: "cover"

        }}>
            <div className='text-black  text-center'>
                <h1 >CONTACT ME</h1>


            </div>


            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <img className='w-100' src="https://pyjamahr.com/wp-content/uploads/2022/01/types-of-job-interview.jpg" alt="" />

                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">

                            <div >

                                <h3 className='text-center text-white'>Contact</h3>

                                <form onSubmit={sendEmail} className='row' style={{ margin: "25px " }}>

                                    <label>Name</label>
                                    <input type="text" name='name' className='form-control' />
                                    <label>Email</label>
                                    <input type="email" name="user_email" id="" className='form-control' />
                                    <label>Message</label>
                                    <textarea name='message' rows='4' className='form-control'></textarea>
                                    <input type="submit" value="Submit" className='form-control btn btn-primary mt-4' />

                                </form>

                            </div>


                        </div>
                    </div>
                </div>
            </div>




















        </div>
    );
};

export default Contact;