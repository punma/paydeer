import React from "react";
import "../MainWalletTable/MainWalletTable.css";
import vector81 from "../../assests/Vector 81.svg";
import vector82 from "../../assests/Vector 82.svg";
// import DateIcon from '../../assests/DateIcon.svg'
import { Si1Password } from "react-icons/si";
import DateFormet from "../DateFormet/DateFormet";

const MainWalletTable = () => {
  return (
    <div class="main_wallet_table">
      <div className="d-flex justify-content-center align-item-center">
        <h2 id="main_wallet">Main Wallet</h2>
      </div>

      <div>
        <hr id="hr1" />
        <hr id="hr2" />
      </div>
      <div className="d-flex direction-row">
        <p id="show">Show</p>
        <div className="d-flex direction-row vector">
          <p>30</p>
          <div className="vector_arrow d-flex flex-column ">
            <img src={vector81} alt="vector81" />
            <img src={vector82} alt="vector81" />
          </div>
        </div>
        <p id="entries">Entries</p>
        <div className="d-flex direction-row">
        <div className="DateFormet1">
          {/* <DateFormet1/> */}
          <DateFormet className="DateFormet1" />
        </div>
        <p id="to">To</p>
        <div className="DateFormet2">
          {/* <DateFormet1/> */}
          <DateFormet />
        </div>
        </div>
      </div>
      <hr id="hr3" />
      <div className="d-flex direction-row">
        <nav className="d-flex direction-row nav_main_wallet ms-2">
          <li>Copy</li>
          <li>CSV</li>
          <li>EXCEL</li>
          <li>PDF</li>
          <li>PRINT</li>
          <li>COLMIN VISIBILITY</li>
        </nav>
        <input
          type="text"
          className="ms-5  input_main_wallet"
          placeholder="Search"
        />
      </div>
      <hr />
      <table class="table main_wallet_table1">
        <thead>
          <tr className="tr1">
            <th className="srNo">Sr No</th>
            <th>Member ID</th>
            <th>Member Moile No</th>
            <th>Total Credit</th>
            <th>Total Debit</th>
            <th>Balance</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="tr2">
            <td className="srNo"> 1.</td>
            <td className="member_id">TRTU76658</td>
            <td>9849946399</td>
            <td></td>
            <td>908467736</td>
            <td>Retailer</td>
            <td>
              <button className="view_button">View Details</button>
            </td>
          </tr>
          <tr className="tr3">
            <td className="srNo">2.</td>
            <td className="member_id">TRTU76658</td>
            <td>9849946399</td>
            <td></td>
            <td>908467736</td>
            <td>distributor</td>
            <td>
              <button className="view_button">View Details</button>
            </td>
          </tr>
          
          
        </tbody>
      </table>
        <div className="d-flex direction-row buttons">
            <button  id="button_back">Back</button>
            <button id="button_next">Next</button>
            </div>
            <p id="last_p">Showing 1 to 1 of entries</p>
    </div>
  );
};

export default MainWalletTable;
