import React, { useState, useEffect, useRef } from "react";
import { Pagination } from "@material-ui/lab";
import usePagination from "../hooks/usePagination";
import Shipment from "./Shipment";
import data from "../data/db.json";
const Shipments = () => {
  const iptSearch = useRef();
  const [page, setPage] = useState(1);

  const [shipments, setShipments] = useState(data.shipments);
  const PER_PAGE = 10;
  const count = Math.ceil(shipments.length / PER_PAGE);
  const _DATA = usePagination(shipments, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  const sortByColumn = (col) => {
    let sorted = [];
    switch (col) {
      case "Name":
        sorted = [...shipments].sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        break;
      case "Type":
        sorted = [...shipments].sort((a, b) => {
          if (a.type < b.type) return -1;
          if (a.type > b.type) return 1;
          return 0;
        });
        break;
      case "Destination":
        sorted = [...shipments].sort((a, b) => {
          if (a.destination < b.destination) return -1;
          if (a.destination > b.destination) return 1;
          return 0;
        });
        break;
      case "Origin":
        sorted = [...shipments].sort((a, b) => {
          if (a.origin < b.origin) return -1;
          if (a.origin > b.origin) return 1;
          return 0;
        });
        break;
      case "Total":
        sorted = [...shipments].sort((a, b) => {
          if (a.total < b.total) return -1;
          if (a.total > b.total) return 1;
          return 0;
        });
        break;
    }

    setShipments(sorted);
  };

  const Search = (key) => {
    const newShipments = shipments.filter((ship) => ship.id.includes(key));
    console.log("newShipments", newShipments);
    setShipments(newShipments);
  };
  const ClearSearch = () => {
    iptSearch.current.value = "";
    setShipments(data.shipments);
  };

  return (
    <div className="main-div">
      <div className="search">
        <input
          type="text"
          ref={iptSearch}
          placeholder="Type Id"
          onChange={(e) => Search(e.target.value)}
        ></input>{" "}
        <button onClick={() => ClearSearch()}>Clear</button>
      </div>
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />

      <div className="container">
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Id</div>
            <div className="col col-2" onClick={() => sortByColumn("Name")}>
              Name
            </div>
            <div className="col col-3" onClick={() => sortByColumn("Type")}>
              Type
            </div>
            <div
              className="col col-4"
              onClick={() => sortByColumn("Destination")}
            >
              Destination
            </div>
            <div className="col col-5" onClick={() => sortByColumn("Origin")}>
              Origin
            </div>
            <div className="col col-6" onClick={() => sortByColumn("Total")}>
              Total
            </div>
            <div className="col col-7"></div>
          </li>
          {_DATA.currentData().map((v) => {
            return (
              <Shipment
                key={v.id}
                id={v.id}
                type={v.type}
                destination={v.destination}
                origin={v.origin}
                total={v.total}
                name={v.name}
              />
            );
          })}
        </ul>
      </div>
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
};

export default Shipments;
