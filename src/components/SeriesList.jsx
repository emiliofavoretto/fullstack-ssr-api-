'use client';

import { useEffect } from "react";
import toast from "react-hot-toast";


export default function SeriesList({series}) {
    useEffect(() => {
        sessionStorage.setItem('series', JSON.stringify(series))
        toast.success('series buscadas via SSR e salva no sessionStorage', {id: 'ssr'})
    }, [series]);
    return(
        <ul>
            {series.map((Item) =>(
                <li key={Item.id}>{Item.title}</li>
            ))}
        </ul>
    )
}