import React from "react";

function InventoryDetails({ cylinders }) {
  return (
    <div>
      <h3>Warehouse Summary</h3>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Cylinder</th>
            <th>Full</th>
            <th>Empty</th>
          </tr>
        </thead>
        <tbody>
          {cylinders.map((cylinder) => (
            <tr key={cylinder.id}>
              <td>
                {cylinder.icon} {cylinder.name}
              </td>
              <td>{cylinder.full}</td>
              <td>{cylinder.empty}</td>

            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryDetails;
