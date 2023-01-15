import CustomerNav from "../components/CustomerNav";
import Footer from "../components/Footer/Footer";
import Navbarx from "../components/Navbar/Navbar";
import Restaurant from "../components/Restaurant.js/Restaurant";
import Sidebar from "../components/Sidebar/Sidebar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function RestaurantPage() {
    return(
        <div>
            < Navbarx />
            < CustomerNav />
            < Restaurant />
            
            < Footer />
        </div>
    )
}
export default RestaurantPage;