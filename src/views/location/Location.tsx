import React, { ReactElement, useEffect, useState } from "react";
import Card from "../../components/home/Card";
import "../../assets/css/home/App.scss"
import Paginating from "../../components/home/Paginator";
import { useGetLocationsQuery } from "../../store/services/locations"
import Skeleton from '@mui/material/Skeleton';
import "../../assets/css/home/App.scss"
import ButtonComponent from "../../components/location/Button"
import ImageCardComponent from "../../components/location/Imagecard"
import { useLocation } from "react-router-dom";

const Location: React.FC = (): ReactElement => {
    let location = useLocation();
    console.log(location)
    const {
        data,
        isLoading,
        // isSuccess,
        // isError,
        // error,
    } = useGetLocationsQuery(1)
    useEffect(() => { }, [])
    return <>
        <div className="location-main">
            <div>
                <div className="location-text">Filter by Status:</div>
                <div className="location-buttons">
                    <ButtonComponent color="success" />
                    <ButtonComponent color="success" />
                    <ButtonComponent color="success" />
                </div>
            </div>

            <div className="location-cards">
                <ImageCardComponent />
                <ImageCardComponent />
            </div>
        </div>

    </>;
};

export default Location;
