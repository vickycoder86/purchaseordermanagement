import React, { useState } from "react";
import "./SinglePurchaseOrder.css";
import { useNavigate, useParams } from "react-router-dom";

const SinglePurchaseOrder = () => {
  const navigate = useNavigate();
  const { orderNo } = useParams();
  const [status, setStatus] = useState("Pending");

  const handleChangeStatus = () => {
    setStatus(status === "Pending" ? "Completed" : "Pending");
  };

  return (
    <div className="order-container">
      <h2>ORDER DETAILS <span>(Order# {orderNo})</span></h2>
      
      <div className="order-info">
        <p><strong>Supplier:</strong> ABC Co.</p>
        <p><strong>Order Date:</strong> 2025-03-01</p>
        <p>
          <strong>Status:</strong> {status}  
          <button className="status-btn" onClick={handleChangeStatus}>
            Change Status
          </button>
        </p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>201</td>
            <td>Sugar</td>
            <td>10 kg</td>
            <td>$10</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>202</td>
            <td>Rice</td>
            <td>20 kg</td>
            <td>$15</td>
            <td>$300</td>
          </tr>
        </tbody>
      </table>

      <div className="buttons">
        <button className="update-btn">Update Order</button>
        <button className="cancel-btn">Cancel Order</button>
      </div>
    </div>
  );
};

export default SinglePurchaseOrder;
