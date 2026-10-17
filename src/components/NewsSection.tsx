import CardNews from "../components/CardNews"
import noticias from "../data/noticias.json"

function NewsSection() {
    return (
        <section className="mt-12 py-12">
            <h2 className="mb-12 text-2xl body-title text-center">O Panelão na mídia 📰</h2>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {noticias.map((noticia) => (
                    <CardNews
                        key={noticia.url}
                        image={noticia.image}
                        alt={noticia.title}
                        title={noticia.title}
                        href={noticia.url}
                    >
                        {noticia.description}
                    </CardNews>
                ))}
            </div>
        </section>
    )
}

export default NewsSection