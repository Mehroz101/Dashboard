// src/components/CustomSidebar.js
import React from "react";
import { Sidebar } from "primereact/sidebar";
import { Avatar } from "primereact/avatar";
import { Link } from "react-router-dom";
import "primeicons/primeicons.css";
import "../../style/CustomSidebar.css"; // Optional CSS for custom styles
import ROUTES from "../../utils/routes";
const CustomSidebar = ({ visible, onHide }) => {
  const handleLinkClick = () => {
    onHide(); // Close the sidebar
  };

  return (
    <Sidebar visible={visible} onHide={onHide} position="left">
      <div className="sidebar-header flex justify-content-start gap-2 align-items-center flex-row">
        <Avatar
          image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
          shape="circle"
          size="large"
        />
        <h3 className="sidebar-profile-name " onClick={handleLinkClick}>
          Profile Name
        </h3>
      </div>
      <ul className="sidebar-links">
        <li>
          <Link
            to={ROUTES.DASHBOARD}
            className="sidebar-link"
            onClick={handleLinkClick}
          >
            <i className="pi pi-home"></i> Dashboard
          </Link>
        </li>
        <li>
          <Link
            to={ROUTES.USERS.USERS_DATA}
            className="sidebar-link"
            onClick={handleLinkClick}
          >
            <i className="pi pi-users"></i> Users
          </Link>
        </li>
        <li>
          <Link
            to={ROUTES.NOTIFICATION}
            className="sidebar-link"
            onClick={handleLinkClick}
          >
            <i className="pi pi-bell"></i> Reservations
          </Link>
        </li>
        <li>
          <Link
            to={ROUTES.LISTING.LISTING_DATA}
            className="sidebar-link"
            onClick={handleLinkClick}
          >
            <i className="pi pi-map"></i> Listings
          </Link>
        </li>
        <li>
          <Link
            to={ROUTES.EARNING}
            className="sidebar-link"
            onClick={handleLinkClick}
          >
            <i className="pi pi-dollar"></i> Earning
          </Link>
        </li>
      </ul>
    </Sidebar>
  );
};

export default CustomSidebar;
