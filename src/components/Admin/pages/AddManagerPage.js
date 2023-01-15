import { UserData } from "../../../Data/User";
import Footer from "../../customer/components/Footer/Footer";
import Navbarx from "../../customer/components/Navbar/Navbar";
import Sidebar from "../../customer/components/Sidebar/Sidebar";
import AdminNav from "../components/AdminNav/AdminNav";
import EditUser from "../components/EditUser";
import ManagerDetails from "../components/ManagerDetails/ManagerDetails";
import Filter from "../components/NameFilter2/Namefilter2";


function AddManagerPage() {
    return(
        <div>
            < Navbarx />
            < AdminNav />
            < ManagerDetails />
            {/* < Sidebar /> */}
            < Footer />
        </div>
    )
}
export default AddManagerPage;