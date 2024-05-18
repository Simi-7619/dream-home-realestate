import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Root = () => {
    return (
        <div className="w-[100%] h-[100%] m-0 p-0 overflow-hidden">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;