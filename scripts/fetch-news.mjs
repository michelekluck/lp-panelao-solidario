import { mkdirSync, writeFileSync } from "node:fs"

// para subir uma nova noticia rodar: npm run news
const urls = [
    "https://www.curitiba.pr.gov.br/noticias/curitiba-celebra-a-marca-de-1-milhao-de-refeicoes-servidas-pelo-mesa-solidaria/67800",
    "https://www.curitiba.pr.gov.br/noticias/prefeitura-lanca-selo-para-reconhecer-quem-promove-alimentacao-com-responsabilidade-social/82500",
    "https://www.mediacaouninter.com.br/single-post/document%C3%A1rio-mostra-iniciativa-de-combate-%C3%A0-fome-na-capital-paranaense"

]

function pegarMeta(html, prop) {
    const tags = html.match(/<meta[^>]+>/gi) ?? []
    for (const tag of tags) {
        if (new RegExp(`property=["']${prop}["']`, "i").test(tag)) {
            return tag.match(/content=["']([^"']*)["']/i)?.[1]
        }
    }
}

const noticias = []

for (const url of urls) {
    try {
        const res = await fetch(url)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const html = await res.text()

        noticias.push({
            url,
            title: pegarMeta(html, "og:title") ?? "Sem título",
            description: pegarMeta(html, "og:description") ?? "",
            image: pegarMeta(html, "og:image") ?? "",
        })
    } catch (erro) {
        console.warn(`Falhou em ${url}:`, erro.message)
    }
}

mkdirSync("src/data", { recursive: true })
writeFileSync("src/data/noticias.json", JSON.stringify(noticias, null, 2))
console.log(`${noticias.length} notícia(s) salva(s) em src/data/noticias.json`)