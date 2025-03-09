import React from "react";
import "../src/ItemsManagment.css"
import SideBar from "./SideBar";
import { Navigate, useNavigate } from "react-router-dom";

const ItemsManagment = () => {

  const navigate = useNavigate();
  const suppliers = [
    { id: 101, Description: "Sugar", Supplier: "ABC Co.",price:"$10/kg",stock:"50kg" },
    { id: 102, Description: "Rice", Supplier: "XYZ Ltd",price:"$15/kg",stock:"100kg" },
  ];

  function addSuppliers() {
    navigate("/AddSuppliers");
  }

  function addItems() {
    navigate("/AddItems");
  }

 

  return (
    <div className="supplier-container">
      <SideBar/>
      <h2>ITEMS LIST</h2>
      <table className="supplier-table">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Description</th>
            <th>Supplier</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.id}</td>
              <td>{supplier.Description}</td>
              <td>{supplier.Supplier}</td>
              <td>{supplier.price}</td>
              <td>{supplier.stock}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-btn" onClick={addItems}>+ Add New Items</button>
    </div>
  );
};

export default ItemsManagment;
