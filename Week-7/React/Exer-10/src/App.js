import React from 'react';
import './App.css';

function App() {
  const heading = <h1>Office Space Rental Portal</h1>;

  const officeImage = "https://via.placeholder.com/300x150.png?text=Office+Space";

  const offices = [
    { name: "Workspace Hub", rent: 75000, address: "MG Road, Bangalore" },
    { name: "Startup Arena", rent: 55000, address: "Hitech City, Hyderabad" },
    { name: "The Executive Zone", rent: 90000, address: "Bandra Kurla Complex, Mumbai" },
    { name: "Cozy Corner", rent: 45000, address: "T-Nagar, Chennai" }
  ];

  return (
    <div className="App">
      {heading}
      <img src={officeImage} alt="Office" style={{ width: "300px", borderRadius: "8px" }} />

      <h2>Available Office Spaces</h2>
      {offices.map((office, index) => {
        const rentStyle = {
          color: office.rent < 60000 ? "red" : "green",
          fontWeight: 'bold'
        };

        return (
          <div key={index} style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            borderRadius: "6px",
            width: "300px"
          }}>
            <p><strong>Name:</strong> {office.name}</p>
            <p><strong>Address:</strong> {office.address}</p>
            <p><strong>Rent:</strong> <span style={rentStyle}>₹{office.rent}</span></p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
