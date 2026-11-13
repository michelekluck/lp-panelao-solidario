import posts from "../data/instagram.json"
import perfil from "../data/instagram-perfil.json"

// Junta o "base" do Vite (/lp-panelao-solidario/) aos caminhos locais das imagens.
// URLs completas (https://...) passam direto.
const comBase = (caminho: string) =>
    /^https?:\/\//.test(caminho)
        ? caminho
        : `${import.meta.env.BASE_URL}${caminho.replace(/^\//, "")}`

function Instagram() {
    return (
        <div className="py-12 md:py-20 bg-lightYellow bleed-bg items-center">
            <div className="md:mb-12 mb-8">

                <a href={`https://www.instagram.com/${perfil.username}`} target="_blank" className="flex items-center gap-4">
                    <div>
                        <img src={comBase(perfil.photo)} alt={`Foto de perfil de ${perfil.username}`} className="rounded-full md:w-[80px] w-[60px]"></img>
                    </div>
                    <div>
                        <p className="font-bold font-body text-[20px]">{perfil.username}</p>
                        <p className="text-[18px] font-heading hidden md:block">{perfil.biography}</p>
                    </div>
                </a>

                <p className="md:text-[18px] font-heading md:hidden mt-4">{perfil.biography}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 xl:grid-cols-3 font-body">
                {posts.map((post) => (
                    <a key={post.id} href={post.permalink} target="_blank" rel="noreferrer">
                        <img
                            src={comBase(post.image)}
                            alt={post.caption.slice(0, 100) || "Post do Instagram"}
                            className="aspect-square object-cover rounded-t-2xl"
                        />
                        <div className="mb-12 bg-white p-4">
                            <p className="line-clamp-2">{post.caption}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Instagram;