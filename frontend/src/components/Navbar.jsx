import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";

export default function Navbar({ visible, onShow }) {
 

  const end = (
    <div className="flex align-items-center gap-2">
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
        className="mr-2"
      />
      <span className="mr-2">Profile Name</span>
    </div>
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