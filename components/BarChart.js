import { Bar } from "react-chartjs-2";

export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h1 style={{ textAlign: "right" }}>MY GPA</h1>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "GPA from semster 1 to semester 2"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};
