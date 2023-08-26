import Navbar from "./navbar";
import Footer from "./footer";
import { FOOTER_DATA, NAV_LINKS } from "@/data/constant";
import Catalog from "@/pages/catalog";

const MainLayout = () => {
  return (
    <>
      <Navbar links={NAV_LINKS} />
      <Catalog />
      <Footer data={FOOTER_DATA} />
    </>
  );
};

export default MainLayout;
