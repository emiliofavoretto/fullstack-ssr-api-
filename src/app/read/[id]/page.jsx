'use client';

import { Card, Skeleton } from "antd";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ReadByIdPage() {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function buscarSerie() {
      try {
        const response = await axios.get(`/api/series/${id}`);
        setSerie(response.data);
      } catch (error) {
        toast.error('Série não encontrada', { id: 'read-id' });
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    buscarSerie();
  }, [id]);

  return (
    <main>
      <h2>Get By Id - read</h2>

      {loading ? (
        <div className="skeleton">
          <Skeleton active />
        </div>
      ) : serie ? (
        <Card title={serie.title}>
          <p><strong>Gênero:</strong> {serie.genero}</p>
          <p><strong>Plataforma:</strong> {serie.plataforma}</p>
          <p><strong>Temporadas:</strong> {serie.numero_temporadas}</p>
          <p><strong>Ano de lançamento:</strong> {serie.ano_lancamento}</p>
        </Card>
      ) : (
        <p>Série não encontrada.</p>
      )}
    </main>
  );
}