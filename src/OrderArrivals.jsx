import React, { useState } from "react";
import "../src/OrderArrivals.css";
import SideBar from "./SideBar";

const OrderArrivals = () => {
  const [orders, setOrders] = useState([
    { orderId: "3001", supplier: "ABC Co.", item: "Sugar", ordered: 10, arrived: 5 },
    { orderId: "3002", supplier: "XYZ Ltd", item: "Rice", ordered: 20, arrived: 20 },
  ]);

  const handleArrivalChange = (index, value) => {
    const updatedOrders = [...orders];
    updatedOrders[index].arrived = value;
    setOrders(updatedOrders);
  };

  const updateStatus = (ordered, arrived) => {
    if (arrived === 0) return "Pending";
    if (arrived < ordered) return "Partial";
    return "Complete";
  };

  return (
    <div className="arrivals-container">
      <SideBar/>
      <h2>ORDER ARRIVALS</h2>
      <table>
        <thead>
          <tr>
            <th>Order#</th>
            <th>Supplier</th>
            <th>Item</th>
            <th>Ordered</th>
            <th>Arrived</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.supplier}</td>
              <td>{order.item}</td>
              <td>{order.ordered} kg</td>
              <td>
                <input
                  type="number"
                  value={order.arrived}
                  onChange={(e) => handleArrivalChange(index, Number(e.target.value))}
                  min="0"
                  max={order.ordered}
                /> kg
              </td>
              <td>{updateStatus(order.ordered, order.arrived)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="update-btn">Update Arrival</button>
    </div>
  );
};

export default OrderArrivals;
