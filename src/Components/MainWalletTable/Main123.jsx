import React from "react";
import "../MainWalletTable/MainWalletTable.css";
import vector81 from "../../assests/Vector 81.svg";
import vector82 from "../../assests/Vector 82.svg";
// import DateIcon from '../../assests/DateIcon.svg'
import { Si1Password } from "react-icons/si";
import DateFormet from "../DateFormet/DateFormet";

const Main123 = ({heading}) => {
  const data = [
//    {first:'SrNo',second:'Member ID',third:'Member Moile No',forth:'Total Credit',fifth:'Total Debit',six:"Balance",seven:'Details',eight:''},
   {srno:'1',member_id:'JDHJJLDNH',member_MoileNo:'0989900449',TotalCredit:'389888',TotalDebit:'93499',Balance:"16634"},
   {srno:'1',member_id:'JDHJJLDNH',member_MoileNo:'0989900449',TotalCredit:'389888',TotalDebit:'93499',Balance:"16634"},
   {srno:'1',member_id:'JDHJJLDNH',member_MoileNo:'0989900449',TotalCredit:'389888',TotalDebit:'93499',Balance:"16634"},
   {srno:'1',member_id:'JDHJJLDNH',member_MoileNo:'0989900449',TotalCredit:'389888',TotalDebit:'93499',Balance:"16634"},
   {srno:'1',member_id:'JDHJJLDNH',member_MoileNo:'0989900449',TotalCredit:'389888',TotalDebit:'93499',Balance:"16634"},
   {srno:'1',member_id:'JDHJJLDNH',member_MoileNo:'0989900449',TotalCredit:'389888',TotalDebit:'93499',Balance:"16634"},
   {srno:'1',member_id:'JDHJJLDNH',member_MoileNo:'0989900449',TotalCredit:'389888',TotalDebit:'93499',Balance:"16634"},
   {srno:'1',member_id:'JDHJJLDNH',member_MoileNo:'0989900449',TotalCredit:'389888',TotalDebit:'93499',Balance:"16634"},
   {srno:'1',member_id:'JDHJJLDNH',member_MoileNo:'0989900449',TotalCredit:'389888',TotalDebit:'93499',Balance:"16634"},
   {srno:'1',member_id:'JDHJJLDNH',member_MoileNo:'0989900449',TotalCredit:'389888',TotalDebit:'93499',Balance:"16634"},
   {srno:'1',member_id:'JDHJJLDNH',member_MoileNo:'0989900449',TotalCredit:'389888',TotalDebit:'93499',Balance:"16634"},
   {srno:'1',member_id:'JDHJJLDNH',member_MoileNo:'0989900449',TotalCredit:'389888',TotalDebit:'93499',Balance:"16634"},
   {srno:'1',member_id:'JDHJJLDNH',member_MoileNo:'0989900449',TotalCredit:'389888',TotalDebit:'93499',Balance:"16634"},
   {srno:'1',member_id:'JDHJJLDNH',member_MoileNo:'0989900449',TotalCredit:'389888',TotalDebit:'93499',Balance:"16634"},
   {srno:'1',member_id:'JDHJJLDNH',member_MoileNo:'0989900449',TotalCredit:'389888',TotalDebit:'93499',Balance:"16634"},
   
  ];
 
  
  ;

  return (
    <div class="main_wallet_table">
      <div className="d-flex justify-content-center align-item-center">
        <h2 id="main_wallet">Main Wallet{heading}</h2>
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
        {/* {data.map((item) => (
          <tr className="tr1">
            <th>{item.first}</th>
            <th>{item.second}</th>
            <th>{item.third}</th>
            <th>{item.forth}</th>
            <th>{item.fifth}</th>
            <th>{item.six}</th>
            <th>{item.seven}</th>
          </tr>
        ))} */}
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
       
        {data.map((item)=>(
           <tr className="tr2">
           <td className="srNo">{item.srno}</td>
           <td className="member_id">{item.member_id}</td>
           <td>{item.member_MoileNo}</td>
           <td>{item.TotalCredit}</td>
           <td>{item.TotalDebit}</td>
           <td>{item.Balance}</td>
           <td>
             <button className="view_button">View Details</button>
           </td>
         </tr> 
        ))}
          
         
          
          
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

export default Main123;
