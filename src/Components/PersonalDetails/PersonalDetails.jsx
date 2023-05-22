import React from "react";
import '../PersonalDetails/PersonalDetails.css'

const PersonalDetails = () => {
  return (
    <div>
      <div class="card d-sm-flex flex-row person-detail-card">
        <div class="card-body">
          <h5 class="card-title m-2" style={{color:'#C99F19'}}>Personal Details</h5>
          <ul class="custom-list">
          <li class="card-text m-1" ><span style={{color:'#18A3AE'}}>Owner ID</span> <span style={{color:'black'}}>: Admin</span> </li>
          <li class="card-text m-1" > <span style={{color:'#18A3AE'}}>Pan Number</span> <span style={{color:'black'}}> : DQTPR1162L</span></li>
          <li class="card-text m-1" ><span style={{color:'#18A3AE'}}>Joining Date</span> <span style={{color:'black'}}>: 23-01-2023</span></li>
          </ul>
          <h6 style={{color:'#C99F19'}}>Download QR Code</h6>
          <p class="card-text" >
            Lorem ipsum dolor sit, amet consectetur adipisicing eli
          </p>
        </div>
        <div>
            <img style={{height:'9.875rem',width:'9.875rem',marginTop:'1rem',marginRight:'1rem'}} src="https://pngimg.com/uploads/qr_code/qr_code_PNG25.png" alt="" />
            <p style={{marginLeft:'3rem'}}>QR code</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
