import Button from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { useEffect, useState } from "react";
import { Connector, useAccount, useConnect, useDisconnect } from "wagmi";
import { getBalance } from "wagmi/actions";
import { config } from "./Wallet";

const ConnectWallet = () => {
  const { isConnected, address, isConnecting } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const [ethBal, setEthBal] = useState<string>("");
  const metaMaskConnector: Connector | undefined = connectors.find(
    (connector) => connector.name === "MetaMask"
  );
  const connectHandler = () => {
    if (metaMaskConnector) {
      connect({ connector: metaMaskConnector });
    }
  };

  useEffect(() => {
    const fetchBalance = async () => {
      const balance = await getBalance(config, {
        address: address!,
      });
      setEthBal(balance.formatted.toString());
    };
    if (isConnected && address) {
      fetchBalance();
    }
  }, [address, isConnected]);

  return (
    <>
      {isConnecting ? (
        <div className="flex flex-col items-center mt-32">
          <Loader size="large" className="border-[4px]" />
          <p>Connecting to wallet</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center mt-32">
            {isConnected ? (
              <div>
                <p>Wallet connected</p>
                <p>Address : {address}</p>
                <p>Balance : {ethBal}</p>
              </div>
            ) : (
              <Button onClick={connectHandler}>Connect Metamask wallet</Button>
            )}
          </div>
          {isConnected && (
            <Button
              className="absolute bottom-5 right-5 min-w-44"
              variant="error"
              onClick={() => {
                disconnect();
              }}
            >
              Disconnect Wallet
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default ConnectWallet;
