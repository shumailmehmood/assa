import { ReactElement } from "react";
import * as React from 'react';
import "../../assets/css/location/Location.scss";
import Button from '@mui/material/Button';
import { Status } from "../../types/types";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    Alive: {
        backgroundColor: theme.palette.success.light,
    },
    Dead: {
        backgroundColor: theme.palette.error.light,
    },
    unknown: {
        backgroundColor: theme.palette.grey[100],
    },
}));

type Props = {
    text: string
    onFilterChangeHandler: (filter: string) => void,
    variant: any
}
const statusCircleColor: any = {
    Dead: { color: 'error', circle: 'dead-circle', active: 'dead-dark-circle' },
    Alive: { color: 'success', circle: 'alive-circle', active: 'alive-dark-circle' },
    unknown: { color: 'inherit', circle: 'unknown-circle ', active: 'unknown-dark-circle' }
}
const ButtonComponent: React.FC<Props> = ({ text, onFilterChangeHandler, variant }): ReactElement => {
    const classes: any = useStyles();
    return <>
        <Button onClick={() => onFilterChangeHandler(text)} variant={variant.active ? 'contained' : 'outlined'} color={statusCircleColor[text]?.color} className={`${variant.active ? classes[text] : ''} button`} ><span className={variant.active ? statusCircleColor[text]?.active + ' ' + statusCircleColor[text]?.circle : statusCircleColor[text]?.circle} ></span> <span className={`${'button-content'} ${text === 'unknown' ? 'unknown-button' : ''}`}>{text}</span></Button >
    </>;
};

export default ButtonComponent;