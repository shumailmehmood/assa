import { ReactNode, ReactElement } from "react";
import NavBar from "../components/layout/Nav";


interface Props {
    children: ReactNode
}

const Layout: React.FC<Props> = ({ children }): ReactElement => {

    // console.log('Layout', location, isHomeRoute)
    return (
        <>
            <NavBar />
            <main>{children}</main>
        </>
    );
};

export default Layout;
