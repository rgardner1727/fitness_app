import Signup from "./Signup";
import Location from "./Location";
import Pricing from "./Pricing";
import Footer from "./Footer";

const Main = () => {
    return (
        <main className="main">
            <Signup/>
            <Location/>
            <Pricing/>
            <Footer/>
        </main>
    )
}

export default Main;