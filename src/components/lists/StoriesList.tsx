import Image from "next/image";
import StoryCard, { TheirStoryProps } from "../cards/StoryCard";
import { useState } from "react";
import FormModal from "../models/form-model";
import StoryForm from "../forms/StoryForm";

interface StoriesListProps {
    title: string;
    data: TheirStoryProps[];
}

export default function StoriesList({ title, data }: StoriesListProps) {
    const [isFormOpen, setFormOpen] = useState(false);

    return (
        <section className="px-6 py-10 md:px-20 lg:px-32 bg-white">
            {/* Section Title */}
            <div className="mb-3 text-center md:text-left flex justify-between items-center border-b border-gray-200 pb-5">
                <h2 className="text-3xl sm:text-4xl font-bold text-black">{title}</h2>
                <div>
                    {/* Submit Button */}
                    <button onClick={() => setFormOpen(true)} className="hidden md:block bg-black text-white px-5 py-3 rounded-full hover:opacity-80">
                        Submit Your Story
                    </button>

                    <FormModal isOpen={isFormOpen} onClose={() => setFormOpen(false)}>
                        <StoryForm onSuccess={() => setFormOpen(false)} />
                    </FormModal>
                </div>
            </div>

            {data.length === 0 && (
                <div className='bg-white rounded-xl flex flex-col items-center justify-center p-4'>
                    <Image src={'/svgs/empty.svg'} alt='' width={400} height={400} />
                    <span className='text-slate-700 font-semibold text-base'>No Stories found</span>
                </div>
            )}

            {/* Story Grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.map((story, index) => (
                    <StoryCard key={index} props={story} />
                ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center mt-10">
                <div className="text-center max-w-2xl">
                    <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 items-center">
                        <button className="px-6 py-3 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition">
                            VIEW STORIES
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full text-lg hover:bg-gray-800 transition">
                            ↗
                        </button>
                    </div>
                </div>
            </div>
        </section>

    );
}