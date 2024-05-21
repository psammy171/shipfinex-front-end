"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";
import ConnectWallet from "./ConnectWallet";
import DetectWallet from "./DetectWallet";
import InstallWallet from "./InstallMetaMask";

const Wallet = () => {
  const queryClient = new QueryClient();
  const [detectingWallet, setDetectingWallet] = useState<boolean>(true);
  const [isWalletInstalled, setIsWalletInstalled] = useState<boolean>(false);

  const config = createConfig({
    chains: [polygonMumbai],
    connectors: [metaMask()],
    transports: {
      [polygonMumbai.id]: http(),
    },
  });

  const setWalletInstalledFalg = (isInstalled: boolean) => {
    setIsWalletInstalled(isInstalled);
    setDetectingWallet(false);
  };

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div>
          {detectingWallet ? (
            <DetectWallet setFlag={setWalletInstalledFalg} />
          ) : (
            <>{isWalletInstalled ? <ConnectWallet /> : <InstallWallet />}</>
          )}
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Wallet;
