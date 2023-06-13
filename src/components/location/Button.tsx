import { ReactElement } from "react";
import * as React from 'react';
import "../../assets/css/location/Location.scss";
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core/styles";
type Props = {
    text: string
}
const statusCircleColor: any = {
    Dead: { color: 'error', circle: 'dead-circle' },
    Alive: { color: 'success', circle: 'alive-circle' },
    unknown: { color: 'inherit', circle: 'unknown-circle ' }
}
const ButtonComponent: React.FC<Props> = ({ text }): ReactElement => {
    const [activeBtn, setActiveBtn] = React.useState({
        Dead: {
            class: 'dead-active',
            active: false
        },
        Alive: {
            class: 'live-active',
            active: false

        },
        unknown: {
            class: 'unknown-active',
            active: false
        }
    })
    console.log(statusCircleColor[text].circle)
    return <>
        <Button variant='outlined' color={statusCircleColor[text]?.color} className="button" ><span className={statusCircleColor[text]?.circle}></span> <span className={`${'button-content'} ${text === 'unknown' ? 'unknown-button' : ''}`}>{text}</span></Button >
    </>;
};

export default ButtonComponent;