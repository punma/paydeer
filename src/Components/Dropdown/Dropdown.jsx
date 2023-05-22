import React from "react";
import "./Dropdown.css";
import { AiOutlineUserAdd } from "react-icons/ai";

const Dropdown = () => {
  return (
    <div className="sidebar_n d-sm-flex">
      <ul className="nav flex-column">
        <li className="nav-item dropdown d-sm-flex flex-row">
          <button
            className="sidebar_button btn dropdown-toggle d-sm-flex"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              width: "18.2rem",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="icon_sidebar rounded-circle"
              style={{ marginRight: "0.4rem" }}
            >
              <AiOutlineUserAdd />
            </div>
            Claim Refund
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
