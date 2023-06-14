export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}
interface StatusObject {
    class?: string;
    active?: boolean;
}

export interface Status {
    Dead?: StatusObject;
    Alive?: StatusObject;
    unknown?: StatusObject;
}
export interface Location {

    id: number,
    image: string,
    name: string,
    status: string,
    species: string
}

export interface ImageCard {
    id: number,
    image: string,
    name: string,
    status: string,
    species: string,
    gender: string,
    dimension: string,
    type: string,
    location_url: string
}