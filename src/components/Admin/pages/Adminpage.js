import Footer from "../../customer/components/Footer/Footer";
import Navbarx from "../../customer/components/Navbar/Navbar";
import Sidebar from "../../customer/components/Sidebar/Sidebar";
import AdminNav from "../components/AdminNav/AdminNav";
import CustomerDetails from "../components/CustomerDetails/CustomerDetails";
import ManagerDetails from "../components/ManagerDetails/ManagerDetails";


function Adminpage() {
    return(
        <div>
            < Navbarx />
            < AdminNav />
            < ManagerDetails />
            < Footer />
        </div>
    )
}
export default Adminpage;