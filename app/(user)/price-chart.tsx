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
    <div>
      Price chart
      <div className="w-[400px] border p-2 rounded shadow-lg">
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
                borderColor: "#0068FF",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default PriceChart;
