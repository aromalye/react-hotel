import Footer from "../../customer/components/Footer/Footer";
import Navbarx from "../../customer/components/Navbar/Navbar";
import Sidebar from "../../customer/components/Sidebar/Sidebar";



function Chefpage () {
    return(
        <div>
            < Navbarx />
            < Sidebar urlSignin = "signin" urlRegister = "register" />
            < Footer />

        </div>
    )
}
export default Chefpage;