import React from "react";
import CohortDetails from "./components/CohortDetails";
import cohorts from "../data/cohorts";

function Dashboard() {
    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ textAlign: "center", color: "#2c3e50" }}>
                🎓 Cohort Dashboard
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {cohorts.map(cohort => (
                    <CohortDetails key={cohort.id} cohort={cohort} />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;