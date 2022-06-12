import { useEffect, useState } from 'react';
import CartWidget from '../CartWidet/CartWidget';
import './navbar.css';

const NavBar = ({ menu, cantidadCarrrito }) => {
    const { link1, link2, link3 } = menu;

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
                    <div
                        className="collapse navbar-collapse"
                        id="navbarTogglerDemo01"
                    >
                        <a
                            className="navbar-brand d-flex justify-content-center align-items-center"
                            href="./"
                        >
                            {/* <img src="./assets/brand.png" alt="" width={'35'}/> */}
                            <p className="m-0 movi">
                                Movi<span className="rack">Rack</span>
                            </p>
                        </a>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item d-flex justify-content-center align-items-center">
                                <a className="nav-link font" href="./">Inicio</a>
                            </li> */}
                            <li className="nav-item d-flex justify-content-center align-items-center">
                                <a className="nav-link font" href="./">
                                    {link1}
                                </a>
                            </li>
                            <li className="nav-item d-flex justify-content-center align-items-center">
                                <a className="nav-link font" href="./">
                                    {link2}
                                </a>
                            </li>
                            <li className="nav-item d-flex justify-content-center align-items-center">
                                <a className="nav-link font" href="./">
                                    {link3}
                                </a>
                            </li>
                            <li className="nav-item d-flex justify-content-center align-items-center">
                                <CartWidget cantidadCarrrito={cantidadCarrrito} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
