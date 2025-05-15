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
                            Note: The app is currently in the testing phase. We appreciate your feedback to improve the experience.
                        </p>

                        <div className="flex flex-col md:items-center mt-8 space-y-4 sm:flex-row sm:space-y-0 lg:mt-12 sm:space-x-4 space-x-4">
                            <a href="#" title="Coming Soon" className="flex opacity-50 cursor-not-allowed" role="button">
                                <Image
                                    width={500}
                                    height={500}
                                    className="w-auto h-12 sm:h-14 rounded-xl"
                                    src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg"
                                    alt="App Store (Coming Soon)"
                                />
                            </a>

                            <a href="#" title="Coming Soon" className="flex opacity-50 cursor-not-allowed" role="button">
                                <Image
                                    width={500}
                                    height={500}
                                    className="w-auto h-12 sm:h-14 rounded-xl"
                                    src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg"
                                    alt="Google Play Store (Coming Soon)"
                                />
                            </a>

                            <a
                                href="/path-to-your-apk-file.apk"
                                title="Download APK"
                                className="flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-slate-900 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                role="button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 mr-2"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M17.71 7.29a1 1 0 00-1.42 0l-1.3 1.3a7.07 7.07 0 00-6.98 0l-1.3-1.3a1 1 0 00-1.42 1.42l1.3 1.3a7.07 7.07 0 000 6.98l-1.3 1.3a1 1 0 001.42 1.42l1.3-1.3a7.07 7.07 0 006.98 0l1.3 1.3a1 1 0 001.42-1.42l-1.3-1.3a7.07 7.07 0 000-6.98l1.3-1.3a1 1 0 000-1.42zM12 15a3 3 0 113-3 3 3 0 01-3 3z" />
                                </svg>
                                Download APK for Android
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
                            <MobileFrame title="" image="/images/phone.png" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default Download