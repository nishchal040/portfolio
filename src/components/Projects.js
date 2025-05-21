import './Projects.css';

function Projects(){
    return(
        <section className="container1" id="projects">
            <h1>Projects</h1>
            <p>These are the projects i have recently worked.</p>
            <div className='projects-container'>
                <div className='project1'>
                    <img src='./images/e-commerce.png'></img>
                    <h2>E-commerce Website(Front-End)</h2>
                    <p>This e-commerce Website has a Homepage,Productspage,Contactpage. It has only front end, its not fully functional</p>
                </div>
                <div className='project2'>
                    <img src='./images/ecobags.png'></img>
                    <h2>Paper Bag Price Calculator</h2>
                    <p>This Website takes dimensitions of the paper bag and other aspects and gives price of per paperbag.This was made for the company EcoBagsFactory.</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;