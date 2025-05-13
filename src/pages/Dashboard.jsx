import React from "react";
import DashboardSummary from "../components/DashboardSummary";
import foodIcon from "../assets/icons/Food.png";
import housingIcon from "../assets/icons/Housing.png";
import medicalIcon from "../assets/icons/Medical.png";

function Dashboard() {
  return (
    <section>
      <h1>Welcome to CHW Connect</h1>
      <p>
        This is your dashboard. Use this space to enter participant information,
        update progress notes, track tasks, and monitor patient stats.
      </p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <img src={foodIcon} alt="Food Icon" className="icon-circle" />
        <img src={housingIcon} alt="Housing Icon" className="icon-circle" />
        <img src={medicalIcon} alt="Medical Icon" className="icon-circle" />
      </div>

      <DashboardSummary />
    </section>
  );
}

export default Dashboard;
