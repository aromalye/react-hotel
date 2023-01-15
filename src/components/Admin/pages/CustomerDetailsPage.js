import Footer from "../../customer/components/Footer/Footer";
import Navbarx from "../../customer/components/Navbar/Navbar";
import Sidebar from "../../customer/components/Sidebar/Sidebar";
import AdminNav from "../components/AdminNav/AdminNav";
import CustomerDetails from "../components/CustomerDetails/CustomerDetails";


function CustomerDetailsPage() {
    return (
        <div>
            < Navbarx />
            < AdminNav />
            < CustomerDetails />
            < Footer />
            {/* < Sidebar /> */}
        </div>
    )
}
export default CustomerDetailsPage;