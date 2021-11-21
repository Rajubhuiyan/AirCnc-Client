import { useState } from 'react';

const useFirebase = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [searchData, setSearchData] = useState({});
    return {
        isLoading,
        setIsLoading,
        searchData,
        setSearchData
    }
};

export default useFirebase;