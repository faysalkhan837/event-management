import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";


const Main = () => {
    const location = useLocation();
    const noheaderNofooter = location.pathname.includes('signup') || location.pathname.includes('login');
    return (
        <div>
            {noheaderNofooter ||<Navbar></Navbar>}
            <Outlet></Outlet>
            {noheaderNofooter || <Footer></Footer>}
        </div>
    );
};

export default Main;