import { useState, useEffect } from "react";

export default function useFetch(apiCall, ){
const [data, setData]=useState([]);
const [loading, setLoading]=useState(true);
const [error, setError]=useState(null);

useEffect(()=>{
    setLoading(true);
    apiCall().then((res)=>{setData(res.data),
        console.log('res:',res);

    })
    .catch((err)=>setError(err))
    .finally(()=>setLoading(false));
}, []);
console.log('Data:',data);

return {data, loading,error}
}