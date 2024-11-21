import React from "react";
import "../style/HomePage.css";
import Statistic_card from "../components/Statistic_card";
import ChartLine from "../components/ChartLine";
import PieChart from "../components/PiaChart";
import DataTableView from "../components/DataTableView";
const HomePage = () => {
  return (
    <>
      <div className="dashboard">
        <h1 className="page_heading">Dashboard</h1>
        <div className="statistic_cards">
          <Statistic_card
            card_number={1}
            card_heading={"Users"}
            card_count={234}
            card_icon={"pi pi-users"}
          />
          <Statistic_card
            card_number={2}
            card_heading={"Spaces"}
            card_count={100}
            card_icon={"pi pi-send"}
          />
          <Statistic_card
            card_number={3}
            card_heading={"Reservations"}
            card_count={245}
            card_icon={"pi pi-receipt"}
          />
          <Statistic_card
            card_number={4}
            card_heading={"Revenue"}
            card_count={2343}
            card_icon={"pi pi-wallet"}
          />
        </div>
        <div className="charts">
          <div className="chart">
            <h2>Analytics</h2>
            <ChartLine />
          </div>
          <div className="chart">
          <h2>Ratio</h2>
            <PieChart />
          </div>
          
        </div>
        <div className="datatable mt-4">
            <DataTableView/>
          </div>
      </div>
    </>
  );
};

export default HomePage;
