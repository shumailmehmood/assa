import React, { ReactElement } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Logo from '../../assets/images/logo.svg'
import Back from '../../assets/images/back.svg'
import history from "../../utils/history";
import "../../assets/css/home/App.scss";
import { useLocation } from 'react-router-dom';


const NavBar: React.FC = (): ReactElement => {
    const location = useLocation();
    const isHomeRoute = location.pathname === '/';
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className="nav-border" position="static" color="transparent" elevation={0}  >
                <Toolbar>
                    {!isHomeRoute ? <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}
                        onClick={() => history.back()}
                    >
                        <img src={Back} alt="back" />
                    </IconButton> : null}
                    <Box m="auto">
                        <img className="" src={Logo} alt="logo" />
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default NavBar;