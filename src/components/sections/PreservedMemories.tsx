/* eslint-disable react/no-unescaped-entities */
import React from 'react'

function PreservedMemories() {
    return (
        <section className="py-12 md:py-24 xl:pb-64 md:px-16 bg-neutral-900">
            <div className="container mx-auto px-4">
                <div className="mb-12 md:mb-20 max-w-5xl">
                    <h1 className="relative text-3xl md:text-5xl text-white font-semibold font-boldonse">
                        <span className="mr-3 leading-[4rem]">Resilience, Legacy,</span>
                        <span className="relative inline-block">
                            <span className="relative z-10 leading-[5rem]">and Power of Memory</span>
                            <span className="absolute -bottom-5 left-0 h-2.5 w-full bg-green-100 rounded-full"></span>
                        </span>
                    </h1>
                </div>

                <h3 className="mb-8 text-4xl text-white font-semibold tracking-tight font-heading">Discuss the social, cultural, and emotional benefits.</h3>

                <div className="flex flex-wrap -m-3">
                    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                        <div className="flex flex-col h-full justify-center p-10 bg-white rounded-3xl">
                            <div className="flex flex-wrap items-center -m-3 mb-5">
                                <div className="w-auto p-3">
                                    <div className="flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full"><img src="template-assets/images/features/sticker.svg" alt="" /></div>
                                </div>
                                <div className="flex-1 p-3">
                                    <h4 className="text-4xl font-medium tracking-tight font-heading max-w-xs text-slate-800">Past Memories</h4>
                                </div>
                            </div>
                            <p className="text-neutral-600 font-medium tracking-tight max-w-sm">Preserve cherished moments and stories from the past, ensuring they remain a source of inspiration and connection for future generations.</p>
                        </div>
                    </div>
                    <div className="relative xl:top-20 w-full md:w-1/2 xl:w-1/3 p-3">
                        <div className="mb-6 p-10 bg-white rounded-3xl">
                            <div className="flex flex-wrap items-center -m-3 mb-5">
                                <div className="w-auto p-3">
                                    <div className="flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full"><img src="template-assets/images/features/sticker.svg" alt="" /></div>
                                </div>
                                <div className="flex-1 p-3">
                                    <h4 className="text-4xl font-medium tracking-tight font-heading max-w-xs text-slate-800">Imagery Arts</h4>
                                </div>
                            </div>
                            <p className="text-neutral-600 font-medium tracking-tight max-w-sm">Celebrate the beauty of visual storytelling, capturing moments that evoke emotions and preserve memories through artistic imagery.</p>
                        </div>
                        <div className="p-10 bg-white rounded-3xl">
                            <div className="flex flex-wrap items-center -m-3 mb-5">
                                <div className="w-auto p-3">
                                    <div className="flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full"><img src="template-assets/images/features/sticker.svg" alt="" /></div>
                                </div>
                                <div className="flex-1 p-3">
                                    <h4 className="text-4xl font-medium tracking-tight font-heading max-w-xs text-slate-800">Story that Inspires</h4>
                                </div>
                            </div>
                            <p className="text-neutral-600 font-medium tracking-tight max-w-sm">Share narratives that resonate deeply, inspiring connections and preserving the essence of meaningful experiences.</p>
                        </div>
                    </div>
                    <div className="relative xl:top-40 w-full xl:w-1/3 p-3">
                        <div className="flex flex-col h-full justify-center p-10 bg-white rounded-3xl">
                            <div className="flex flex-wrap items-center -m-3 mb-5">
                                <div className="w-auto p-3">
                                    <div className="flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full"><img src="template-assets/images/features/sticker.svg" alt="" /></div>
                                </div>
                                <div className="flex-1 p-3">
                                    <h4 className="text-4xl font-medium tracking-tight font-heading max-w-xs text-slate-800">Restoring the Past</h4>
                                </div>
                            </div>
                            <p className="text-neutral-600 font-medium tracking-tight max-w-sm">Rediscover and revive the essence of bygone eras, ensuring that the stories and moments of the past continue to inspire and connect us in the present.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PreservedMemories