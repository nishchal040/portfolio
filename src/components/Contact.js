import './Contact.css';

function Contact(){
    return(
        <div className='con'>
            <div className='contactme' id='contact'>
            <h1>Contact Me</h1>
                <div className="contact-container">
                    <div className='socials'>
                        <a href='https://www.instagram.com/nishchal040/' target='_blank'><img src='./images/instagram.png'></img></a>
                        <a href='https://www.linkedin.com/in/nishchal040/' target='_blank'><img src='./images/linkedin.png'></img></a>
                        <a href='https://github.com/nishchal040' target='_blank'><img src='./images/github.png'></img></a>
                    </div>
                    <div className='form'>
                        <label>Name</label>
                        <input type='text'></input>
                        <label>Email</label>
                        <input type='text'></input>
                        <label>Subject</label>
                        <input type='text'></input>
                        <label>Message</label>
                        <textarea rows={8} cols={10}></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;