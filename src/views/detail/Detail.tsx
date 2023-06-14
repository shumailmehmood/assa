import React, { ReactElement } from "react";
import "../../assets/css/detail/Detail.scss"
import DetailCard from "../../components/detail/Detailcard";
import ImageCardComponent from "../../components/Imagecard";
import { ImageCard } from "../../types/types";
import { useSearchParams } from "react-router-dom";
import { useGetCharacterQuery } from "../../store/services/locations";

const Detail: React.FC = (): ReactElement => {
    const [searchParams] = useSearchParams()
    const {
        data,
        // isLoading,
        // isSuccess,
        // isError,
        // error,
    } = useGetCharacterQuery(searchParams.get('id'));
    const makeDefaultFormat = (): ImageCard => {
        return {
            id: 0,
            image: '',
            name: '',
            status: '',
            species: '',
            gender: '',
            dimension: '',
            type: '',
            location_url: ''
        }
    }
    return <>
        <div className="Detail-main" >
            <div className="detail-left-card" >
                <ImageCardComponent data={data?.character || makeDefaultFormat()} />
            </div>

            <div className="detail-right-content">
                <div className="heading">Other Characters</div>
                <div className="detail-cards">
                    {data?.relatedCharacter.map((e: any, i: number) => (<DetailCard data={e} key={e.id + "-" + i} />))}

                </div>
            </div>

        </div>

    </>;
};

export default Detail;
