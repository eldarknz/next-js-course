import Header from "../ui/Header/Header";
import Footer from "../ui/Footer/Footer";

const Layout = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
)

export default Layout
