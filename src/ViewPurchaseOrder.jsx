import React from "react";
import "../src/ItemsManagment.css";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";

const ViewPurchaseOrder = () => {
  const navigate = useNavigate();
  const suppliers = [
    { Order_No: 101, Supplier: "ABC Co.", Date: "2025-03-01", Status: "Pending" },
    { Order_No: 102, Supplier: "XYZ Ltd", Date: "2025-03-05", Status: "Completed" },
  ];

  function addPurchaseOrder() {
    navigate("/AddPurchaseOrder");
  }

  function viewPurchaseOrder(orderNo) {
    navigate(`/SinglePurchaseOrder/${orderNo}`);
  }

  return (
    <div className="supplier-container">
      <SideBar />
      <h2>PURCHASE ORDERS LIST</h2>
      <table className="supplier-table">
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Supplier</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.Order_No}>
              <td>
                <button className="order-btn" onClick={() => viewPurchaseOrder(supplier.Order_No)}>
                  {supplier.Order_No}
                </button>
              </td>
              <td>{supplier.Supplier}</td>
              <td>{supplier.Date}</td>
              <td>{supplier.Status}</td>
              <td>
                <button className="edit-btn" onClick={() => viewPurchaseOrder(supplier.Order_No)}>
                  View
                </button>
                <button className="delete-btn">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-btn" onClick={addPurchaseOrder}>+ Add New Purchase Order</button>
    </div>
  );
};

export default ViewPurchaseOrder;
