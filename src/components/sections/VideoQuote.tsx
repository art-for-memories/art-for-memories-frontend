import { Play } from 'lucide-react';
import Image from 'next/image';

const VideoQuote = () => {
    return (
        <section className='px-6 py-20 md:px-20 lg:px-32 bg-white'>
            <div className="mx-auto p-6 space-y-8 bg-white">
                {/* Video Section */}
                <div>
                    <a href="#" className="text-lg font-semibold text-slate-700 underline">One Day In 100 Days</a>
                    <div className="mt-4 bg-black rounded-lg h-64 flex items-center justify-center relative">
                        <button className="bg-white rounded-full p-4 shadow-lg">
                            <Play className="h-10 w-10 text-black" />
                        </button>
                    </div>
                </div>

                {/* Quote Section */}
                <div className="bg-black text-white rounded-lg overflow-hidden flex items-center relative">
                    <Image
                        src="/images/quotes.png"
                        alt="Paul Kagame Speech"
                        width={300}
                        height={300}
                        className="w-1/3 h-[300px] object-cover rounded-lg"
                    />

                    <div className="ml-6 flex-1 p-6">
                        <span className="text-2xl">&#10077;</span>
                        <p className="italic text-lg">
                            “Today, Our Hearts Are Filled With Grief And Gratitude In Equal Measure.
                            We Remember Our Dead, And Are Also Grateful For What Rwanda Has Become”
                        </p>
                        <div className="mt-4 flex items-center">
                            <Image src="/images/quotes.png" alt="Profile" className="w-8 h-8 rounded-full mr-2" width={32} height={32} />

                            <div>
                                <p className="font-semibold">Pres Paul Kagame</p>
                                <p className="text-sm text-gray-400">His excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoQuote;