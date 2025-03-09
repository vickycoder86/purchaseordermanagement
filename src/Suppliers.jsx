import React from "react";
import "../src/Suppliers.css"
import SideBar from "./SideBar";
import { Navigate, useNavigate } from "react-router-dom";

const Suppliers = () => {

  const navigate = useNavigate();
  const suppliers = [
    { id: 101, name: "ABC Co.", address: "NY, USA", phone: "1234567" },
    { id: 102, name: "XYZ Ltd", address: "LA, USA", phone: "9876543" },
  ];

  function addSuppliers() {
    navigate("/AddSuppliers");
  }

  return (
    <div className="supplier-container">
      <SideBar/>
      <h2>SUPPLIERS LIST</h2>
      <table className="supplier-table">
        <thead>
          <tr>
            <th>Supplier ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.id}</td>
              <td>{supplier.name}</td>
              <td>{supplier.address}</td>
              <td>{supplier.phone}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-btn" onClick={addSuppliers}>+ Add New Supplier</button>
    </div>
  );
};

export default Suppliers;
