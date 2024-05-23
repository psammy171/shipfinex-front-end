"use client";

import PriceChart from "./price-chart";

export default function Home() {
  const trendingCryptos = [
    {
      id: "1",
      label: "Bitcoin",
      identifier: "btcusdt@trade",
    },
    {
      id: "2",
      label: "Etherium",
      identifier: "ethusdt@trade",
    },
    {
      id: "3",
      label: "Binance Coin",
      identifier: "bnbusdt@trade",
    },
    {
      id: "4",
      label: "Solana",
      identifier: "solusdt@trade",
    },
    {
      id: "5",
      label: "Ripple",
      identifier: "xrpusdt@trade",
    },
    {
      id: "6",
      label: "Shib INU",
      identifier: "shibusdt@trade",
    },
    {
      id: "7",
      label: "Dogecoin",
      identifier: "dogeusdt@trade",
    },
    {
      id: "8",
      label: "NEAR Protocol",
      identifier: "nearusdt@trade",
    },
    {
      id: "8",
      label: "USD Coin",
      identifier: "usdcusdt@trade",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-around py-4">
      {trendingCryptos.map((crypto) => (
        <PriceChart key={crypto.id} {...crypto} />
      ))}
    </div>
  );
}
