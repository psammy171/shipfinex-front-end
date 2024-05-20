import Header from "./header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="max-w-[1300px] min-w-[300px] mx-auto h-full px-2">
        {children}
      </div>
    </>
  );
};

export default Layout;
