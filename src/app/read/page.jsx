import SeriesList from "@components/SeriesListLinkSSR"
import { Skeleton } from "antd"
import { Suspense } from "react"


export default function ReadPage () {
    
    return(
        <main>
            <h2>GET - Read</h2>
            <p>sevidor chama a API com a API-key privada; o skeeton aparece até que as series cheguem usendo tags nativas do React (supense)</p>
            <p>abra o Devtools - NetWork: a API não é visível</p>
            <Suspense 
            fallback={
                <div className="skeleton">
                    <Skeleton active/>
                </div>
            } >
                <SeriesList />
            </Suspense>
        </main>
    )
}