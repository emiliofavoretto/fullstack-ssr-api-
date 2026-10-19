import { Button } from "antd"
import Link from "next/link"

export default function DeletePlaceHolder() {
    return (
        <main>
            <h2>Pagina depende da seleção da série pelo usúario</h2>
            <p>Vá para o card Get - Read e selecione a séries desejada</p>
            <Link href="/read">
                <Button type="primary"> Ir para Get - read</Button>
            </Link>
        </main>
    )
}