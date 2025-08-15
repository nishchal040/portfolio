import './About.css';

function About(){
    return(
        <div className='aboutme' id='about'>
        <h1>About Me</h1>
        <div className='about-container' >
            <div className='edu-container'>
                <img src='./images/education.png'></img>
                <h2>Education</h2>
                <hr></hr>
                <div className='edu'>
                    <ul>
                        <li>
                            <h3>Keshav Memorial Institution of Technology</h3>
                            <p>2021-2025</p>
                        </li>
                        <li>
                            <h3>Sarath Jr College</h3>
                            <p>2018-2020</p>
                        </li>
                        <li>
                            <h3>St.Patrick's High School</h3>
                            <p>2017-2018</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='skills-container'>
                <img src='./images/skills.png'></img>
                <h2>Skills</h2>
                <hr></hr>
                <div className='skills'>
                    <ul>
                        <li>
                            <img src='./images/html.png'></img>
                            <h3>HTML</h3>
                        </li>
                        <li>
                            <img src='./images/css.png'></img>
                            <h3>CSS</h3>
                        </li>    
                        <li>
                            <img src='./images/javascript.png'></img>
                            <h3>JavaScript</h3>
                        </li>
                        <li>
                            <img src='./images/code.png'></img>
                            <h3>JAVA</h3>
                        </li>
                        <li>
                            <img src='./images/database.png'></img>
                            <h3>MySQL</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

export default About;