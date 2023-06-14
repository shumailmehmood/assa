import { ReactElement } from "react";
import "../../assets/css/detail/Detail.scss";
import * as React from 'react'

type Props = {
    data: any
}
const DetailCard: React.FC<Props> = ({ data }): ReactElement => {
    return (
        <>
            <div className="detail-card-main">
                <div className="left-img">
                    <img src={data.image} alt="character" />
                </div>
                <div className="detail-right-content">
                    <div className="name">
                        <span>{data.name}</span>
                    </div>
                    <div className="dimension">
                        <span>{data.dimension}</span>
                    </div>
                    <div className="gender">
                        <span> {data.type} - {data.gender}</span>
                    </div>
                </div>



            </div>
        </>

    )
};

export default DetailCard;