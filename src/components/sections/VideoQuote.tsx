import { Play } from 'lucide-react';
import Image from 'next/image';

const VideoQuote = () => {
    return (
        <section className="px-6 py-20 md:px-20 lg:px-32 bg-white">
            <div className="mx-auto p-6 space-y-8 md:space-y-12 bg-white">
                {/* Video Section */}
                <div>
                    <a href="#" className="text-lg font-semibold text-slate-700 underline">
                        One Day In 100 Days
                    </a>
                    <div className="mt-4 bg-black rounded-lg h-48 md:h-64 lg:h-80 flex items-center justify-center relative">
                        <button className="bg-white rounded-full p-4 md:p-6 shadow-lg">
                            <Play className="h-8 w-8 md:h-10 md:w-10 text-black" />
                        </button>
                    </div>
                </div>

                {/* Quote Section */}
                <div className="bg-black text-white rounded-lg overflow-hidden flex flex-col md:flex-row items-center relative">
                    {/* Image */}
                    <Image
                        src="/images/quotes.png"
                        alt="Paul Kagame Speech"
                        width={300}
                        height={300}
                        className="w-full md:w-1/3 h-[250px] md:h-[300px] object-cover rounded-lg"
                    />

                    {/* Text Content */}
                    <div className="p-6 md:ml-6 flex-1">
                        <span className="text-2xl">&#10077;</span>
                        <p className="italic text-base md:text-lg leading-relaxed">
                            “Today, Our Hearts Are Filled With Grief And Gratitude In Equal Measure.
                            We Remember Our Dead, And Are Also Grateful For What Rwanda Has Become.”
                        </p>

                        {/* Author Info */}
                        <div className="mt-4 flex items-center">
                            <Image
                                src="/images/quotes.png"
                                alt="Profile"
                                className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2"
                                width={40}
                                height={40}
                            />
                            <div>
                                <p className="font-semibold text-sm md:text-base">Pres Paul Kagame</p>
                                <p className="text-xs md:text-sm text-gray-400">His Excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoQuote;