import React, { useState } from "react";
import "./AddPurchaseOrder.css";

const AddPurchaseOrder = () => {
  const [formData, setFormData] = useState({
    orderId: "",
    supplier: "",
    orderDate: "",
    items: [{ itemId: "", description: "", quantity: "", price: "", total: "" }],
  });

  const itemOptions = [
    { id: "201", name: "Sugar" },
    { id: "202", name: "Rice" },
    { id: "203", name: "Wheat" },
  ];

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;

    if (index !== null) {
      const updatedItems = [...formData.items];
      updatedItems[index][name] = value;
      if (name === "itemId") {
        const selectedItem = itemOptions.find((item) => item.id === value);
        updatedItems[index].description = selectedItem ? selectedItem.name : "";
      }
      setFormData({ ...formData, items: updatedItems });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { itemId: "", description: "", quantity: "", price: "", total: "" }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Purchase Order Added:", formData);
    alert("Purchase Order Added Successfully!");
    setFormData({
      orderId: "",
      supplier: "",
      orderDate: "",
      items: [{ itemId: "", description: "", quantity: "", price: "", total: "" }],
    });
  };

  return (
    <div className="add-order-container">
      <h2>Add New Purchase Order</h2>
      <form onSubmit={handleSubmit} className="order-form">
        <div className="form-row">
          <input type="text" name="orderId" placeholder="Order ID" value={formData.orderId} onChange={handleChange} required />
          <input type="text" name="supplier" placeholder="Supplier" value={formData.supplier} onChange={handleChange} required />
          <input type="date" name="orderDate" value={formData.orderDate} onChange={handleChange} required />
        </div>
        <h3>Order Items</h3>
        {formData.items.map((item, index) => (
          <div key={index} className="item-row">
            <select name="itemId" value={item.itemId} onChange={(e) => handleChange(e, index)} required>
              <option value="">Select Item</option>
              {itemOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>{opt.name}</option>
              ))}
            </select>
            <input type="text" name="description" value={item.description} readOnly placeholder="Description" />
            <input type="number" name="quantity" value={item.quantity} placeholder="Qty" onChange={(e) => handleChange(e, index)} required />
            <input type="number" name="price" value={item.price} placeholder="Price" onChange={(e) => handleChange(e, index)} required />
            <input type="number" name="total" value={item.quantity * item.price} readOnly placeholder="Total" />
          </div>
        ))}
        <button type="button" className="add-item-btn" onClick={addItem}>+ Add Item</button>
        <button type="submit" className="submit-btn">Submit Order</button>
      </form>
    </div>
  );
};

export default AddPurchaseOrder;