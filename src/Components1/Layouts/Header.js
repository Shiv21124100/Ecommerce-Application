import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/auth';

function Header() {
    const [auth, setAuth] = useAuth();

    const handleLogout = () => {
        // Perform logout action: clear user and token from context
        setAuth({
            user: null,
            token: ''
        });

        // Show logout success toast message
        toast.success("Logout successful", {
            duration: 3000
        });
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" to="/">
                        🛒 Ecommerce App
                    </Link>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category" className="nav-link" activeClassName="active">Category</NavLink>
                        </li>
                        {!auth.user ? (
                            <>
                                <li className="nav-item">
                                    <NavLink to="/register" className="nav-link" activeClassName="active">Register</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
