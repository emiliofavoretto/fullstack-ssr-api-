'use client'

import toast from 'react-hot-toast'
import { Skeleton } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Item from 'antd/es/list/Item'

export default function ReadPage() {

    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function buscarSeries() {
            try {
                const resp = await axios.get('/api/series?limit=50')
                setSeries(resp.data.data);
                toast.success('series carregadas', { id: 'read' })
            } catch (error) {
                toast.error('erro ao buscar as series')
            } finally {
                setLoading(false);
            }
        }

        buscarSeries();
    }, []);

    return (
        <main>
            <h2>read</h2>
            <p>busca series via api/series  (nossa API route.js), que fala com a Codeverse direto do servidor.</p>
            {loading ? (
                <div className='skeleton'>
                    <Skeleton active />
                </div>
            ) : (
                <ul>{series.map((Item) => (
                    <li key={Item.id}>{Item.title}</li>
                ))}</ul>
            )}
        </main>
    )
}