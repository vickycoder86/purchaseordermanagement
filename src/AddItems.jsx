import React, { useState } from "react";
import "../src/AddItems.css" // Ensure correct path

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
        <label htmlFor="id">Item ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        />

        <label htmlFor="name">Description :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Supplier :</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Price  :</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone">Stock  :</label>
        <input
          type="text"
          id="phone"
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
