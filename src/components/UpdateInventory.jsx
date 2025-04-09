import React, { useState } from "react";

function UpdateInventory({ onClose, onUpdate }) {
  const [serial, setSerial] = useState("");
  const [status, setStatus] = useState("full");
  const [location, setLocation] = useState("in");

  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "10%",
        right: "10%",
        padding: "20px",
        background: "#fff",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        zIndex: 999,
        borderRadius: "8px",
      }}
    >
      <h3>Update Cylinder</h3>

      <label>
        Cylinder Serial No :
        <input
          type="text"
          value={serial}
          onChange={(e) => setSerial(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </label>

      <div style={{ marginTop: "10px" }}>
        <strong>Current Status:</strong><br />
        <label>
          <input
            type="radio"
            value="full"
            checked={status === "full"}
            onChange={() => setStatus("full")}
          />
          Full Cylinder
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="radio"
            value="empty"
            checked={status === "empty"}
            onChange={() => setStatus("empty")}
          />
          Empty Cylinder
        </label>
      </div>

      <div style={{ marginTop: "10px" }}>
        <strong>Warehouse:</strong><br />
        <label>
          <input
            type="radio"
            value="in"
            checked={location === "in"}
            onChange={() => setLocation("in")}
          />
          In
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="radio"
            value="out"
            checked={location === "out"}
            onChange={() => setLocation("out")}
          />
          Out
        </label>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() =>
            onUpdate({
              serialNo: serial,
              status,
              warehouse: location,
            })
          }
          style={{
            padding: "10px 20px",
            background: "#556B2F",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
          }}
        >
          Update Status
        </button>
        <button onClick={onClose} style={{ padding: "10px 20px" }}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default UpdateInventory;
