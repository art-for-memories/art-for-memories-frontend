import { usePagination } from "@/hooks/usePagination";
import VideoCard from "../cards/VideoCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Video } from "@/types/video";

interface VideosListProps {
    title: string;
    data: Video[];
}

export default function VideosList({ title, data }: VideosListProps) {
    const itemsPerPage = 5;
    const { next, prev, currentData, currentPage, maxPage, setCurrentPage } = usePagination(data, itemsPerPage);

    return (
        <div className="mt-10 px-4 md:px-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-black text-center md:text-left">{title}</h2>

            <div className="flex flex-col items-center md:items-start">
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center">
                    {(currentData() as Video[]).map((video: Video, index: number) => (
                        <VideoCard key={index} video={video} />
                    ))}
                </div>
            </div>

            {data.length === 0 && (
                <div className='bg-white rounded-xl flex flex-col items-center justify-center p-4'>
                    <Image src={'/svgs/empty.svg'} alt='' width={400} height={400} />
                    <span className='text-slate-700 font-semibold text-base'>No Videos found</span>
                </div>
            )}

            {/* Pagination Controls */}
            <div className="flex justify-between mt-10 max-w-md mx-auto">
                <button
                    onClick={prev}
                    disabled={currentPage === 1}
                    className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-full hover:bg-gray-200">
                    <ChevronLeft size={18} />
                </button>

                {/* Page Numbers */}
                {[...Array(maxPage)].map((_, index) => {
                    const page = index + 1;
                    return (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-10 h-10 border-2 border-black rounded-full flex items-center justify-center text-sm font-semibold transition ${currentPage === page ? "bg-black text-white" : "hover:bg-gray-200"
                                }`}
                        >
                            {page.toString().padStart(2, "0")}
                        </button>
                    );
                })}
                
                <button
                    onClick={next}
                    disabled={currentPage === maxPage}
                    className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-full hover:bg-gray-200 transition disabled:opacity-50">
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
}