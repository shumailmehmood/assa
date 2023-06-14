import React, { ReactElement } from "react";
import "../../assets/css/detail/Detail.scss"
import DetailCard from "../../components/detail/Detailcard";
import ImageCardComponent from "../../components/location/Imagecard";


const Detail: React.FC = (): ReactElement => {





    return <>
        <div className="Detail-main" >
            <div className="detail-left-card" >
                <ImageCardComponent data={{
                    "id": 38,
                    "name": "Beth Smith",
                    "status": "Alive",
                    "species": "Human",
                    "type": "",
                    "gender": "Female",
                    "origin": {
                        "name": "Earth (C-137)",
                        "url": "https://rickandmortyapi.com/api/location/1"
                    },
                    "location": {
                        "name": "Earth (C-137)",
                        "url": "https://rickandmortyapi.com/api/location/1"
                    },
                    "image": "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
                    "episode": [
                        "https://rickandmortyapi.com/api/episode/1",
                        "https://rickandmortyapi.com/api/episode/2",
                        "https://rickandmortyapi.com/api/episode/3",
                        "https://rickandmortyapi.com/api/episode/4",
                        "https://rickandmortyapi.com/api/episode/5",
                        "https://rickandmortyapi.com/api/episode/6",
                        "https://rickandmortyapi.com/api/episode/22",
                        "https://rickandmortyapi.com/api/episode/51"
                    ],
                    "url": "https://rickandmortyapi.com/api/character/38",
                    "created": "2017-11-05T09:48:44.230Z"
                }} />
            </div>

            <div className="detail-right-content">
                <div className="heading">Other Characters</div>
                <div className="detail-cards">
                    <DetailCard />
                </div>
            </div>

        </div>

    </>;
};

export default Detail;
