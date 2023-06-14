import { useState, useEffect } from 'react';
import { Character } from '../types/types';

const useFilteredData = (data: Character[], filter: string): Character[] => {


    const [filteredData, setFilteredData] = useState<Character[]>([]);

    useEffect(() => {
        if (!filter)
            return setFilteredData(data);
        const filteredCharacters = data.filter(
            (character) => character.status.toLowerCase() === filter.toLowerCase()
        );
        setFilteredData(filteredCharacters);
    }, [data, filter]);
    return filteredData;
};

export default useFilteredData;
