import React, { useState } from "react";
import "../src/AddItems.css"

const AddItems = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Supplier Added:", formData);
    alert("Supplier Added Successfully!");
    setFormData({ id: "", name: "", address: "", phone: "" });
  };

  return (
    <div className="add-supplier-container">
      <h2>Add New Items</h2>
      <form onSubmit={handleSubmit} className="supplier-form">
        <label>Supplier ID:</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        />

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">Add Items</button>
      </form>
    </div>
  );
};

export default AddItems;