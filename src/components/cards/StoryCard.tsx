import Image from 'next/image';

export interface TheirStoryProps {
    id?: number;
    image: string;
    type: string;
    date: string;
    title: string;
    author: string;
    role: string;
}

export default function StoryCard({ props }: { props: TheirStoryProps }) {
    return (
        <div className="bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden">
            {/* Responsive Image */}
            <Image
                src={props.image}
                alt={props.title}
                width={288}
                height={160}
                className="w-full h-[180px] sm:h-[200px] object-cover"
            />

            {/* Card Content */}
            <div className="p-3 sm:p-4">
                {/* Tags & Date */}
                <div className="flex flex-wrap items-center text-center sm:text-left">
                    <span className="text-xs bg-white text-slate-700 px-2 py-1 rounded-full border border-gray-200">
                        {props.type}
                    </span>
                    <span className="text-xs text-slate-700 ml-2">{props.date}</span>
                </div>

                {/* Title */}
                <h3 className="mt-2 font-semibold text-slate-700 text-sm sm:text-base">
                    {props.title}
                </h3>

                {/* Author Info */}
                <div className="flex items-center mt-4">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div className="ml-2">
                        <p className="text-xs sm:text-sm font-medium text-slate-700">{props.author}</p>
                        <p className="text-xs text-slate-500">{props.role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}