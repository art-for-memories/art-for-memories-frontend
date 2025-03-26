import Image from 'next/image'
import React from 'react'

function Download() {
    return (<>
        <section className="bg-[#439ace] 2xl:py-24 2xl:bg-white">
            <div className="px-4 mx-auto overflow-hidden bg-[#439ace] max-w-7xl sm:px-6 lg:px-16">
                
                <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
                    <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                        <div>
                            <h2 className="text-3xl font-bold font-boldonse text-white sm:text-4xl lg:text-4xl lg:leading-relaxed capitalize">Use mobile app for better performance</h2>
                            <p className="mt-4 text-base text-gray-50 leading-6">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                            <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
                                <a href="#" title="" className="flex" role="button">
                                    <Image width={500} height={500} className="w-auto h-14 rounded-xl" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg" alt="" />
                                </a>

                                <a href="#" title="" className="flex" role="button">
                                    <Image width={500} height={500} className="w-auto h-14 rounded-xl" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="relative px-12">
                            <svg className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 -mb-72 lg:-mb-96 text-[#e6bf5d] w-[600px] h-[600px] sm:w-[800px] sm:h-[800px]" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                            </svg>

                            <Image width={800} height={800} className="relative w-[800rem] mx-auto -mb-72 lg:-mb-80" src="/images/mobile-2.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </section>

    </>)
}

export default Download