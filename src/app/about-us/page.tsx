import Layout from '@/components/Layout'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

function AboutUs() {
    const galleryImages = [
        '/images/gallery/image-1.PNG',
        '/images/gallery/image-2.PNG',
        '/images/gallery/image-3.PNG',
        '/images/gallery/image-4.PNG',
        '/images/gallery/image-5.PNG',
        '/images/gallery/image-6.PNG',
    ];

    return (<>
        <Layout>
            <div className="overflow-x-hidden">
                <div className='bg-neutral-900 py-5'>
                    <Navbar />
                </div>

                <section className="py-10 bg-neutral-900 lg:py-0 relative">
                    <div className="px-4 mx-auto sm:px-6 lg:px-20 max-w-7xl pb-10 bg-neutral-900">
                        <div className="grid items-stretch grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 xl:gap-x-24">
                            <div className="flex items-center justify-start lg:order-1 sm:py-16 lg:py-10 xl:py-28">
                                <div>
                                    <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">About us</p>
                                    <h2 className="mt-8 text-3xl font-bold font-boldonse leading-tight text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: '4rem' }}>
                                        All About Preserving Memories
                                    </h2>
                                    <p className="text-xl leading-relaxed text-gray-200 mt-9">
                                        Once, during the 29th Commemoration of the 1994 Genocide Against the Tutsi, King NGABO had a conversation with a Genocide Survivor.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className='text-xl leading-relaxed text-gray-200'>
                            The survivor said:
                            “Young brother, do you know that we don’t have pictures of our parents?”
                            King NGABO asked, “What happened?”
                            The survivor replied, “When we moved to a new house in 2005, the last picture we had was lost.”
                            King NGABO then asked, “How do you tell your children about their grandparents?”

                            With a soft laugh, the survivor said, “I tell them that every old man is their grandfather and every old woman is their grandmother.”

                            That moment deeply touched King NGABO and sparked an idea in his mind.

                            During a studio session, King NGABO was working alongside students from Nyundo School of Arts, who often spent their holidays at his studio. He came across a post where someone shared the only existing picture of their grandfather, though it was unclear. Seeing this, the studio team worked on restoring the image and returned it to the family.

                            This experience inspired King NGABO to take action.

                            He decided to create a platform dedicated to preserving the damaged images of the victims of the 1994 Genocide Against the Tutsi.

                            From this vision, “ART FOR MEMORIES” was born, a project dedicated to preserving the damaged images of the victims, as well as collecting, archiving, and illustrating the stories of Genocide Survivors through art.
                        </p>
                    </div>
                </section>

                <section className="bg-neutral-900 lg:py-0 relative">
                    <div className='px-4 mx-auto sm:px-6 lg:px-20 max-w-7xl pb-32 bg-neutral-900'>
                        <div className="flex items-center justify-start lg:order-1 sm:py-16 lg:py-10 xl:py-28">
                            <div>
                                <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Gallery</p>
                                <h2 className="mt-3 text-3xl font-bold font-boldonse leading-tight text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: '4rem' }}>
                                    Our Gallery
                                </h2>
                            </div>
                        </div>

                        <div className="h-full lg:order-2">
                            <div className="relative h-full lg:h-auto">
                                <div className="relative grid grid-cols-3 gap-x-2 gap-y-4">
                                    {galleryImages.map((image, index) => (
                                        <Image key={index} width={300} height={300} className="rounded-lg object-cover h-[300px]" src={image} alt={`Art for memory Gallery`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    </>)
}

export default AboutUs