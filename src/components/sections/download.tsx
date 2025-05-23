import Image from 'next/image'
import React from 'react'
import MobileFrame from './mobile-frame'

function Download() {
    return (<>
        <section className="bg-[#439ace] 2xl:py-24 2xl:bg-white relative">
            <div className='w-full h-10 bg-white rounded-br-3xl rounded-bl-3xl absolute top-0 right-0 left-0'></div>

            <div className="px-4 mx-auto overflow-hidden bg-[#439ace] max-w-7xl sm:px-6 lg:px-16">
                <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24"></div>

                <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                    <div className='pb-20 z-10'>
                        <span className="mb-10 font-semibold text-sm font-heading text-slate-900 capitalize bg-white rounded-full px-4 py-2 inline-block">
                            Help us to Test the app for enhanced Experience
                        </span>

                        <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl lg:leading-tight capitalize">
                            Download the App for Enhanced Stories and Memories
                        </h2>

                        <p className="mt-4 text-sm text-gray-50 sm:text-base leading-6">
                            Experience cleared stories and image sharing with our mobile app. Enhanced features and a user-friendly interface designed for your convenience.
                        </p>

                        <p className="mt-2 text-sm text-yellow-300 sm:text-base leading-6">
                            Note: The app is currently in the testing phase. <br /> We appreciate your feedback to improve the experience.
                        </p>

                        <div className="flex flex-col items-stretch mt-8 space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4 lg:mt-12">
                            <a
                                href="#"
                                title="Open Testing"
                                className="flex-1 flex justify-center"
                                role="button"
                            >
                                <Image
                                    width={500}
                                    height={500}
                                    className="w-auto h-12 sm:h-14 rounded-xl max-w-[180px]"
                                    src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg"
                                    alt="App Store (TestFlight)"
                                />
                            </a>

                            <a
                                href="https://play.google.com/store/apps/details?id=com.art_for_memories.mobile"
                                title="Coming Soon"
                                className="flex-1 flex justify-center"
                                role="button"
                            >
                                <Image
                                    width={500}
                                    height={500}
                                    className="w-auto h-12 sm:h-14 rounded-xl max-w-[180px]"
                                    src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg"
                                    alt="Google Play Store (Open Testing)"
                                />
                            </a>

                            <a
                                href="/app-release.apk"
                                title="Download APK"
                                className="flex-1 flex items-center justify-center px-2 py-1 text-sm font-semibold text-white bg-black rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 min-w-[180px]"
                                role="button"
                            >
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M11 18v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h2ZM15 18v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h2ZM17 11v5c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M5 11v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1ZM21 11v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 18h-2" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M9.6 6.998h4.8c.88 0 1.6-.72 1.6-1.6 0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .88.72 1.6 1.6 1.6Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <div className="truncate ml-2">
                                    <div className="text-[10px] text-slate-400">Download</div>
                                    <div className="text-lg text-white">APK File</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="relative px-6 sm:px-12 hidden lg:block">
                        <svg
                            className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 -mb-72 lg:-mb-96 text-[#e6bf5d] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px]"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                        >
                            <circle cx="4" cy="4" r="3" />
                        </svg>

                        <div className="absolute inset-x-0 bottom-0 md:left-1/2 -translate-x-1/2 -mb-72 lg:-mb-96">
                            <MobileFrame title="" image="/images/screen1.png" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default Download