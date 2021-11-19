import React, { useState } from 'react';

const useFirebase = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [searchData, setSearchData] = useState({});
    return {
        isLoading,
        searchData,
        setSearchData
    }
};

export default useFirebase;