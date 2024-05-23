import Loader from "@/components/ui/loader";
import detectEthereumProvider from "@metamask/detect-provider";
import { useEffect } from "react";

type Props = {
  setFlag: (val: boolean) => void;
};

const DetectWallet = ({ setFlag }: Props) => {
  useEffect(() => {
    const detectWallet = async () => {
      const isWalletInstalled = await detectEthereumProvider();
      setFlag(!!isWalletInstalled);
    };
    detectWallet();
  }, [setFlag]);

  return (
    <div className="flex flex-col items-center mt-32">
      <Loader size="xl" className="border-[6px]" />
      <p className="mt-6 text-xl font-semibold">Detecting...</p>
    </div>
  );
};

export default DetectWallet;
