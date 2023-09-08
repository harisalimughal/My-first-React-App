import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <h1 style={{ textAlign: "Centre" }}></h1>
      <Pie
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

export default PieChart;
