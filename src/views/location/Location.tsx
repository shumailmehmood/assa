import React, { ReactElement, useState } from "react";
import { useGetSpecificLocationQuery } from "../../store/services/locations"
import "../../assets/css/home/App.scss"
import "../../assets/css/location/Location.scss"
import ButtonComponent from "../../components/location/Button"
import ImageCardComponent from "../../components/Imagecard"
import { useSearchParams } from "react-router-dom";
import usePagination from "../../hooks/usePagination";
import SkeletonLoader from "../../components/location/CardSkeleton"
import getUniqueStatuses from "../../utils/uniqueStatuses";
import Paginating from "../../components/Paginator";
import useStatusFilter from "../../hooks/useFilter";
import { Character, ImageCard } from "../../types/types";
const pageSize = 20;


const LocationContainer: React.FC = (): ReactElement => {
    const [searchParams] = useSearchParams()
    const [filter, setFilter] = useState('')
    const [activeBtn, setActiveBtn] = React.useState<any>({
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

    //call the endpoint
    const {
        data = [],
        isLoading,
    } = useGetSpecificLocationQuery(searchParams.get('id'))

    //call the filter hook
    const filteredData = useStatusFilter(data, filter);
    //call for the pagination
    const {
        currentPage,
        totalPages,
        isLoad,
        goToPage,
    } = usePagination({
        initialData: filteredData,
        pageSize: pageSize,
    });
    //onFilter Change
    const onFilterChange = (filter: string): void => {
        setFilter(filter)
        let status = activeBtn;
        const updatedStatus: any = {
            Dead: { ...status.Dead, active: false },
            Alive: { ...status.Alive, active: false },
            unknown: { ...status.unknown, active: false }
        };
        updatedStatus[filter].active = true;
        setActiveBtn(updatedStatus)
    }
    const makeDataFormat = (data: Character[]): ImageCard[] => {
        return data.map(e => ({
            id: e.id,
            image: e.image,
            name: e.name,
            status: e.status,
            species: e.status,
            gender: '',
            dimension: '',
            type: '',
            location_url: e.location.url

        }))
    }
    return <>
        <div className="location-main">
            {(isLoad || isLoading) ? <div className=" location-cards">
                {new Array(pageSize).fill(0).map((e, i) => (
                    <SkeletonLoader key={i} />
                ))}
            </div> : <div className="location-content">
                <div>
                    <div className="location-text">Filter by Status:</div>
                    <div className="location-buttons">
                        {getUniqueStatuses(data)?.map(e => (<ButtonComponent variant={activeBtn[e]} text={e} onFilterChangeHandler={onFilterChange} key={e} />))}

                    </div>
                </div>

                <div className="location-cards">
                    {makeDataFormat(currentPage).map((row: ImageCard) => (<ImageCardComponent data={row} key={row.id} />))}

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

export default LocationContainer;
//Design Location based characters page