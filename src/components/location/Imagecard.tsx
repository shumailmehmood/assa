import { ReactElement } from "react";
import * as React from 'react';
import "../../assets/css/location/Location.scss";
type Props = {
    data: any
}
const statusCircleColor: any = {
    Dead: 'dead-circle',
    Alive: 'alive-circle',
    unknown: 'unknown-circle'
}
const ImageCardComponent: React.FC<Props> = ({ data }): ReactElement => {
    return <>
        <div className="main-imagecard" key={data.id}>
            <div className="image">
                <img src={data.image} alt="Image" />
            </div>
            <div className="imagecard-content">
                <div className="heading">
                    {data.name}
                </div>
                <div className="dot-text">

                    <div className="left-text">
                        <span className={statusCircleColor[data.status]}></span ><span>{data.status} - {data.species}</span>
                    </div>
                    <div className="right-text">
                        <span>
                            narian - male
                        </span>
                    </div>

                </div>
                <div className="dimension">
                    <span>Narnia Dimension</span>
                </div>

            </div>
        </div>
    </>
}
export default ImageCardComponent;