import StoryCard, { TheirStoryProps } from "../cards/StoryCard";

interface StoriesListProps {
    title: string;
    data: TheirStoryProps[];
}

export default function StoriesList({ title, data }: StoriesListProps) {
    return (
        <section className="px-6 py-10 md:px-20 lg:px-32 bg-white">
            <div className="mb-3">
                <h2 className="text-4xl font-bold text-black">{title}</h2>
            </div>

            <div className="flex flex-col items-left">
                <div className="mt-12 grid grid-cols-3 gap-4">
                    {data.map((story, index) => (<StoryCard key={index} props={story} />))}
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="text-center max-w-2xl mt-10">
                    <div className="mt-6 flex justify-center gap-3">
                        <button className="px-6 py-3 bg-black text-white rounded-full text-sm font-semibold">VIEW STORIES</button>
                        <button className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full text-lg">↗</button>
                    </div>
                </div>
            </div>
        </section>
    );
}