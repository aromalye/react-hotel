import Footer from "../../customer/components/Footer/Footer";
import Navbarx from "../../customer/components/Navbar/Navbar";
import AdminNav from "../components/AdminNav/AdminNav";
import ChefDetails from "../components/ChefDetails";


function ChefDetailsPage() {
    return(
        <div>
            <Navbarx />
            <AdminNav />
            <ChefDetails />
            <Footer />
        </div>
    )
}
export default ChefDetailsPage;