import './navbar.css';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        
                        <a className="navbar-brand" href="./">
                        {/* <img src="./assets/brand.png" alt="" width={'35'}/> */}
                        <p className='m-0 movi'>Movi<span className='rack'>Rack</span></p>
                        </a>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link font" href="./">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font" href="./">Catálogo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font" href="./">Sistema de gestión</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font" href="./">Contáctanos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
