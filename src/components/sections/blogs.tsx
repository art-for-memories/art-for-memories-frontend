import Image from 'next/image';
import React from 'react'

function Articles() {
    const articles = [
        {
            title: "Inside King Ngabo’s digital platform for preserving Genocide stories",
            caption: "“Art for Memories”, a digital platform dedicated to preserving the memories of the 1994 Genocide against the Tutsi through art, was officially launched in Kigali on Thursday, May 29.",
            date: "30 May 2025",
            author: "The New Times",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNTTFM2boViSeNYrVDtgHjMTxPx_DZqEtVcw&s",
            tag: "Art For Memories",
            link: "https://www.newtimes.co.rw/article/26852/entertainment/art/inside-king-ngabos-digital-platform-for-preserving-genocide-stories"
        },
        {
            title: "Young Rwandan artists keep the memory of genocide victims alive",
            caption: "On sketch pads or computer tablets, a group of young Rwandan artists painstakingly recreate portraits of victims of the 1994 genocide for their loved ones.",
            date: "04 Apr 2024",
            author: "France 24",
            image: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/24/Logos_FRANCE24_RVB_2013.svg/langfr-225px-Logos_FRANCE24_RVB_2013.svg.png",
            tag: "Art For Memories",
            link: "https://www.france24.com/en/live-news/20240403-young-rwandan-artists-keep-the-memory-of-genocide-victims-alive?utm_slink=f24.my%2FAEaE"
        },
        {
            title: "Art for Memories: Preserving photos of Genocide victims",
            caption: "A group of artists spearheaded by King Ngabo, launched an initiative, Art for Memories in 2023",
            date: "Monday, 13th November 2023",
            author: "The News Times",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNTTFM2boViSeNYrVDtgHjMTxPx_DZqEtVcw&s",
            tag: "King Ngabo Museum",
            link: "https://www.newtimes.co.rw/article/15841/news/kwibuka/art-for-memories-preserving-photos-of-genocide-victims"
        },
        {
            title: "Young Rwandan illustrators keep the memory of genocide victims alive",
            caption: "On sketch pads or computer tablets, a group of young Rwandan artists painstakingly recreate portraits of victims of the 1994 genocide for their loved ones.",
            date: "05 Apr 2024",
            author: "news24",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2H97Egx3WfuxnACbiTdxynFqd4STSbyOnAg&s",
            tag: "King Ngabo Museum",
            link: "https://www.news24.com/life/arts-and-entertainment/arts/honouring-memories-through-art-young-rwandan-illustrators-keep-the-memory-of-genocide-victims-alive-20240405"
        },
        {
            title: "le dessin pour perpétuer la mémoire des victimes du génocide",
            caption: "Elle a survécu aux massacres. Pas ses parents, ni sa grande soeur.",
            date: "04 Apr 2024",
            author: "Courrier International",
            image: "https://pbs.twimg.com/profile_images/1630603762359312384/qlV17s06_400x400.jpg",
            tag: "Art For Memories",
            link: "https://www.courrierinternational.com/depeche/rwanda-le-dessin-pour-perpetuer-la-memoire-des-victimes-du-genocide.afp.com.20240403.doc.34nd4gj.xml"
        }
    ];

    return (
        <section className="py-10 md:py-12 md:px-10 bg-neutral-50">

            <div className="container mx-auto">
                <div className="mb-12 md:mb-24 text-center max-w-6xl mx-auto px-4">
                    <h1 className="mb-10 font-semibold text-4xl md:text-6xl font-heading text-slate-700 capitalize">
                        <span>Articles About Our Mission <br className='hidden md:block' />and </span>
                        <span className="bg-[#429cce] rounded-lg px-4 mt-1 inline-block">Shared Stories.</span>
                    </h1>
                    <p className="font-semibold text-2xl text-neutral-600 tracking-tight">Discover how others are documenting and supporting our journey.</p>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-2">
                    {articles.map((article, index) => (
                        <div className="w-full p-3" key={index}>
                            <div className="h-full bg-white rounded-3xl px-6 md:px-12 py-12 border border-gray-2">
                                <div className='mb-5'>
                                    <div className='w-20 h-20 rounded-lg mb-3 border border-gray-200'><Image width={500} height={500} src={article.image} alt={article.title} className='w-full h-full rounded-lg' /></div>
                                    <span className="block text-neutral-600 text-xl font-semibold mb-6 tracking-tight capitalize">{article.author}</span>
                                </div>

                                <a className="block text-neutral-800 text-3xl md:text-4xl font-semibold hover:underline mb-3 max-w-sm md:max-w-lg tracking-tight" href={article.link}>{article.title}</a>
                                <p className="text-neutral-600 text-lg font-medium mb-8 max-w-lg tracking-tight line-clamp-2">{article.caption}</p>

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