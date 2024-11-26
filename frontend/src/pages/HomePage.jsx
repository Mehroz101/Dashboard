import React, { useEffect, useState } from "react";
import "../style/HomePage.css";
import Statistic_card from "../components/Statistic_card";
import ChartLine from "../components/ChartLine";
import PieChart from "../components/PiaChart";
import DataTableView from "../components/DataTableView";
import { useDashboard } from "../context/DataContext";
import { calculateRevenue } from "../utils/function";
import Reservation from "./Reservation";
const HomePage = () => {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const { reservationData, spaceData, earningData, userData } = useDashboard();

  useEffect(() => {
    setTotalRevenue(calculateRevenue(earningData));
  }, [earningData]);
  return (
    <>
      <div className="dashboard">
        <h1 className="page_heading">Dashboard</h1>
        <div className="statistic_cards">
          <Statistic_card
            card_number={1}
            card_heading={"Users"}
            card_count={userData?.length}
            card_icon={"pi pi-users"}
          />
          <Statistic_card
            card_number={2}
            card_heading={"Spaces"}
            card_count={spaceData?.length}
            card_icon={"pi pi-send"}
          />
          <Statistic_card
            card_number={3}
            card_heading={"Reservations"}
            card_count={reservationData?.length}
            card_icon={"pi pi-receipt"}
          />
          <Statistic_card
            card_number={4}
            card_heading={"Revenue"}
            card_count={totalRevenue}
            card_icon={"pi pi-wallet"}
          />
        </div>
        <div className="charts">
          <div className="chart">
            <h2>Analytics</h2>
            <ChartLine requests={reservationData} revenues={earningData} />
          </div>
          <div className="chart">
            <h2>Ratio</h2>
            <PieChart />
          </div>
        </div>
        <div className="datatable mt-4">
          {/* <DataTableView /> */}
          <Reservation hidecard={true} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
