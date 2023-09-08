import { useState } from "react";
import { Data } from "./utils/Data";
import  DoughnutChart  from "./utils/components/DoughnutChart";
import { BarChart } from "./utils/components/BarChart";
import LineChart from "./utils/components/LineChart";
import "./styles.css";
import PieChart from "./utils/components/PieChart";

export default function App() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.semester),
    
    datasets: [
      {
        label: "GPA Gained ",
        data: Data.map((data) => data.GPAGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#f0331a",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  
  return (
    
    <div className="App">
      <BarChart chartData={chartData} />
      <DoughnutChart chartData={chartData}/>
      <LineChart chartData={chartData} />  
      <PieChart chartData={chartData} /> 
      
    </div>
  );
}
