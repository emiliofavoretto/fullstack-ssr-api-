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