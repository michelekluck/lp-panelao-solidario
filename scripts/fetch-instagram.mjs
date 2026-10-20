import { mkdirSync, writeFileSync } from "node:fs"

const token = process.env.INSTAGRAM_TOKEN

// Sem token ou com erro: sai sem mexer nos arquivos, mantendo os posts antigos
if (!token) {
    console.warn("INSTAGRAM_TOKEN não definido. Mantendo dados atuais.")
    process.exit(0)
}

const fields = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp"
const res = await fetch(
    `https://graph.instagram.com/me/media?fields=${fields}&limit=6&access_token=${token}`
)

if (!res.ok) {
    console.warn(`Instagram respondeu HTTP ${res.status}:`, await res.text())
    process.exit(0)
}

const { data } = await res.json()

mkdirSync("public/instagram", { recursive: true })
mkdirSync("src/data", { recursive: true })

const posts = []

for (const post of data) {
    // Vídeos não têm media_url de imagem, então usamos a miniatura
    const origem = post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url
    if (!origem) continue

    const img = await fetch(origem)
    if (!img.ok) continue

    writeFileSync(`public/instagram/${post.id}.jpg`, Buffer.from(await img.arrayBuffer()))

    posts.push({
        id: post.id,
        caption: post.caption ?? "",
        permalink: post.permalink,
        timestamp: post.timestamp,
        image: `/instagram/${post.id}.jpg`,
    })
}

// Perfil: foto, nome de usuário e número de seguidores
const resPerfil = await fetch(
    `https://graph.instagram.com/me?fields=username,name,biography,profile_picture_url,followers_count&access_token=${token}`
)

if (resPerfil.ok) {
    const perfil = await resPerfil.json()
    let foto = ""

    if (perfil.profile_picture_url) {
        const img = await fetch(perfil.profile_picture_url)
        if (img.ok) {
            writeFileSync("public/instagram/perfil.jpg", Buffer.from(await img.arrayBuffer()))
            foto = "/instagram/perfil.jpg"
        }
    }

    writeFileSync(
        "src/data/instagram-perfil.json",
        JSON.stringify(
            {
                username: perfil.username,
                name: perfil.name ?? "",
                biography: perfil.biography ?? "",
                followers: perfil.followers_count ?? 0,
                photo: foto,
            },
            null,
            2
        )
    )
}

writeFileSync("src/data/instagram.json", JSON.stringify(posts, null, 2))
console.log(`${posts.length} post(s) salvo(s).`)