import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"

// para subir uma nova noticia rodar: npm run news
const ARQUIVO = "src/data/noticias.json"

const urls = [
    "https://www.curitiba.pr.gov.br/noticias/curitiba-celebra-a-marca-de-1-milhao-de-refeicoes-servidas-pelo-mesa-solidaria/67800",
    "https://www.curitiba.pr.gov.br/noticias/prefeitura-lanca-selo-para-reconhecer-quem-promove-alimentacao-com-responsabilidade-social/82500",
    "https://www.mediacaouninter.com.br/single-post/document%C3%A1rio-mostra-iniciativa-de-combate-%C3%A0-fome-na-capital-paranaense",
]

const headers = {
    "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
    "Accept-Language": "pt-BR,pt;q=0.9",
}

function pegarMeta(html, prop) {
    const tags = html.match(/<meta[^>]+>/gi) ?? []
    for (const tag of tags) {
        if (new RegExp(`property=["']${prop}["']`, "i").test(tag)) {
            return tag.match(/content=["']([^"']*)["']/i)?.[1]
        }
    }
}

// Notícias que já estavam salvas (usadas como reserva se alguma URL falhar)
let antigas = []
if (existsSync(ARQUIVO)) {
    try {
        antigas = JSON.parse(readFileSync(ARQUIVO, "utf8"))
    } catch {
        antigas = []
    }
}

const noticias = []

for (const url of urls) {
    try {
        const res = await fetch(url, { headers })
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

        const anterior = antigas.find((n) => n.url === url)
        if (anterior) {
            console.warn("  -> mantendo a versão anterior desta notícia")
            noticias.push(anterior)
        }
    }
}

if (noticias.length === 0) {
    console.warn("Nenhuma notícia disponível. Mantendo o arquivo atual.")
    process.exit(0)
}

const novo = JSON.stringify(noticias, null, 2)

if (existsSync(ARQUIVO) && readFileSync(ARQUIVO, "utf8") === novo) {
    console.log("Sem mudanças nas notícias.")
} else {
    mkdirSync("src/data", { recursive: true })
    writeFileSync(ARQUIVO, novo)
    console.log(`${noticias.length} notícia(s) salva(s) em ${ARQUIVO}`)
}