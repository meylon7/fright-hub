import React from "react";
import { A } from "hookrouter";
const Shipment = ({ id, name, type, destination, total, origin }) => {
  
  return (
    <div>
      <li className="table-row">
        <div className="col col-1" data-label="Job Id">
          {id}
        </div>
        <div className="col col-2" data-label="Customer Name">
          {name}
        </div>
        <div className="col col-3" data-label="Amount">
          {type}
        </div>
        <div className="col col-4" data-label="Payment Status">
          {destination}
        </div>
        <div className="col col-5" data-label="Payment Status">
          {origin}
        </div>
        <div className="col col-6" data-label="Payment Status">
          {total}
        </div>
        <div className="col col-7" data-label="Payment Status">
          <A href={`/shippmentprivew/${id}`}>Details</A>
        </div>
      </li>
    </div>
  );
};

export default Shipment;
