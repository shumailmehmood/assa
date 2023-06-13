import { ReactElement } from "react";
import * as React from 'react';
import "../../assets/css/location/Location.scss";
import cardimg from "../../assets/css/location/imagecard.jpeg"

type Props = {

}
const ImageCardComponent: React.FC<Props> = ({ }): ReactElement => {
    return <>
        <div className="main-imagecard">
            <div className="image">
                <img src={cardimg} alt="" />
            </div>
            <div className="imagecard-content">
                <div className="heading">
                    MC Haps
                </div>
                <div className="dot-text">
                    <span className="card-circle"></span ><span>Alive - Human</span>
                </div>
            </div>

        </div>


    </>
}
export default ImageCardComponent;