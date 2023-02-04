import Footer from "../components/SharedComponents/Footer";
import Header from "../components/HomeAfterAuth/Header";
import { Outlet } from "react-router-dom";
export default function HomeAfterAuth() {
  return (
    <div className="w-full min-w-fit h-screen lg:overflow-auto ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
