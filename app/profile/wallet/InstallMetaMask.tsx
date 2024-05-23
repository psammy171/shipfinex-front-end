import Image from "next/image";

const InstallWallet = () => {
  return (
    <div className="flex flex-col items-center mt-32">
      <Image
        src={"/settings.png"}
        width={50}
        height={50}
        alt="install"
        className="animate-spin-slow"
      />
      <p className="mt-6 text-xl font-semibold">
        Please install metamask wallet
      </p>
    </div>
  );
};

export default InstallWallet;
