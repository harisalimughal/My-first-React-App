
import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart({ chartData }) {
  return (
    <div className="chart-container">
      <h1 style={{ textAlign: "Centre" }}></h1>
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Semesters"
            
            }
          }
        }}
      />
    </div>
  );
}

export default DoughnutChart;
