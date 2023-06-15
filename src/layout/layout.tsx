import { ReactNode, ReactElement } from "react";
import NavBar from "../components/layout/Nav";


interface Props {
    children: ReactNode
}

const Layout: React.FC<Props> = ({ children }): ReactElement => {

    // console.log('Layout', location, isHomeRoute
    const responsive = {
        width: "100%",
        'overflow-x': "hidden"
    }
    return (
        <>
            <NavBar />
            <main style={responsive}  >{children}</main>
        </>
    );
};

export default Layout;
