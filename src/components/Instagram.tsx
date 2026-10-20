import posts from "../data/instagram.json"
import perfil from "../data/instagram-perfil.json"


function Instagram() {
    return (
        <div className="mt-12 py-12 bg-lightYellow bleed-bg items-center">
            <div className="mb-12">

                <a href={`https://www.instagram.com/${perfil.username}`} target="_blank" className="flex items-center gap-4">
                    <div>
                        <img src={perfil.photo} alt={`Foto de perfil de ${perfil.username}`} className="rounded-full w-[80px]"></img>
                    </div>
                    <div>
                        <p className="font-bold body-text">{perfil.username}</p>
                        <p className="text-[18px] font-heading">{perfil.biography}</p>
                    </div>
                </a>

                <div>

                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 font-body">
                {posts.map((post) => (
                    <a key={post.id} href={post.permalink} target="_blank" rel="noreferrer">
                        <img
                            src={post.image}
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