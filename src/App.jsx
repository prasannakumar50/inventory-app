import React, { useState } from "react";
import InventoryDetails from "./components/InventoryDetails";
import UpdateInventory from "./components/UpdateInventory";

function App() {
  const [cylinders, setCylinders] = useState([
    { id: 1, name: "Oxygen (O2)", full: 32, empty: 82, icon: "🟣" },
    { id: 2, name: "Carbon di oxide (CO2)", full: 71, empty: 16, icon: "🔴" },
    { id: 3, name: "Nitrogen", full: 1, empty: 40, icon: "🔵" },
    { id: 4, name: "Argon", full: 10, empty: 43, icon: "🟤" },
    { id: 5, name: "Helium", full: 53, empty: 6, icon: "🟡" },
    { id: 6, name: "Florin", full: 15, empty: 70, icon: "🟠" },
    { id: 7, name: "Clorin", full: 70, empty: 71, icon: "🧪" },
    { id: 8, name: "Ammonia", full: 83, empty: 84, icon: "🔷" },
    { id: 9, name: "Nitrous oxide", full: 29, empty: 90, icon: "🟧" },
  ]);

  const [isUpdateInventoryVisible, setUpdateInventoryVisible] = useState(false);

  const handleUpdate = (data) => {
    console.log("Updated Info:", data);
    alert(`Updated: ${JSON.stringify(data)}`);
    setUpdateInventoryVisible(false);
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial" }}>
      <h2>📦 Inventory</h2>
      <InventoryDetails cylinders={cylinders} />
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
