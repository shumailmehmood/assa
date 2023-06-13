import React, { ReactElement } from 'react'
import Skeleton from '@mui/material/Skeleton';
import "../../assets/css/location/Location.scss";


const SkeletonLoader: React.FC = (): ReactElement => {
    return (
        <div>
            <div className="main-imagecard">
                <div className="image">
                    <Skeleton variant="rectangular" width={340} height={340} />
                </div>
                <div className="imagecard-content">
                    <div className="heading">
                        <Skeleton width={340} />
                    </div>
                    <div className="dot-text">
                        <span ><Skeleton variant="circular" width={30} height={30} /></span ><span> <Skeleton width={300} /></span>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default SkeletonLoader;