import Image from "next/image";
import StoryCard, { TheirStoryProps } from "../cards/StoryCard";
import { useState } from "react";
import FormModal from "../models/form-model";
import StoryForm from "../forms/StoryForm";

interface StoriesListProps {
    title: string;
    data: TheirStoryProps[] | null;
}

export default function StoriesList({ title, data }: StoriesListProps) {
    const [isFormOpen, setFormOpen] = useState(false);

    return (
        <section className="py-12 md:py-24 bg-neutral-50 px-10 lg:px-20">
            <div className="container mx-auto px-4">

                {/* Section Title */}
                <div className="mb-3 text-center md:text-left flex justify-between items-center border-b border-gray-200 pb-5">
                    <h2 className="text-3xl sm:text-4xl font-bold text-black">{title}</h2>
                    <div>
                        <button onClick={() => setFormOpen(true)} className="hidden md:block bg-black text-white px-5 py-3 rounded-full hover:opacity-80">
                            Submit Your Story
                        </button>

                        <FormModal isOpen={isFormOpen} onClose={() => setFormOpen(false)}>
                            <StoryForm onSuccess={() => setFormOpen(false)} />
                        </FormModal>
                    </div>
                </div>

                {!data || data.length === 0 && (
                    <div className='bg-white rounded-xl flex flex-col items-center justify-center p-4'>
                        <Image src={'/svgs/empty.svg'} alt='' width={400} height={400} />
                        <span className='text-slate-700 font-semibold text-base'>No Stories found</span>
                    </div>
                )}

                <div className="flex flex-wrap -m-3">
                    {data && data.map((story, index) => (
                        <StoryCard key={index} props={story} />
                    ))}
                </div>
            </div>
        </section>
    );
}