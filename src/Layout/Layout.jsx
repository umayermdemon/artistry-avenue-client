import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  return (
    <div className="bg-[#E5B7B7] min-h-screen">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Layout;