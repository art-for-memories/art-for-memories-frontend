/* eslint-disable react/no-unescaped-entities */
import Layout from '@/components/Layout'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

function AboutUs() {
    return (<>
        <Layout>
            <div className="overflow-x-hidden">
                <Navbar />

                <section className="py-10 bg-neutral-900 lg:py-0 relative">
                    <div className="px-4 mx-auto sm:px-6 lg:px-20 max-w-7xl pb-32 bg-neutral-900">
                        <div className="grid items-stretch grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 xl:gap-x-24">
                            <div className="h-full pr-12 lg:order-2">
                                <div className="relative h-full lg:h-auto">
                                    <div className="absolute w-full h-full -mb-12 overflow-hidden bg-gradient-to-r from-[#e4888a] to-[#439ace] top-16 left-12 xl:left-16 lg:top-0 lg:scale-y-105 lg:origin-top">
                                        <Image width={500} height={500} className="object-cover object-right w-full h-full scale-150" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/lines.svg" alt="" />
                                    </div>
                                    <div className="relative lg:top-32">
                                        <Image width={500} height={500} className="" src="/images/about.png" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-start lg:order-1 sm:py-16 lg:py-16 xl:py-32">
                                <div>
                                    <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">About us</p>
                                    <h2 className="mt-8 text-3xl font-bold font-boldonse leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[4rem]">Dedicated To Preserving Memories</h2>
                                    <p className="text-xl leading-relaxed text-gray-200 mt-9">
                                        During the 29th commemoration of the 1994 Genocide Against the Tutsi, King NGABO engaged in a poignant conversation with a genocide survivor. The survivor expressed a deeply personal loss, revealing, "Young brother, do you know that we don’t have pictures of our parents?"
                                    </p>
                                    <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button"> Explore more </a>
                                </div>
                            </div>
                        </div>

                        <p className='text-xl leading-relaxed text-gray-200'>
                            When King NGABO inquired about the circumstances, the survivor explained that the last photo they possessed was misplaced during a move in 2005. Curious about family legacy, King NGABO asked how the survivor recounted stories of their grandparents to their children. With a gentle laugh, the survivor responded, "I tell them that every old man is their grandfather and every old woman is their grandmother."
                            This exchange profoundly affected King NGABO and ignited a spark of inspiration. While collaborating with students from Nyundo School of Arts at his studio—a place where students frequently spent their holidays—King NGABO encountered a post about the only existing, albeit unclear, picture of someone's grandfather. Motivated by this discovery, the studio team restored the image and returned it to the appreciative family.
                            This incident propelled King NGABO to take a significant step forward. He resolved to establish a platform focused on the restoration and preservation of images damaged during the 1994 Genocide Against the Tutsi. This initiative led to the creation of "ART FOR MEMORIES," a project committed to restoring these important photographs and compiling, archiving, and artistically representing the stories of genocide survivors.
                        </p>
                    </div>
                </section>
            </div>
        </Layout>
    </>)
}

export default AboutUs