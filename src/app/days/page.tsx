"use client";
import TopHeader from "@/components/TopHeader";
import { Play } from 'lucide-react';
import VideosList from "@/components/lists/VideosList";

export default function Days() {
    return (<>
        <TopHeader title="One day in 100 days " path="one day in 100 Days" />

        <section className='px-6 py-20 md:px-20 lg:px-32 bg-white'>
            <div className="mx-auto p-6 space-y-8 bg-white">
                {/* Video Section */}
                <div>
                    <a href="#" className="text-xl font-semibold text-slate-700">One Day In 100 Days</a>
                    <div className="mt-4 bg-black rounded-lg h-64 flex items-center justify-center relative">
                        <button className="bg-white rounded-full p-4 shadow-lg">
                            <Play className="h-10 w-10 text-black" />
                        </button>
                    </div>
                </div>


                <div className="mt-10">
                    <VideosList title="Other Videos" data={[
                        { id: 1, image: '/images/1.jpg', type: 'Story', date: '12th June 2021' },
                        { id: 1, image: '/images/1.jpg', type: 'Story', date: '12th June 2021' },
                        { id: 1, image: '/images/1.jpg', type: 'Story', date: '12th June 2021' },
                        { id: 1, image: '/images/1.jpg', type: 'Story', date: '12th June 2021' },
                    ]} />
                </div>
            </div>
        </section>
    </>);
}