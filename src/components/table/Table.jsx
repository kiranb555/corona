import React from "react";
import Table from "react-bootstrap/Table";

import "./Table.scss";

const TABLE = ({ data }) => {
  let filtered = data.filter((e, i) => i >= data.length - 10);

  return (
    <div>
      <div className="tableHeading">Last Ten Days Updates</div>
      <Table responsive striped bordered hover>
        <thead>
          {data.length > 0 ? (
            <tr>
              {Object.keys(data[0]).map((e, i) => {
                return <th key={i}>{e}</th>;
              })}
            </tr>
          ) : null}
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            <>
              {filtered.map(function(e, i) {
                return (
                  <tr key={i}>
                    <td>{e.date}</td>
                    <td>{e.confirmed}</td>
                    <td>{e.deaths}</td>
                    <td>{e.recovered}</td>
                  </tr>
                );
              })}
            </>
          ) : null}
        </tbody>
      </Table>
    </div>
  );
};

export default TABLE;
