import Navigation from "../components/Navigation/Navigation";

const Layout = ({children}) => {
    return ( 
        <> 
            <header> header layout 
                <Navigation / >
                </header> 
            {children}
            <footer> footer layout</footer>
        </>
     );
}
 
export default Layout;