import Image from 'next/image'
import React from 'react'

function CallToAction() {
    return (
        <section className="py-12">
            <div className="container px-4 mx-auto">
                <div className="relative pt-20 px-4 bg-black overflow-hidden rounded-3xl">
                    <div className="text-center md:max-w-xl mx-auto removed pb-20"><span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">Learn to code</span>
                        <h2 className="font-heading mb-6 text-7xl text-white tracking-8xl">Want to build templates like this one?</h2><a className="mb-8 text-gray-300 relative z-10" href="https://www.pixelrocket.store">Visit www.pixelrocket.store and learn to become a frontend web developer today</a>
                        <Image width={500} height={500} className="absolute left-0 top-0 bottom-0 right-0 z-0" src="/images/vectors/lines2.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction