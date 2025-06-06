
import { Outlet } from "react-router";
import Home from "../Pages/Home";
import Footer from "../Shared/Footer";

const Main = () => {
    return (
        <div>

            <Home></Home>
            <Footer></Footer>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;