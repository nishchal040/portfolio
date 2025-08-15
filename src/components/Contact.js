import React,{useRef} from 'react';
import emailjs from "@emailjs/browser";
import './Contact.css';

function Contact(){
    const form=useRef();

    const sendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm("service_yund13n", "template_7i23m14", form.current, "2zjjkbg7GRC5MFvMM").then(
            ()=>{
                alert("Message sent successfully");
                form.current.reset();
            },
            (error)=>{
                alert("Failed to send message, please retry",error.text);
            }
        )
    }
    return(
        <div className='con'>
            <div className='contactme' id='contact'>
            <h1>Contact Me</h1>
                <form ref={form} onSubmit={sendEmail} className="contact-container">
                    <div className='socials'>
                        <a href='https://www.instagram.com/nishchal040/' target='_blank'><img src='./images/instagram.png'></img></a>
                        <a href='https://www.linkedin.com/in/nishchal040/' target='_blank'><img src='./images/linkedin.png'></img></a>
                        <a href='https://github.com/nishchal040' target='_blank'><img src='./images/github.png'></img></a>
                    </div>
                    <div className='form'>
                        <label>Name</label>
                        <input type='text' name='user_name'></input>
                        <label>Email</label>
                        <input type='text' name='email'></input>
                        <label>Subject</label>
                        <input type='text' name='subject'></input>
                        <label>Message</label>
                        <textarea rows={8} cols={10} name='message'></textarea>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;