'use client'

import { Skeleton } from "antd";
import axios from "axios";
import Link from "next/link";
import {useState, useEffect} from  'react'
import toast from "react-hot-toast";

export default function ReadPage(){
    const [series, setSeries] = useState([]);
    const[loading, setLoading]= useState(true);

useEffect(() => {
    async function buscarSeries() {
        try {
            const resp = await axios.get(`${process.env.NEXT_PUBLIC_URL_SERIES}?limit=50`, {
                headers: {
                    "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
                },
            });
            setSeries(resp.data.data);
            toast.success('Séries carregadas!', { id: 'read' });
        } catch (erro) {
            console.error("Erro ao buscar séries:", erro);
            toast.error('Erro ao buscar as séries', { id: 'read' });
        } finally {
            setLoading(false);
        }
    }

    buscarSeries();
}, []);
    return (
        <main>
            <h2>READ</h2>
            <p>Busca series via /api</p>
            {loading?(
                <div className='skeleton'><Skeleton active/></div>
            ):(
                <ul>{series.map((item) =>(
                    <li key={item.id}>{item.title}</li>
                ))}</ul>
            )}
        </main>
    )
}