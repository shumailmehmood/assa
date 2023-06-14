import { useEffect, useState } from 'react';
import { Character } from '../types/types';

interface PaginationOptions {
    initialData: Character[];
    pageSize: number;
}

interface PaginationResult<T> {
    currentPage: Character[];
    totalPages: number;
    isLoad: boolean;
    isError: boolean;
    goToPage: (pageNumber: number) => void;
}

const usePagination = <T>(options: PaginationOptions): PaginationResult<T> => {
    const { initialData, pageSize } = options;
    const [data, setData] = useState(initialData);
    const [currentPage, setCurrentPage] = useState<Character[]>([]);
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
    const totalPages = Math.ceil(initialData.length / options.pageSize);


    const goToPage = (pageNumber: number) => {

        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPageNumber(pageNumber);
        }
    };

    useEffect(() => {
        setIsLoad(true);
        setIsError(false);
        const startIndex = (currentPageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const pageData: any = initialData.slice(startIndex, endIndex);

        setCurrentPage(pageData);
        setIsLoad(false);
    }, [currentPageNumber, initialData, pageSize]);
    return {
        currentPage,
        totalPages,
        isLoad,
        isError,
        goToPage,
    };
};

export default usePagination;
