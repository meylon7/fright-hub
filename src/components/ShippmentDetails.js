import React from "react";
import { A } from "hookrouter";
import data from "../data/db.json";
const ShippmentDetails = ({ id }) => {
  const Ship = data.shipments
    .filter((item) => {
      if (item.id.toLowerCase().includes(id.toLowerCase())) {
        return item;
      }
    })
    .map((data) => {
      return (
        <div className="shippment-container" key={data.id}>
          <div className="shippment">
            <div className="shippment-preview">
              <h6>Shippment</h6>
              <h3>Destination: <i className="fas fa-chevron-right"></i>
                {data.destination}</h3>
             
            </div>
            <div className="shippment-info">
              <div className="progress-container">
                <div className="progress"></div>
                <span className="progress-text">Total:{data.total}</span>
              </div>
              <h6>
                Type:{data.type} <br />Origin: {data.origin}
              </h6>
              <h2>Product: {data.name}</h2>
              <A href="/">Back to shippments</A>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div>     
        {Ship}
    </div>
  );
};

export default ShippmentDetails;
