import React, { useCallback, useEffect, useState } from "react";
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
import { Password } from "primereact/password";
import { useForm } from "react-hook-form";
import TextInput from "../components/TextInput";
import { FormColumn, FormLabel, FormRow } from "../components/layoutComponent";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addUser, fetchUsers } from "../services/apiService";
import { useDashboard } from "../context/DataContext";

const Users = () => {
  const [users, setUsers] = useState([]); // User data
  const [showDialog, setShowDialog] = useState(false); // Edit dialog
  const [addNewUser, setAddNewUser] = useState(false); // Add dialog
  const [selectedUser, setSelectedUser] = useState(null); // Current user for editing
  const toast = React.createRef();
  const { userData } = useDashboard();
  const { control: addUserControl, handleSubmit: handleAddSubmit } = useForm({
    defaultValues: {
      fName: "",
      lName: "",
      Email: "",
      Password: "",
      Number: "",
    },
  }); // Add form
  const {
    control: editUserControl,
    handleSubmit: handleEditSubmit,
    setValue,
  } = useForm({
    defaultValues: {
      fName: "",
      lName: "",
      Email: "",
      Number: "",
    },
  }); // Edit form

  // const { data, isLoading, error, refetch } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: fetchUsers,

  //   onSuccess: (data) => {
  //     console.log("Fetched data successfully:", data);
  //     setUsers(data);
  //   },
  //   onError: (error) => {
  //     console.error("Error fetching users:", error.message);
  //   },
  //   onSettled: () => {
  //     console.log("Fetching users completed");
  //   },
  // });

  useEffect(() => {
    if (userData) {
      console.log(userData);
      setUsers(userData);
    }
  }, [userData]);

  // console.log(data);
  const addUserMutation = useMutation({
    mutationFn: addUser,
    onSuccess: (data) => {
      console.log("User added successfully:", data);
      refetch();
    },
    onError: (error) => {
      console.error("Error adding user:", error.message);
    },
  });
  const editUserMutation = useMutation({
    mutationFn: addUser,
    onSuccess: (data) => {
      console.log("User added successfully:", data);
      refetch();
    },
    onError: (error) => {
      console.error("Error adding user:", error.message);
    },
  });
  // Add user submission
  const handleAddUserSubmit = (data) => {
    console.log(data);
    addUserMutation.mutate(data);
    setAddNewUser(false);
  };

  // Edit user submission
  const handleEditUserSubmit = (data) => {
    mutate.editUserMutation(data);
    setShowDialog(false);
  };

  // Open edit dialog
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setValue("fName", user.fName);
    setValue("lName", user.lName);
    setValue("Email", user.email);
    setValue("Number", user.phone);
    setValue("Password", ""); // Optionally pre-fill password field
    setShowDialog(true);
  };

  return (
    <div className="user-management">
      <Toast ref={toast} />

      {/* Header Section */}
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <Statistic_card
          card_number={1}
          card_heading="Total Users"
          card_icon="pi pi-user"
          card_count={users.length}
        />
        <Button
          label="Add New User"
          icon="pi pi-plus"
          onClick={() => setAddNewUser(true)}
          className="p-button-success align-self-start"
        />
      </div>

      {/* Users Table */}
      <DataTable
        value={users}
        paginator
        rows={10}
        dataKey="id"
        globalFilterFields={["name", "email", "phoneNumber"]}
      >
        <Column field="id" header="ID" />
        <Column field="fName" header="First Name" />
        <Column field="lName" header="Last Name" />
        <Column field="email" header="Email" />
        <Column field="phone" header="Phone Number" />
        <Column
          body={(rowData) => (
            <div className="flex gap-2">
              <Button
                icon="pi pi-pencil"
                className="p-button-warning"
                onClick={() => handleEditUser(rowData)}
              />
              <Button
                icon="pi pi-trash"
                className="p-button-danger"
                onClick={() => deleteUser(rowData.id)}
              />
            </div>
          )}
          header="Actions"
        />
      </DataTable>

      {/* Add User Dialog */}
      <Dialog
        header="Add New User"
        visible={addNewUser}
        onHide={() => setAddNewUser(false)}
      >
        <form onSubmit={handleAddSubmit(handleAddUserSubmit)}>
          <FormRow>
            <FormColumn>
              <FormLabel>First Name</FormLabel>
              <TextInput control={addUserControl} ID="fName" required />
            </FormColumn>
            <FormColumn>
              <FormLabel>Last Name</FormLabel>
              <TextInput control={addUserControl} ID="lName" required />
            </FormColumn>
            <FormColumn>
              <FormLabel>Email</FormLabel>
              <TextInput
                control={addUserControl}
                ID="Email"
                type="email"
                required
              />
            </FormColumn>
            <FormColumn>
              <FormLabel>Password</FormLabel>
              <TextInput
                control={addUserControl}
                ID="Password"
                type="password"
                required
              />
            </FormColumn>
            <FormColumn>
              <FormLabel>Number</FormLabel>
              <TextInput
                control={addUserControl}
                ID="Number"
                type="number"
                required
              />
            </FormColumn>
          </FormRow>
          <Button type="submit" label="Save" />
        </form>
      </Dialog>

      {/* Edit User Dialog */}
      <Dialog
        header="Edit User"
        visible={showDialog}
        onHide={() => setShowDialog(false)}
      >
        <form onSubmit={handleEditSubmit(handleEditUserSubmit)}>
          <FormRow>
            <FormColumn>
              <FormLabel>First Name</FormLabel>
              <TextInput control={editUserControl} ID="fName" required />
            </FormColumn>
            <FormColumn>
              <FormLabel>Last Name</FormLabel>
              <TextInput control={editUserControl} ID="lName" required />
            </FormColumn>
            <FormColumn>
              <FormLabel>Email</FormLabel>
              <TextInput
                control={editUserControl}
                ID="Email"
                type="email"
                required
              />
            </FormColumn>
            <FormColumn>
              <FormLabel>Password</FormLabel>
              <TextInput
                control={editUserControl}
                ID="Password"
                type="password"
                required
              />
            </FormColumn>
            <FormColumn>
              <FormLabel>Number</FormLabel>
              <TextInput
                control={editUserControl}
                ID="Number"
                type="number"
                required
              />
            </FormColumn>
          </FormRow>
          <Button type="submit" label="Save" />
        </form>
      </Dialog>
    </div>
  );
};

export default Users;
