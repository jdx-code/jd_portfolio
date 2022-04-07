import '../../css/Navbar.css';

const Navbar = () => {
    return(
        <div className="container-main">
            <nav className="navbar">
                <div className='logo'>
                    <h2>JD</h2>
                </div>
                
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="#AboutSection">About</a>
                    </li>
                    <li>
                        <a href="#ProjectSection">Projects</a>
                    </li>
                    <li>
                        <a href="#BlogsSection">Blogs</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;