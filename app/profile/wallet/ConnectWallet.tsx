import Button from "@/components/ui/button";
import { Connector, useAccount, useConnect } from "wagmi";

const ConnectWallet = () => {
  const { isConnected, address } = useAccount();
  const { connectors, connect } = useConnect();
  const metaMaskConnector: Connector | undefined = connectors.find(
    (connector) => connector.name === "MetaMask"
  );
  const connectHandler = () => {
    if (metaMaskConnector) {
      connect({ connector: metaMaskConnector });
    }
  };

  return (
    <div className="flex flex-col items-center mt-32">
      {isConnected ? (
        <div>
          <p>Wallet connected</p>
          <p>Address : {address}</p>
        </div>
      ) : (
        <Button onClick={connectHandler}>Connect Metamask wallet</Button>
      )}
    </div>
  );
};

export default ConnectWallet;
