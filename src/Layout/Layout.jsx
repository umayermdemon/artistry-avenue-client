import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Banner/Banner";

const Layout = () => {
  return (
    <div className="bg-[#FFD1E3] min-h-screen">
      <NavBar />
      <Banner/>
      <div className="min-h-[calc(100vh-300px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
