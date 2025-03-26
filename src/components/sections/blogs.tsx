import React from 'react'

function Blogs() {
    return (
        <section className="py-12 md:py-24 md:px-16 bg-neutral-50">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl md:text-6xl mb-12 font-semibold font-heading text-slate-700">Our Latest Blog</h1>
                <div className="flex flex-wrap -m-3">
                    <div className="w-full md:w-1/2 p-3">
                        <div className="h-full bg-white rounded-3xl px-6 md:px-12 py-12"><span className="block text-neutral-600 text-xl font-semibold mb-6 tracking-tight">Big news</span>
                            <a className="block text-neutral-800 text-3xl md:text-5xl font-semibold hover:underline mb-3 max-w-sm md:max-w-lg tracking-tight" href="#">Marking International Holocaust Remembrance Day 2025 at the Kigali Genocide Memorial</a>
                            <p className="text-neutral-600 text-lg font-medium mb-11 max-w-lg tracking-tight">Rwanda before, during and after the genocide</p>
                            <div className="flex flex-wrap gap-6 mb-14">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-100"></div>
                                    <p className="text-neutral-600 font-medium tracking-tight">design</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-orange-200"></div>
                                    <p className="text-neutral-600 font-medium tracking-tight">vid marketing</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <p className="text-neutral-600 text-xl font-semibold tracking-tight">Thu 12 Oct, 4 AM</p><a className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 text-slate-900 transition duration-200" href="#">Read more</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 p-3">
                        <div className="h-full bg-white rounded-3xl px-6 md:px-12 py-12"><span className="block text-neutral-600 text-xl font-semibold mb-6 tracking-tight">Main room</span>
                            <a className="block text-neutral-800 text-3xl md:text-5xl font-semibold hover:underline mb-3 max-w-sm md:max-w-lg tracking-tight" href="#">Israel’s Ambassador-designate pays tribute to victims of the Genocide against the Tutsi</a>
                            <p className="text-neutral-600 text-lg font-medium mb-11 max-w-lg tracking-tight">Marking International Holocaust Remembrance Day 2025 at the Kigali Genocide Memorial</p>
                            <div className="flex flex-wrap gap-6 mb-14">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-100"></div>
                                    <p className="text-neutral-600 font-medium tracking-tight">campaigns</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-orange-200"></div>
                                    <p className="text-neutral-600 font-medium tracking-tight">vid marketing</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <p className="text-neutral-600 text-xl font-semibold tracking-tight">Thu 11 Oct, 8 AM</p><a className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition text-slate-900 duration-200" href="#">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs