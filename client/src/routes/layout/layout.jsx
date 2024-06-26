import { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";

function Layout() {
   return (
      <div className="h-full max-w-[640px] sm:max-w-[768px] md:max-w-[1280px] lg:max-w-[1366px] mx-auto px-[20px] flex flex-col">
         <div className="navbar">
            <Navbar />
         </div>
         <div className="">
            <Outlet />
         </div>
      </div>
   );
}

function RequireAuth() {
   const { currentUser } = useContext(AuthContext);

   if (!currentUser) return <Navigate to="/login" />;
   else {
      return (
         <div className="h-full max-w-[640px] sm:max-w-[768px] md:max-w-[1280px] lg:max-w-[1366px] mx-auto px-[20px] flex flex-col">
            <div className="navbar">
               <Navbar />
            </div>
            <div className="content">
               <Outlet />
            </div>
         </div>
      );
   }
}

export { Layout, RequireAuth };
