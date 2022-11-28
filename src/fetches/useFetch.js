import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url, isCovidData) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchData(ourRequest) {
        try {
            let res = await axios.get(url, {
                cancelToken: ourRequest.token,
            });
            if (isCovidData) {
                res.data = res.data
                    .map((item) => {
                        item.Date = moment(item.Date).format("DD/MM/YYY");
                        return item;
                    })
                    .reverse();
                setData(res && res.data ? res.data : []);
            } else {
                setData(res && res.data ? res.data : []);
            }
            setIsLoading(false);
        } catch (e) {
            if (axios.isCancel(e)) {
                console.log("Request canceled: ", e.message);
            } else {
                setIsLoading(true);
            }
        }
    }

    useEffect(() => {
        const ourRequest = axios.CancelToken.source();
        fetchData(ourRequest);
        return () => {
            ourRequest.cancel("Request missed");
        };
    }, [url]);
    return {
        data,
        isLoading,
    };
};

export default useFetch;
