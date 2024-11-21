import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { ToggleButton } from "primereact/togglebutton";
import { Dialog } from "primereact/dialog";
import { usersData } from "../FakeData/CustomerService";
import Statistic_card from "../components/Statistic_card";
import { FilterMatchMode } from "primereact/api";

const Users = () => {
  const [users, setUsers] = useState([]); // Replace with your user data
  const [showDialog, setShowDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const toast = React.createRef();
  const addUser = () => {
    // Logic to add a user
    toast.current.show({
      severity: "success",
      summary: "User  Added",
      detail: "User  has been added successfully!",
    });
  };

  const editUser = (user) => {
    setSelectedUser(user);
    setShowDialog(true);
  };

  const deleteUser = (userId) => {
    // Logic to delete a user
    setUsers(users.filter((user) => user.id !== userId));
    toast.current.show({
      severity: "success",
      summary: "User  Deleted",
      detail: "User  has been deleted successfully!",
    });
  };

  const viewUser = (user) => {
    // Logic to view user details
    toast.current.show({
      severity: "info",
      summary: "User  Details",
      detail: `Viewing details for ${user.name}`,
    });
  };

  const toggleUserStatus = (user) => {
    // Logic to toggle user status
    const updatedUsers = users.map((u) => {
      if (u.id === user.id) {
        return { ...u, active: !u.active };
      }
      return u;
    });
    setUsers(updatedUsers);
    toast.current.show({
      severity: "info",
      summary: "Status Updated",
      detail: `${user.name}'s status has been updated.`,
    });
  };
  useEffect(() => {
    setUsers(usersData);
  }, []);

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex align-items-center justify-content-center gap-2 flex-nowrap">
        <Button
          icon="pi pi-pencil"
          className="p-button-warning"
          onClick={() => editUser(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-danger"
          onClick={() => deleteUser(rowData.id)}
        />
        <Button
          icon="pi pi-eye"
          className="p-button-info"
          onClick={() => viewUser(rowData)}
        />
      </div>
    );
  };

  return (
    <div className="user-management">
      <Toast ref={toast} />
      <div
        className="header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1rem",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <div className="w-4">
          <Statistic_card
            card_number={1}
            card_heading="Total Users"
            card_icon="pi pi-user"
            card_count={users.length}
          />
        </div>

        <Button label="Add New User" icon="pi pi-plus" onClick={addUser} />
      </div>
      <DataTable
        value={users}
        paginator
        rows={10}
        dataKey="id"
        emptyMessage="No users found."
        // filters={filters}
        filterDisplay="row"
        globalFilterFields={["name", "email", "phoneNumber", "status"]}
      >
        <Column field="sno" header="Sno." style={{ width: "4rem" }} />
        <Column
          field="name"
          header="Name"
          filter
          filterPlaceholder="Search by name"
          style={{ width: "20rem" }}
        />
        <Column
          field="email"
          header="Email"
          filter
          filterPlaceholder="Search by email"
          style={{ width: "20rem" }}
        />
        <Column field="password" header="Password" style={{ width: "10rem" }} />
        <Column
          field="phoneNumber"
          header="Phone Number"
          filter
          filterPlaceholder="Search by number"
          style={{ width: "10rem" }}
        />
        <Column
          field="noOfReservations"
          header="No. of Reservations"
          style={{ width: "10rem" }}
        />
        <Column
          field="noOfSpaces"
          header="No. of Spaces"
          style={{ width: "10rem" }}
        />
        <Column
          body={actionBodyTemplate}
          header="Actions"
          style={{ minWidth: "5rem" }}
        />
        <Column
          
          body={(rowData) => (
            <>
              <ToggleButton
                onIcon="pi pi-pause-circle"
                offIcon="pi pi-play-circle"
                checked={rowData.active}
                onChange={() => toggleUserStatus(rowData)}
                className="w-3rem"
              />
            </>
          )}
          header="Status"
          style={{ width: "10rem" }}
        />
      </DataTable>

      <Dialog
        header="Edit User"
        visible={showDialog}
        onHide={() => setShowDialog(false)}
      >
        <div className="flex flex-column">
          <InputText
            placeholder="Name"
            value={selectedUser ? selectedUser.name : ""}
            onChange={(e) =>
              setSelectedUser({ ...selectedUser, name: e.target.value })
            }
          />
          <br />
          <InputText
            placeholder="Email"
            value={selectedUser ? selectedUser.email : ""}
            onChange={(e) =>
              setSelectedUser({ ...selectedUser, email: e.target.value })
            }
          />
          <br />
          <InputText
            placeholder="Password"
            type="password"
            value={selectedUser ? selectedUser.password : ""}
            onChange={(e) =>
              setSelectedUser({ ...selectedUser, password: e.target.value })
            }
          />
          <br />
          <InputText
            placeholder="Phone Number"
            value={selectedUser ? selectedUser.phoneNumber : ""}
            onChange={(e) =>
              setSelectedUser({ ...selectedUser, phoneNumber: e.target.value })
            }
          />
          <br />
          <Button
            label="Save"
            onClick={() => {
              // Logic to save the edited user
              const updatedUsers = users.map((u) =>
                u.id === selectedUser.id ? selectedUser : u
              );
              setUsers(updatedUsers);
              setShowDialog(false);
              toast.current.show({
                severity: "success",
                summary: "User  Updated",
                detail: "User  details have been updated successfully!",
              });
            }}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default Users;
