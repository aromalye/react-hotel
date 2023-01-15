import DateRoomFilter from "../../staff/components/DateRoomFilter/DateRoomFilter";
import CustomerNav from "../components/CustomerNav";
import Footer from "../components/Footer/Footer";
import Navbarx from "../components/Navbar/Navbar"
import RoomDetails from "../components/RoomDetails/RoomDetails";
import Sidebar from "../components/Sidebar/Sidebar";

function CustomerPage() {
    return(
        <div>
            < Navbarx />
            < CustomerNav/>
            < RoomDetails />
            {/* < DateRoomFilter /> */}
            {/* < Sidebar urlSignin = "signin" urlRegister = "register"  /> */}
            < Footer />
        </div>
        
    )
}
export default CustomerPage;