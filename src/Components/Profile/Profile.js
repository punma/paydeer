import React from "react";
import "../Profile/Profile.css";

const Profile = () => {
  return (
    <div className="d-flex ">


      <div class="card cardp">
        <img
          className="rounded-circle"
          src="https://pbs.twimg.com/profile_images/1220771013769617408/BjcL_JAY_400x400.jpg"
          alt="proile photo"
        />

        <div class="card-body">
          <div className="d-flex justify-content-center align-item-center">
          <h5 class="card-title card-titlep">My Profile</h5>
          </div>
          <p className="pragraph-profile"><span style={{color:'#266568'}}> Name</span > : Jai Shree Ram</p>
          <p className="pragraph-profile"><span style={{color:'#266568'}}> Id</span> : DQTPR116287THL</p>
          <p className="pragraph-profile"><span style={{color:'#266568'}}> Email</span>: jaishreeram@gmail.com</p>
          <p className="pragraph-profile"><span style={{color:'#266568'}}> Mobile No</span> : 9799800576</p>
          <p className="pragraph-profile"><span style={{color:'#266568'}}> Aadhar</span> : 2345 6574 8765</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
