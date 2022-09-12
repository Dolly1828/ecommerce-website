import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'



const Navbar = (props) => {
    const items = useSelector(state => state.number);


    return (
        <div>
            <nav className="navbar navbar-expand-lg py-4">
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-3 logo" to="/">uniShop</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Link</Link>
                            </li> */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Catergories
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/men">Men</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/women">Women</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/jewelery">Jewelery</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/electronic">Electronics</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex align-items-center" role="search">
                            <button className="position-relative mx-4 my-2" style={{ width: "50px", height: "50px", background: "", outline: "none", border: "none", borderRadius: "50%" }}>
                                <i className="fas fa-cart-arrow-down fs-3"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {items}
                                    <span className="visually-hidden">Items in cart</span>
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
