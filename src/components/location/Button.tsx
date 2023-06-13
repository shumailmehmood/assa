import { ReactElement } from "react";
import * as React from 'react';
import "../../assets/css/location/Location.scss";
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core/styles";
type Props = {
    color: any
}
const ButtonComponent: React.FC<Props> = ({ color = 'primary' }): ReactElement => {
    console.log(`${color}`)
    return <>
        <Button variant='outlined' color={color} className="button" ><span className="circle"></span> <span className="button-content">Dead</span></Button>
    </>;
};

export default ButtonComponent;