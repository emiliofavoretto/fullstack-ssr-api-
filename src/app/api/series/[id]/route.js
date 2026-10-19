import { message } from "antd";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(_request, { params }) {
    const { id } = await params;

    try {
        const response = await axios.get(`${process.env.API_URL_SERIES}/${id}`, {
            headers: {
                "x-api-key": process.env.API_KEY,
            },
        });

        return NextResponse.json(response.data);
    } catch (error) {
        const status = error.response?.status || 500;
        const data = error.response?.data || { error: "Erro interno do servidor" };

        return NextResponse.json(data, { status });
    }
}

export async function PUT(req, {params}) {
    const {id} = await params;
    const body = await req.json();

    try {
        const response = await axios.put(`${process.env.API_URL_SERIES}/${id}`, body, {
            headers: {'x-api-key': process.env.API_KEY},
        });

        return NextResponse.json(response.data, { status: response.status || 200 });

    } catch (error) {
        const status = error.response?.status || 500;
        const data = error.response?.data || { error: "Erro ao atualizar a série" };

        return NextResponse.json(data, { status });
    }
}

export async function DELETE(_req, {params}) {
    const {id} = await params;

    try {
        await axios.delete(`${process.env.API_URL_SERIES}/${id}`, {
            headers: {'x-api-key': process.env.API_KEY},
        });
        return NextResponse.json({message: 'Serie deletada com sucesso.'})
    } catch (error) {
        const status = error.response?.status || 500;
        const data = error.response?.data || { error: "Erro ao deletar a série" };

        return NextResponse.json(data, { status });
    }
}