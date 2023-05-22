import React from "react";
import { Link } from "react-router-dom";
import { BsGridFill } from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex justify-content-between">
        <div className="container-fluid">
          <div>
            <BsGridFill id="navbar_icon" />
            <Link className=" navbar-brand" to="/">
              Retailer Dashboard
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <form className="d-flex" role="search"></form>
            </div>
          </div>
          <div>
            <div className="navcontent d-flex">
              <div className="account rounded-circle">
                <img
                  className="rounded-circle navbar_image"
                  src="https://source.unsplash.com/400x400/?gym"
                  alt=""
                />
              </div>
              <p>
                Oda Dink
                <span>
                  <br />
                  Super Admin
                </span>
              </p>
            </div>
          </div>
        </div>
      </nav>
      {/* <Link to={"/address1"}>Address1 </Link>
      <br />
      <Link to={"/address2"}>Address2</Link>
      <br />
      <Link to={"/bankaccountdetails"}>BankAccountDetails</Link>
      <br />
      <Link to={"/documentdetails"}>DocumentUploadDetails</Link>
      <br />
      <Link to={"/MPIN"}>MPIN</Link> */}
    </>
  );
};

export default Navbar;
