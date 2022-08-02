import React from "react";
import PropTypes from "prop-types";

export default function Table({ data, descriptor }) {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          {descriptor.map((col) => <th key={col.label}>{col.label}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={`${item.name}_${item.age}_${item.email}`}>
              <td>{index + 1}</td>
              {descriptor.map((col) => <td key={col.accessor}>{col.render ? col.render(item) : item[col.accessor]}</td>)}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  descriptor: PropTypes.array.isRequired,
};
