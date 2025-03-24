import Image from 'next/image'
import React from 'react'

function Commitments() {
    return (
        <section className="py-12 md:py-24 xl:pb-64 md:px-16 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto mb-24 text-center">
                    <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl tracking-sm mb-16">Our commitment to green energy is paving the way for a cleaner, healthier planet. </h1><a className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200" href="#">Get in touch</a>
                </div>
                <div className="flex justify-center">
                    <div className="w-72 h-72 mr-5 flex-shrink-0"><Image width={500} height={500} className="block w-full h-full rounded-2xl object-cover" src="https://www.newtimes.co.rw/thenewtimes/uploads/images/2023/04/07/thumbs/1200x700/15973.jpg" alt="" /></div>
                    <div className="w-72 h-72 flex-shrink-0 mr-5"><Image width={500} height={500} className="block w-full h-full rounded-2xl object-cover" src="https://www.newtimes.co.rw/thenewtimes/uploads/images/2023/04/07/thumbs/1200x700/15973.jpg" alt="" /></div>
                    <div className="w-72 h-72 flex-shrink-0 mr-5"><Image width={500} height={500} className="block w-full h-full rounded-2xl object-cover" src="https://www.newtimes.co.rw/thenewtimes/uploads/images/2023/04/07/thumbs/1200x700/15973.jpg" alt="" /></div>
                    <div className="w-72 h-72 flex-shrink-0 mr-5"><Image width={500} height={500} className="block w-full h-full rounded-2xl object-cover" src="https://www.newtimes.co.rw/thenewtimes/uploads/images/2023/04/07/thumbs/1200x700/15973.jpg" alt="" /></div>
                    <div className="w-72 h-72 flex-shrink-0 mr-5"><Image width={500} height={500} className="block w-full h-full rounded-2xl object-cover" src="https://www.newtimes.co.rw/thenewtimes/uploads/images/2023/04/07/thumbs/1200x700/15973.jpg" alt="" /></div>
                    <div className="w-72 h-72 flex-shrink-0 mr-5"><Image width={500} height={500} className="block w-full h-full rounded-2xl object-cover" src="https://www.newtimes.co.rw/thenewtimes/uploads/images/2023/04/07/thumbs/1200x700/15973.jpg" alt="" /></div>
                    <div className="w-72 h-72 flex-shrink-0 mr-5"><Image width={500} height={500} className="block w-full h-full rounded-2xl object-cover" src="https://www.newtimes.co.rw/thenewtimes/uploads/images/2023/04/07/thumbs/1200x700/15973.jpg" alt="" /></div>
                </div>
            </div>
        </section>
    )
}

export default Commitments