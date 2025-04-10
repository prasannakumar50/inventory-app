import React from "react";
import useFetch from "../useFetch";

function InventoryDetails() {
  const { data, error, loading } = useFetch(`https://backend-inventory-sandy.vercel.app/inventories`);

  if (loading) return <p>Loading inventory...</p>;
  if (error) return <p style={{ color: "red" }}>Error fetching data: {error.message}</p>;

  if (!Array.isArray(data)) return <p>No inventory data available.</p>;

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
          {data.map((cylinder) => (
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
