import './App.css';
import { Chart } from "react-google-charts";

function App() {
  const data = [
    ["Task", "Hours per Day"],
    ["Study", 6],
    ["Eat", 3],
    ["Commute", 2],
    ["Gym", 2],
    ["Watch TV shows", 2],
    ["Sleep", 8],
  ];
  
  const options = {
    title: "My Daily Activities",
    chartArea: {
      left: '28%'
    }
  };
  return (
    <div className="ChartContainer">
    <Chart
      className="Chart"
      chartType="PieChart"
      data={data}
      options={options}
      width={"100vw"}
      height={"100vh"}
    />
    </div>
  );
}

export default App;