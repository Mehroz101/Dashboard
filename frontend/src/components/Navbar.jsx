import React from "react";
import { Menubar } from "primereact/menubar";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ onShow }) {
  const { checkuser } = useAuth();

  const end = checkuser() ? (
    <>
      <div className="flex align-items-center">
        <Avatar
          image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
          shape="circle"
          className="mr-2"
        />
        <span className="mr-2">Admin</span>
      </div>
    </>
  ) : (
    <Link to="/login" className="login_btn">
      <Button label="Login" className="p-button-text" />
    </Link>
  );

  return (
    <div className="card">
      <Menubar
        end={end}
        start={
          <Button
            icon="pi pi-bars"
            className="p-button-text"
            onClick={onShow} // Call the function to show the sidebar
            aria-label="Show Sidebar"
          />
        }
      />
    </div>
  );
}
