import React from "react";
import "./CustomTable.css";

function CustomTable({
  headerData = [],
  bodyData = [],
  tableClassName = "",
  tableStyle = {},
  thClassName = "",
  thtyle = {},
  tdClassName = "",
  tdStyle = {},
}) {
  return (
    <table className={`custom-table  ${tableClassName}`} style={tableStyle}>
      <tr className="custom-table-header">
        {headerData.map((content, index) => {
          return (
            <th key={index} className={`${thClassName}`} style={thtyle}>
              {content}
            </th>
          );
        })}
      </tr>

      {bodyData.map((item, index) => {
        if (!Array.isArray(item) || item.length < 1) {
          return null;
        }
        return (
          <tr key={index}>
            {item?.map((content, index) => (
              <td key={index} className={`${tdClassName}`} style={tdStyle}>
                {content}
              </td>
            ))}
          </tr>
        );
      })}
    </table>
  );
}

export default CustomTable;
