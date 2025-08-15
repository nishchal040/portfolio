import './Projects.css';

function Projects(){
    return(
        <section className="container1" id="projects">
            <h1>Projects</h1>
            <p>These are the projects i have recently worked.</p>
            <div className='projects-container'>
                <a href='https://undoschool.netlify.app/'>
                    <div className='project1'>
                        <img src="./images/Undoschool.png"></img>
                        <h2>Edu-Tech Website(Front-End)</h2>
                        <p>This Edu-tech Website. It has only front end, its not fully functional</p>
                    </div>
                </a>
                
                    <div className='project2'>
                        <a href='https://eco-bag-factory.vercel.app/'>
                        <img src='./images/ecobags.png'></img>
                        <h2>Paper Bag Price Calculator</h2>
                        <p>This Website takes dimensitions of the paper bag and other aspects and gives price of per paperbag.This was made for the company EcoBagsFactory.</p>
                        </a>
                    </div>
                
            </div>
        </section>
    );
}

export default Projects;