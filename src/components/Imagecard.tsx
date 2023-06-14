import { ReactElement } from "react";
import * as React from 'react';
import "../assets/css/location/Location.scss";
import { ImageCard } from "../types/types";
import { useNavigate } from "react-router-dom"

type Props = {
    data: ImageCard
}
const statusCircleColor: any = {
    Dead: 'dead-circle',
    Alive: 'alive-circle',
    unknown: 'unknown-circle'
}

const ImageCardComponent: React.FC<Props> = ({ data }): ReactElement => {
    const navigate = useNavigate()
    const navigatePage = () => {
        navigate(`/detail?id=${data.id}`)
    }
    return <>
        <div className="main-imagecard" key={data.id}  >
            <div className="image">
                <img src={data.image} alt={data.name} />
            </div>
            <div className="imagecard-content">
                <div className="heading" >
                    <span onClick={navigatePage}> {data.name}</span>
                </div>
                <div className="dot-text">

                    <div className="left-text">
                        <span className={statusCircleColor[data.status]}></span ><span>{data.status} - {data.species}</span>
                    </div>
                    {data.type && <div className="right-text" >
                        <span>
                            {data.type} - {data.gender}
                        </span>
                    </div>}

                </div>
                <div className="dimension">
                    <span>{data.type} {data.dimension}</span>
                </div>

            </div>
        </div>
    </>
}
export default ImageCardComponent;