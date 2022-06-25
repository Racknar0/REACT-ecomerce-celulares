import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidet/CartWidget';
import './navbar.css';

const NavBar = ({ menu, cantidadCarrrito }) => {
    const { link1, link2, link3 } = menu;

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark navbarMain ">
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
                        <Link className="navbar-brand d-flex justify-content-center align-items-center" to="/">
                            <p className="m-0 movi">
                                Movi<span className="rack">Rack</span>
                            </p>
                        </Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item d-flex justify-content-center align-items-center">
                                <NavLink className={ ({isActive}) =>  isActive ? 'claseActive' : 'claseNoActive'} to="/">
                                    {link1}
                                </NavLink>
                            </li>
                            <li className="nav-item d-flex justify-content-center align-items-center">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categorias
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><Link className='dropdown-item' to="/categoria/samsung">Samsung</Link></li>
                                        <li><Link className='dropdown-item' to="/categoria/xiaomi">Xiaomi</Link></li>
                                        <li><Link className='dropdown-item' to="/categoria/apple">Apple</Link></li>
                                        <li><Link className='dropdown-item' to="/categoria/motorola">Motorola</Link></li>
                                        <li><Link className='dropdown-item' to="/categoria/oppo">Oppo</Link></li>
                                        <li><Link className='dropdown-item' to="/categoria/vivo">Vivo</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item d-flex justify-content-center align-items-center">
                                <NavLink className={ ({isActive}) =>  isActive ? 'claseActive' : 'claseNoActive'} to="/gestion">
                                    {link2}
                                </NavLink>
                            </li>
                            <li className="nav-item d-flex justify-content-center align-items-center">
                                <NavLink className={ ({isActive}) =>  isActive ? 'claseActive' : 'claseNoActive'} to="/contacto" >
                                    {link3}
                                </NavLink>
                            </li>
                            <li className="nav-item d-flex justify-content-center align-items-center">
                                <Link to="/cart" >
                                    <CartWidget cantidadCarrrito={cantidadCarrrito} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
