import Image from "next/image";
import Link from "next/link";

export default function TheirStories() {
    return (<>
        <section className="px-6 py-20 md:px-20 lg:px-32 bg-white">
            <div className="flex flex-col md:flex-row items-center justify-between mx-auto px-6">
                {/* Left Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">THEIR STORIES</h2>
                    <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0">
                        Explore some of our most impactful projects, each of which has contributed to our mission
                        of preserving history through personal and artistic expressions.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-3">
                        <Link href={"/stories"} className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition">
                            VIEW STORIES
                        </Link>
                        <Link href={"/stories"} className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white text-xl">
                            ↗
                        </Link>
                    </div>
                </div>

                {/* Right Side Images */}
                <div className="md:w-1/2 flex flex-col sm:flex-row justify-center md:justify-center relative mt-10 md:mt-0 items-center space-x-0 sm:space-x-5">
                    {/* Image 1 */}
                    <div className="w-[200px] sm:w-[248px] h-[380px] sm:h-[450px] rounded-[135px] overflow-hidden relative bg-[#FEF5ED] p-10 sm:p-20">
                        <Image
                            src="/images/memories/memory-3.png"
                            alt="Story 1"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-[135px] w-full h-full pb-8"
                        />
                    </div>

                    {/* Middle Circular Logo */}
                    <div className="absolute z-20 left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 bg-black p-4 sm:p-5 rounded-full flex items-center justify-center shadow-md">
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={30}
                            height={30}
                            className="sm:w-10 sm:h-10"
                        />
                    </div>

                    {/* Image 2 (Overlapping) */}
                    <div className="w-[200px] sm:w-[248px] h-[380px] sm:h-[450px] rounded-full overflow-hidden relative bg-[#FEF5ED] mt-5 sm:mt-0">
                        <Image
                            src="/images/memories/memory-4.png"
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
