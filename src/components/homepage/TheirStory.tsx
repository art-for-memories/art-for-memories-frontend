import Image from "next/image";

export default function TheirStories() {
    return (<>
        <section className="py-24 bg-white">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 ">
                {/* Left Content */}
                <div className="md:w-1/2 text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">THEIR STORIES</h2>
                    <p className="mt-4 text-gray-600 max-w-md">
                        Explore some of our most impactful projects, each of which has contributed to our mission
                        of preserving history through personal and artistic expressions.
                    </p>
                    <div className="mt-6 flex items-center space-x-3">
                        <button className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition">
                            VIEW STORIES
                        </button>
                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white text-xl">
                            ↗
                        </span>
                    </div>
                </div>

                {/* Right Side Images */}
                <div className="md:w-1/2 flex justify-end relative mt-10 md:mt-0 items-center">
                    {/* Image 1 */}
                    <div className="w-[248px] h-[424px] md:w-52 md:h-72 rounded-[135px] overflow-hidden relative bg-[#FEF5ED] pb-20">
                        <Image
                            src="/images/memories/memory-3.png" // Replace with your actual image
                            alt="Story 1"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-[135px] w-full h-full"
                        />
                    </div>

                    {/* Middle Circular Logo */}
                    <div className="left-1/2 transform -translate-x-1/2 bottom-6 w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                        <Image
                            src="/images/logo.png" // Replace with your actual logo
                            alt="Logo"
                            width={40}
                            height={40}
                        />
                    </div>

                    {/* Image 2 (Overlapping) */}
                    <div className="w-[248px] h-[424px] md:w-52 md:h-72 rounded-[135px] overflow-hidden shadow-lg relative bg-[#FEF5ED]">
                        <Image
                            src="/images/memories/memory-4.png" // Replace with your actual image
                            alt="Story 2"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-[135px] w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full py-16 flex flex-col items-center bg-white">
            <div className="mt-12 flex flex-wrap justify-center gap-8">
                {/* Story Card 1 */}
                <div className="w-72 bg-white shadow-lg rounded-xl overflow-hidden">
                    <Image src="/images/stories/story-1.png" alt="Story 1" width={288} height={160} className="w-full" />
                    <div className="p-4">
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">Written Story</span>
                        <span className="text-xs text-gray-500 ml-2">April 08th, 2025</span>
                        <h3 className="mt-2 font-semibold">Uko Nabuze Mama Umbyara</h3>
                        <div className="flex items-center mt-4">
                            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                            <div className="ml-2">
                                <p className="text-sm font-medium">King NGABO</p>
                                <p className="text-xs text-gray-500">Writer</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Story Card 2 */}
                <div className="w-72 bg-white shadow-lg rounded-xl overflow-hidden">
                    <Image src="/images/stories/story-2.png" alt="Story 2" width={288} height={160} className="w-full" />
                    
                    <div className="p-4">
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">Illustrated</span>
                        <span className="text-xs text-gray-500 ml-2">April 08th, 2025</span>
                        <h3 className="mt-2 font-semibold">Sinibuka Uko Basega</h3>
                        <div className="flex items-center mt-4">
                            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                            <div className="ml-2">
                                <p className="text-sm font-medium">King NGABO</p>
                                <p className="text-xs text-gray-500">Illustrator / Creator</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Story Card 3 */}
                <div className="w-72 bg-white shadow-lg rounded-xl overflow-hidden">
                    <Image src="/images/stories/story-3.png" alt="Story 3" width={288} height={160} className="w-full" />
                    
                    <div className="p-4">
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">Video</span>
                        <span className="text-xs text-gray-500 ml-2">April 09th, 2025</span>
                        <h3 className="mt-2 font-semibold">Umunsi Wa Nyuma Mbabona</h3>
                        <div className="flex items-center mt-4">
                            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                            <div className="ml-2">
                                <p className="text-sm font-medium">King NGABO</p>
                                <p className="text-xs text-gray-500">Creator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center max-w-2xl">
                <div className="mt-6 flex justify-center gap-3">
                    <button className="px-6 py-3 bg-black text-white rounded-full text-sm font-semibold">VIEW STORIES</button>
                    <button className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full text-lg">↗</button>
                </div>
            </div>
        </section>
    </>);
}
