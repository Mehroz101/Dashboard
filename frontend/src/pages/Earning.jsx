import React from "react";
import Earning_card from "../components/Earning_card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Paymenttable from "../components/PaymentTable";
const Earning = () => {
  return (
    <>
      <div className="earning_page">
        <div className="earning_cards flex justify-content-between align-content-center gap-4 flex-wrap">
          <Earning_card
            title={"Revenue"}
            revenue={"3425"}
            percentage={"10"}
            icon={"pi pi-credit-card"}
          />
          <Earning_card
            title={"Expense"}
            revenue={"345"}
            percentage={"15"}
            icon={"pi pi-money-bill"}
          />
          <Earning_card
            title={"Profit"}
            revenue={"2768"}
            percentage={"26"}
            icon={"pi pi-dollar"}
          />
        </div>
        <div className="card mt-4">
          <Paymenttable />
        </div>
      </div>
    </>
  );
};

export default Earning;
