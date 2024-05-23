import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  label: string;
  identifier: string;
};

const PriceChart = ({ label, identifier }: Props) => {
  const points = -20;
  const [stock, setStock] = useState<number[]>([]);

  useEffect(() => {
    const ws = new WebSocket(`wss:stream.binance.com:9443/ws/${identifier}`);
    ws.onmessage = (e) => {
      const res = JSON.parse(e.data);
      const formatted = parseFloat(parseFloat(res.p).toFixed(5));
      setStock((prevVal) => [...prevVal, formatted]);
    };
  }, [identifier]);

  return (
    <div className="w-[400px] bg-slate-100 p-2 rounded shadow-lg">
      <p>{label}</p>
      <Line
        data={{
          labels: Array.from(new Set(stock))
            .slice(points)
            .slice(points)
            .map(() => ""),
          datasets: [
            {
              label: label,
              data: Array.from(new Set(stock)).slice(points),
              borderColor: "#11710D",
            },
          ],
        }}
        options={{
          scales: {
            y: {
              ticks: {
                color: "black",
                font: {
                  family: "inherit",
                  weight: "bold",
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PriceChart;
