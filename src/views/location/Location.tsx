import React, { ReactElement } from "react";
import { useGetSpecificLocationQuery } from "../../store/services/locations"
import "../../assets/css/home/App.scss"
import "../../assets/css/location/Location.scss"
import ButtonComponent from "../../components/location/Button"
import ImageCardComponent from "../../components/location/Imagecard"
import { useSearchParams } from "react-router-dom";
import usePagination from "../../hooks/usePagination";
import SkeletonLoader from "../../components/location/CardSkeleton"
import getUniqueStatuses from "../../utils/uniqueStatuses";
import Paginating from "../../components/home/Paginator";

const pageSize = 20;


const Location: React.FC = (): ReactElement => {
    const [searchParams] = useSearchParams()

    console.log(searchParams.get('id'))
    const {
        data,
        isLoading,
        // isSuccess,
        // isError,
        // error,
    } = useGetSpecificLocationQuery(searchParams.get('id'))


    const paginationOptions = {
        initialData: data || [],
        pageSize: pageSize,
    };

    const {
        currentPage,
        totalPages,
        isLoad,
        isError,
        goToPage,
    } = usePagination<any[]>(paginationOptions);
    console.log("HBGG", currentPage)
    return <>
        <div className="location-main">
            {(isLoad || isLoading) ? <div className=" location-cards">
                {new Array(pageSize).fill(0).map(() => (
                    <SkeletonLoader />
                ))}
            </div> : <div>
                <div>
                    <div className="location-text">Filter by Status:</div>
                    <div className="location-buttons">
                        {getUniqueStatuses(data || []).map(e => (<ButtonComponent text={e} />))}

                    </div>
                </div>

                <div className="location-cards">
                    {currentPage.map((row: any) => (<ImageCardComponent data={row} />))}

                </div></div>}
            <div className="location-pagination">
                <Paginating
                    count={totalPages}
                    onChangeHandler={(
                        event: React.ChangeEvent<unknown>,
                        page: number
                    ): void => goToPage(page)}
                />
            </div>
        </div>

    </>;
};

export default Location;
//Design Location based characters page