import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "./Spinner";

export default function Navbar({onButtonClick}) {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <Link
  to="/"
  className="navbar-brand d-flex align-items-center px-4 px-lg-5"
>
  <img
    src="/img/trademarklogo.png"
    alt="Trademark Logo"
    className="logo img-fluid" // Use the class for styling
  />
</Link>



        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink
              exact
              to="/"
              className="nav-item nav-link"
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="nav-item nav-link"
              activeClassName="active"
            >
              About
            </NavLink>
           
            <div className="nav-item dropdown">
  <NavLink
    to="/services"
    className="nav-link dropdown-toggle"
    data-bs-toggle="dropdown"
  >
    Service
  </NavLink>
  <div className="dropdown-menu fade-down m-0">
    <NavLink to="/Trademark-registration" className="dropdown-item" activeClassName="active">
      Trademark Registration
    </NavLink>
    <NavLink to="/Comprehensive-Trademark-Research" className="dropdown-item" activeClassName="active">
      Comprehensive Trademark Research
    </NavLink>
   
    <NavLink to="/Statementofuse" className="dropdown-item" activeClassName="active">
      Statement of Use
    </NavLink>
    <NavLink to="/Trademarkmonitoring" className="dropdown-item" activeClassName="active">
      Trademark Monitoring
    </NavLink>
    <NavLink to="/OfficeActionResponse" className="dropdown-item" activeClassName="active">
      Office Action Response
    </NavLink>
    <NavLink to="/FillingRenewal" className="dropdown-item" activeClassName="active">
      Filing a Renewal
    </NavLink>
  
    <NavLink to="/RevivalAbandonment" className="dropdown-item" activeClassName="active">
      Revival for Abandonment
    </NavLink>
    <NavLink to="/LogoDesignService" className="dropdown-item" activeClassName="active">
      Logo Design Service
    </NavLink>
  </div>
</div>
            <NavLink
              to="/FAQ1"
              className="nav-item nav-link"
              activeClassName="active"
            >
              FAQ
            </NavLink>


            
            <NavLink
              to="/contact"
              className="nav-item nav-link"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </div>

          {isLoading && <Spinner />}

          {isAuthenticated && (
            <NavLink
              to="/profile"
              className="nav-item nav-link"
              activeClassName="active"
            >
              {user.name}
            </NavLink>
          )}
          {isAuthenticated ? (
            <button
              className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log out
            </button>
          ) : (
            <button
              className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
              onClick={onButtonClick} 
            >
             Secure my Trademark<i className="fa fa-arrow-right ms-3"></i>
            </button>
          )}
        </div>
      </nav>
    </>
  );
}
