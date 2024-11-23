import React, { useState, useEffect } from "react";
import { classNames } from "primereact/utils";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { Tag } from "primereact/tag";
import { TriStateCheckbox } from "primereact/tristatecheckbox";
import { accounts } from "../FakeData/CustomerService";
import { Button } from "primereact/button";

export default function Paymenttable() {
  const [customers, setCustomers] = useState(null);
  const [filters, setFilters] = useState({
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    accountName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const [loading, setLoading] = useState(true);
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const [statuses] = useState(["cancelled", "paid", "pending"]);

  const getSeverity = (status) => {
    switch (status) {
      case "cancelled":
        return "danger";

      case "paid":
        return "success";

      case "pending":
        return "info";
    }
  };

  useEffect(() => {
    console.log(accounts);
    setCustomers(accounts);
    setLoading(false);
  }, []);

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </IconField>
      </div>
    );
  };
  const accept = (rowData) => {
    console.log(rowData);
  };
  const reject = (rowData) => {
    console.log(rowData);
  };
  const statusBodyTemplate = (rowData) => {
    return (
      <Tag value={rowData.status} severity={getSeverity(rowData.status)} />
    );
  };
  const actionBodyTemplate = (rowData) => {
    return (
      <>
        {rowData.status === "pending" && (
          <div className="flex align-items-center justify-content-center gap-2 flex-nowrap">
            <Button
              icon="pi pi-ban"
              className="p-button-danger"
              onClick={() => reject(rowData)}
            />

            <Button
              icon="pi pi-check-circle"
              className="p-button-success"
              onClick={() => accept(rowData)}
            />
          </div>
        )}
      </>
    );
  };

  const statusItemTemplate = (option) => {
    return <Tag value={option} severity={getSeverity(option)} />;
  };

  const statusRowFilterTemplate = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={statuses}
        onChange={(e) => options.filterApplyCallback(e.value)}
        itemTemplate={statusItemTemplate}
        placeholder="Select One"
        className="p-column-filter"
        showClear
        style={{ minWidth: "12rem" }}
      />
    );
  };

  const header = renderHeader();

  return (
    <div className="card">
      <DataTable
        value={customers}
        paginator
        rows={10}
        dataKey="id"
        filters={filters}
        filterDisplay="row"
        loading={loading}
        globalFilterFields={["name", "status", "accountName"]}
        header={header}
        emptyMessage="No customers found."
      >
        <Column header="Sno." field="id" style={{ minWidth: "2rem" }} />
        <Column header="Date" field="date" style={{ minWidth: "10rem" }} />
        <Column
          field="name"
          header="Name"
          filter
          filterPlaceholder="Search by name"
          style={{ minWidth: "12rem" }}
        />
        <Column
          header="phone number"
          field="phoneNumber"
          style={{ minWidth: "12rem" }}
        />
        <Column
          header="Account Name"
          field="accountName"
          filter
          filterPlaceholder="Search by acc"
          filterMenuStyle={{ width: "14rem" }}
          style={{ minWidth: "14rem" }}
        />
        <Column
          header="Account Type"
          field="accountType"
          style={{ minWidth: "14rem" }}
        />

        <Column
          field="status"
          header="Status"
          showFilterMenu={false}
          filterMenuStyle={{ width: "14rem" }}
          style={{ minWidth: "12rem" }}
          body={statusBodyTemplate}
          filter
          filterElement={statusRowFilterTemplate}
        />
        <Column
          header="Action"
          style={{ minWidth: "12rem" }}
          body={actionBodyTemplate}
        />
      </DataTable>
    </div>
  );
}
