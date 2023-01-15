import Footer from "../../customer/components/Footer/Footer";
import Navbarx from "../../customer/components/Navbar/Navbar";
import ManagerNav from "../../Admin/components/ManagerNav";
import CustomerDetails from "../../Admin/components/CustomerDetails/CustomerDetails";



function ManagerStaffPage() {
    return(
        <div>
            < Navbarx />
            < ManagerNav />
            < CustomerDetails />
            < Footer />

        </div>
    )
}
export default ManagerStaffPage;