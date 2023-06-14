import { useState } from 'react';

interface Character {
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

const useStatusFilter = (data: Character[]): [Character[], (status: string) => void] => {
    const [filteredData, setFilteredData] = useState<Character[]>(data);

    const filterByStatus = (status: string) => {
        const filteredCharacters = data.filter((character) => character.status === status);
        setFilteredData(filteredCharacters);
    };

    return [filteredData, filterByStatus];
};
export default useStatusFilter;
