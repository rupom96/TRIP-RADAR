import { useEffect, useState } from 'react';

const useData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://grisly-mummy-07425.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setData(data))


    }, [])


    return [data];
};

export default useData;
