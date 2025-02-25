import Image from "next/image";

export default function TheirStories() {
    return (<>
        <section className="px-6 py-28 md:px-20 lg:px-32 bg-white">
            <div className="flex flex-col md:flex-row items-center justify-between mx-auto px-6 ">
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
                    <div className="w-[248px] h-[450px] rounded-[135px] overflow-hidden relative bg-[#FEF5ED] p-20">
                        <Image
                            src="/images/memories/memory-3.png"
                            alt="Story 1"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-[135px] w-full h-full pb-8"
                        />
                    </div>

                    {/* Middle Circular Logo */}
                    <div className="absolute z-20 left-1/2 transform -translate-x-1/2 bg-black p-5 rounded-full flex items-center justify-center shadow-md">
                        <Image
                            src="/images/logo.png" // Replace with your actual logo
                            alt="Logo"
                            width={40}
                            height={40}
                        />
                    </div>

                    {/* Image 2 (Overlapping) */}
                    <div className="w-[248px] h-[450px] rounded-full overflow-hidden relative bg-[#FEF5ED] ml-5">
                        <Image
                            src="/images/memories/memory-4.png" // Replace with your actual image
                            alt="Story 2"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full w-full h-full mt-5"
                        />
                    </div>
                </div>
            </div>
        </section>
    </>);
}
