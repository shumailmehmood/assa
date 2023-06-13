import React, { ReactElement, useEffect, useState } from "react";
import Card from "../../components/home/Card";
import "../../assets/css/home/App.scss"
import Paginating from "../../components/home/Paginator";
import { useGetLocationsQuery } from "../../store/services/locations"
import Skeleton from '@mui/material/Skeleton';

const Location: React.FC = (): ReactElement => {
    useEffect(() => { }, [])
    return <>
        Location
    </>;
};

export default Location;
