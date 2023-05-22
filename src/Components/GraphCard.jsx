import React from "react";
import "../Styles/GraphCard.css";

const GraphCard = ({src}) => {
  return (
    <>
      <div>
        <div className="card cardg">
          <div className="card-body">
           <div className="d-flex">
            <div>
                 <h5 style={{fontWeight:'400',fontSize:'0.75rem',lineHeight:'0.9375rem',marginBottom:'1rem'}}>Main wallet</h5>
            <h3 className="card-title" style={{fontWeight:'400',fontSize:'1.25rem',lineHeight:'1.6625rem'}}>₹ 30,000</h3>
            </div>
            <div>
                <img src={src} alt="not" class="card-image" />
            </div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphCard;
