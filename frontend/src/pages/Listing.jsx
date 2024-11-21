import React, { useState, useEffect } from "react";
import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { Tag } from "primereact/tag";
import { spaces } from "../FakeData/CustomerService";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import Statistic_card from "../components/Statistic_card";
import { useNavigate } from "react-router";
import ROUTES from "../utils/routes";

export default function BasicFilterDemo() {
  const [customers, setCustomers] = useState(null);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    "country.name": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
    balance: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });
  const [loading, setLoading] = useState(true);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [representatives] = useState([
    { name: "Amy Elsner" },
    { name: "Anna Fali" },
    { name: "Asiya Javayant" },
    { name: "Bernardo Dominic" },
    { name: "Elwin Sharvill" },
    { name: "Ioni Bowcher" },
    { name: "Ivan Magalhaes" },
    { name: "Onyama Limba" },
    { name: "Stephen Shaw" },
    { name: "XuXue Feng" },
  ]);
  const [statuses] = useState(["active", "deactiveted"]);
  const Navigate = useNavigate();
  const getSeverity = (status) => {
    switch (status) {
      case "active":
        return "success";

      case "deactivated":
        return "warning";

      case "renewal":
        return null;
    }
  };

  useEffect(() => {
    setCustomers(spaces);
    setLoading(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

  const countryBodyTemplate = (rowData) => {
    return (
      <div className="flex align-items-center gap-2">
        <img
          alt="flag"
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className={`flag flag-${rowData.country.code}`}
          style={{ width: "50px" }}
        />
      </div>
    );
  };

  const representativeBodyTemplate = (rowData) => {
    const representative = rowData.representative;

    return (
      <div className="flex align-items-center gap-2">
        <span>{representative.name}</span>
      </div>
    );
  };

  const representativesItemTemplate = (option) => {
    return (
      <div className="flex align-items-center gap-2">
        <span>{option.name}</span>
      </div>
    );
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <Tag value={rowData.status} severity={getSeverity(rowData.status)} />
    );
  };

  const statusItemTemplate = (option) => {
    return <Tag value={option} severity={getSeverity(option)} />;
  };

  const verifiedBodyTemplate = (rowData) => {
    const toggleStatus = () => {
      // Create a new array with the updated status
      const updatedCustomers = customers.map((customer) => {
        if (customer.id === rowData.id) {
          return {
            ...customer,
            status: customer.status === "active" ? "deactivated" : "active",
          };
        }
        return customer;
      });

      // Update the customers state
      setCustomers(updatedCustomers);
    };

    return (
      <div>
        {rowData.status === "active" ? (
          <Button
            // label="Active"
            icon="pi pi-check"
            className="p-button-success"
            onClick={toggleStatus}
          />
        ) : (
          <Button
            // label="Inactive"
            icon="pi pi-times"
            className="p-button-danger"
            onClick={toggleStatus}
          />
        )}
      </div>
    );
  };

  const representativeRowFilterTemplate = (options) => {
    return (
      <MultiSelect
        value={options.value}
        options={representatives}
        itemTemplate={representativesItemTemplate}
        onChange={(e) => options.filterApplyCallback(e.value)}
        optionLabel="name"
        placeholder="Any"
        className="p-column-filter"
        maxSelectedLabels={1}
        style={{ minWidth: "14rem" }}
      />
    );
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
  const viewData = (e) => {
    console.log(e.data);
    Navigate(ROUTES.LISTING.LISTING_VIEW+`/${e.data.id}`);
  };
  const ratingBodyTemplate = (rowData) => {
    return <Rating value={rowData.rating} readOnly cancel={false} />;
  };
  const header = renderHeader();

  return (
    <>
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
            card_number={4}
            card_heading="Total Spaces"
            card_icon="pi pi-map"
            card_count={customers?.length}
          />
        </div>

        <Button
          label="Add New Space"
          icon="pi pi-plus"
          onClick={() => console.log("add user")}
        />
      </div>
      <div className="card">
        <DataTable
          value={customers}
          paginator
          rows={10}
          dataKey="id"
          filters={filters}
          filterDisplay="row"
          selectionMode="single"
          onRowSelect={viewData}
          loading={loading}
          globalFilterFields={[
            "name",
            "country.name",
            "representative.name",
            "status",
          ]}
          header={header}
          emptyMessage="No customers found."
        >
          <Column header="Sno" style={{ minWidth: "5rem" }} field="id" />
          <Column
            header="Id"
            style={{ minWidth: "10rem" }}
            field="balance"
            filter
            showFilterMenu={false}
            filterPlaceholder="Filter by balance" // Optional placeholder
            filterMenuStyle={{ width: "7rem" }}
          />
          <Column
            header="Space Img"
            style={{ minWidth: "8rem" }}
            body={countryBodyTemplate}
          />
          <Column
            field="name"
            header="Space Name"
            filter
            showFilterMenu={false}
            filterPlaceholder="Search by name"
            style={{ minWidth: "15rem" }}
          />
          <Column
            header="City Name"
            filterField="representative"
            showFilterMenu={false}
            filterMenuStyle={{ width: "14rem" }}
            style={{ minWidth: "14rem" }}
            body={representativeBodyTemplate}
            filter
            filterElement={representativeRowFilterTemplate}
          />
          <Column
            header="Completed Requests"
            showFilterMenu={false}
            field="CompletedRequests"
            filterMenuStyle={{ width: "5rem" }}
            style={{ minWidth: "5rem" }}
          />
          <Column
            header="Completed Requests"
            showFilterMenu={false}
            field="CompletedRequests"
            filterMenuStyle={{ width: "14rem" }}
            style={{ minWidth: "14rem" }}
            body={ratingBodyTemplate}
          />
          <Column
            field="status"
            header="Status"
            showFilterMenu={false}
            filterMenuStyle={{ width: "7rem" }}
            style={{ minWidth: "7rem" }}
            body={statusBodyTemplate}
            filter
            filterElement={statusRowFilterTemplate}
          />
          <Column
            field="status"
            header="Action"
            dataType="boolean"
            style={{ minWidth: "5rem" }}
            body={verifiedBodyTemplate}
          />
        </DataTable>
      </div>
    </>
  );
}
