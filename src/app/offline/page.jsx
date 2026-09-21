'use client';

import { useState, useEffect } from 'react';

export default function OfflinePage() {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        const stored = sessionStorage.getItem('series');
        setSeries(stored ? JSON.parse(stored) : []);
    }, []);
    return (
        <main>
            <h2>GET - offline</h2>
            <p>SessionStorage e nunca chama(fetch/axios) a API.</p>
            <ul>
                {series.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </main>
    )
}