
import FooterHomeOne from "./footer";
import HeaderHomeOne from "./header";

export default function Layout({ children }) {
  const headerChooseFunc = () => {
    return <HeaderHomeOne />;
  };
  const footerChooseFunc = () => {
    return <FooterHomeOne />;
  };
  return (
    <>
      {headerChooseFunc()}
      <main>{children}</main>
      {footerChooseFunc()}
    </>
  );
}
