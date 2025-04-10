import React, { useState } from "react";
import InventoryDetails from "./components/InventoryDetails";
import UpdateInventory from "./components/UpdateInventory";

function App() {
  const [isUpdateInventoryVisible, setUpdateInventoryVisible] = useState(false);

  const handleUpdate = (data) => {
    console.log("Updated info:", data);
    alert(`Updated: ${JSON.stringify(data)}`);
    setUpdateInventoryVisible(false);
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial" }}>
      <h2>📦 Inventory</h2>
      <InventoryDetails  />
      <button
        onClick={() => setUpdateInventoryVisible(true)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#556B2F",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Update Inventory
      </button>

      {isUpdateInventoryVisible && (
        <UpdateInventory
          onClose={() => setUpdateInventoryVisible(false)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}

export default App;
