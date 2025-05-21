import './Nav.css';
function Nav(){
    return(
    <div className="nav">
        
        <ul>
            <img src='./images/nishchal.png'></img>
            <a href='#home'><li>Home</li></a>
            <a href='#projects'><li>Projects</li></a>
            <a href='#about'><li>About</li></a>
            <a href='#contact'><li>Contact</li></a>
        </ul>
    </div>
    );
}
export default Nav;