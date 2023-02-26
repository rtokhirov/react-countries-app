import { useEffect, useState } from "react"

const useFetch =(API)=>{

    const [data, setData]= useState(null)
    const [loading, setLoading]= useState(true)
    const [error, setError]=useState(null)

    useEffect(()=>{

        const getData= async ()=>{

            try {
                const response= await fetch(API);
                if (!response.ok) {
                    throw new Error(`This is an HTTP error: The status is ${response.status}`);
                }
                let actualData = await response.json();
                setData(actualData);
                setError(null);

            } catch (error) {
                setError(error.message);
                setData(null);

            } finally {
                setLoading(false);
            } 
        }
        getData()

    },[API])

    return {data,loading,error}
}

export default useFetch