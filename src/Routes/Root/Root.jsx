import { Outlet, useLocation } from "react-router";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Footer from "../../Components/Footer/Footer";


const Root = () => {

    const location = useLocation();
    const hiddenFooter = location.pathname;
console.log(hiddenFooter)


    return (
        
        <>

        <header>
            <NavigationBar/>
        </header>


        {/* // main section */}
        <main className="">

            <Outlet/>
        </main>


        <footer>
            {/* <Footer/> */}
        </footer>


        </>
    );
};

export default Root;