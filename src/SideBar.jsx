import React, { useState } from "react";
import "../src/SideBar.css"
import logo from "../src/images/logo.jpeg"

import { useNavigate } from "react-router-dom";


const SideBar = () => {
  const [ismenuOpen, setIsMenuOpen] = useState(false);

  const open = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("Session_Id");
    localStorage.removeItem("user_name");
    // toast.error("Logout successful!", setTimeout(() => navigate("/"), 1000));
  }

  function viewSuppliers() {
    navigate("/Suppliers");
  }

  function viewItemsManagment() {
    navigate("/ItemsManagment");
  }

  function viewPurchaseOrder() {
    navigate("/ViewPurchaseOrder");
  }

  function viewHome() {
    navigate("/Home");
  }

  function viewReceiveOrder() {
    navigate("/OrderArrivals");
  }

  function logout() {
    navigate("/");
  }


  return (
    <>
      <span className="menu-icon" onClick={open}>
        <i className="bi bi-filter-left"></i>
      </span>

      <div className={`sidebar ${ismenuOpen ? "open" : ""}`}>
        <div className="logo-container">
          <img src={logo} alt="Logo" onClick={viewHome} className="logo"/>
          <i className="bi bi-x close-icon" onClick={open}></i>
        </div>
        <hr className="divider" />

        <div className="menu-item" onClick={viewSuppliers}>
        <i className="bi bi-people-fill"></i>
          <span>Total Suppliers</span>
        </div>

        <div className="menu-item" onClick={viewItemsManagment} >
        <i className="bi bi-building-fill"></i>
          
          <span>Items</span>
        </div>

        <div className="menu-item" onClick={viewPurchaseOrder}>
        <i className="bi bi-house-door-fill"></i>
          <span>Purchase Orders</span>
        </div>

        <div className="menu-item" onClick={viewReceiveOrder}>
        <i className="bi bi-house-door-fill"></i>
          <span>Receiving Orders</span>
        </div>

        <div className="bottom-icons">
          <i className="bi bi-gear" title="Setting"></i>
          <i className="bi-brightness-high" title="Change Mode coming soon.."></i>
          <i className="bi bi-box-arrow-right" onClick={logout} title="Logout"></i>
        </div>

        
      </div>
    </>
  );
};

export default SideBar;