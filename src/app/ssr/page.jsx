import axios from "axios";

export default async function GetPage() {

    let series;
    try {
        const resp = await axios.get(
          `${process.env.API_URL_SERIES}?limit=50`,
          {
            headers: {
              "x-api-key": process.env.API_KEY,
            },
          }
        );

        series = resp.data.data
    } catch (error) {
        console.error(error)
    }

    return (
        <main>
            <h2>Busca feita pelo servidor com api-key privado</h2>
            <p>DevTools - network : essa chamada nem aparec lá, pois ela acontece no servidor.</p>
            <p>Axios.get deireto na API e salva SessionStorage, mas rodando no servidor, a api-key nunca chega no navegador</p>
            <ul></ul>
        </main>
    )
}