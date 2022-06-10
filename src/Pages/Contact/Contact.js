import React from 'react';
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
        <div className='container border' style={{
            marginTop: "50px",
            width: "50%",
            backgroundImage: `url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000')`,
            backgroundPosition: 'center',
            backgroundSize: "cover"

        }}>
            <h1 className='text-center' style={{ marginTop: '25px' }} >Contact Form</h1>
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
    );
};

export default Contact;