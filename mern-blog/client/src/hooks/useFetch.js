import { useState, useEffect } from "react";

export default function useFetch(apiCall, deps=[]){
const [data, setData]=useState([]);
const [loading, setLoading]=useState(true);
const [error, setError]=useState(null);

useEffect(()=>{
    setLoading(true);
    apiCall().then((res)=>setData(res.data))
    .catch((err)=>setError(err))
    .finally(()=>setLoading(false));
}, deps);
return {data, loading,error}
}