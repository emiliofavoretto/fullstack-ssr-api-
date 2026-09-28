import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  try {
    const resp = await axios.get(process.env.API_URL_SERIES, {
      params: Object.fromEntries(searchParams),
      headers: { 'x-api-key': process.env.API_KEY },
    });
    return NextResponse.json(resp.data);
  } catch (error) {
    const status = error.response?.status || 500;
    const data = error.response?.data || { error: 'Erro ao buscar as séries' };

    return NextResponse.json(data, { status });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const response = await axios.post(process.env.API_URL_SERIES, body, {
      headers: { 'x-api-key': process.env.API_KEY },
    });

    return NextResponse.json(response.data, { status: 201 });
  } catch (error) {
    // Imprime no terminal do VS Code a resposta detalhada do erro
    console.error('Erro na API externa (POST):', error.response?.data || error.message);

    const status = error.response?.status || 500;
    const data = error.response?.data || { error: 'Erro ao criar a série' };

    return NextResponse.json(data, { status });
  }
}