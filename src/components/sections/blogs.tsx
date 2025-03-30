import React from 'react'

function Articles() {
    const articles = [
        {
            title: "Art for Memories: Preserving photos of Genocide victims",
            caption: "A group of artists spearheaded by King Ngabo, launched an initiative, Art for Memories in 2023",
            date: "Monday, 13th November 2023",
            author: "The News Times",
            image: "/images/hero.jpg",
            tag: "King Ngabo Museum",
            link: "https://www.newtimes.co.rw/article/15841/news/kwibuka/art-for-memories-preserving-photos-of-genocide-victims"
        },
        {
            title: "Young Rwandan illustrators keep the memory of genocide victims alive",
            caption: "On sketch pads or computer tablets, a group of young Rwandan artists painstakingly recreate portraits of victims of the 1994 genocide for their loved ones.",
            date: "05 Apr 2024",
            author: "news24",
            image: "/images/hero.jpg",
            tag: "King Ngabo Museum",
            link: "https://www.news24.com/life/arts-and-entertainment/arts/honouring-memories-through-art-young-rwandan-illustrators-keep-the-memory-of-genocide-victims-alive-20240405"
        }
    ];

    return (
        <section className="py-10 md:py-12 md:px-16 bg-neutral-50">
            <div className="container mx-auto px-4">
                <div className="mb-12 md:mb-24 text-center max-w-6xl mx-auto">
                    <h1 className="mb-10 font-semibold text-4xl md:text-6xl font-heading text-slate-700 capitalize">
                        <span>Articles About Our Mission <br />and </span>
                        <span className="bg-[#429cce] rounded-lg px-4 mt-1 inline-block">Shared Stories.</span>
                    </h1>
                    <p className="font-semibold text-2xl text-neutral-600 tracking-tight">Discover how others are documenting and supporting our journey.</p>
                </div>

                <div className="flex flex-wrap -m-3">
                    {articles.map((article, index) => (
                        <div className="w-full md:w-1/2 p-3" key={index}>
                            <div className="h-full bg-white rounded-3xl px-6 md:px-12 py-12">
                                <span className="block text-neutral-600 text-xl font-semibold mb-6 tracking-tight">{article.author}</span>
                                <a className="block text-neutral-800 text-3xl md:text-4xl font-semibold hover:underline mb-3 max-w-sm md:max-w-lg tracking-tight" href={article.link}>{article.title}</a>
                                <p className="text-neutral-600 text-lg font-medium mb-8 max-w-lg tracking-tight">{article.caption}</p>

                                <div className="flex flex-wrap gap-6 mb-5">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-green-100"></div>
                                        <p className="text-neutral-600 font-medium tracking-tight capitalize">{article.tag}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <p className="text-neutral-600 text-xl font-semibold tracking-tight">{article.date}</p>
                                    <a className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-100 text-slate-900 transition duration-200" href={article.link}>Read more</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Articles;