import Footer from "../components/Footer/Footer";
import Navbarx from "../components/Navbar/Navbar"
import Sidebar from "../components/Sidebar/Sidebar";

function CustomerPage() {
    return(
        <div>
            < Navbarx />
            < Sidebar urlSignin = "signin" urlRegister = "register"  />
            < Footer />
        </div>
        
    )
}
export default CustomerPage;