import { usePagination } from "@/hooks/usePagination";
import VideoCard from "../cards/VideoCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface VideosListProps {
    title: string;
    data: unknown[];
}

export default function VideosList({ title, data }: VideosListProps) {
    const itemsPerPage = 5; // Adjust the number of items per page as needed
    const { next, prev, currentData, currentPage, maxPage, setCurrentPage } = usePagination(data, itemsPerPage);
    
    return (
        <section className="mt-10">
            <h2 className="text-4xl font-bold text-black">{title}</h2>

            <div className="flex flex-col items-left">
                <div className="mt-5 grid grid-cols-2 gap-4">
                    {currentData().map((data: unknown, index: number) => (
                        <div key={index} className="mb-6">
                            <VideoCard key={index} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between mt-20 max-w-md mx-auto">
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
                        className={`w-10 h-10 border-2 border-black rounded-full flex items-center justify-center text-sm font-semibold transition ${
                        currentPage === page ? "bg-black text-white" : "hover:bg-gray-200"
                        }`}
                    >
                        {page.toString().padStart(2, "0")}
                    </button>
                    );
                })}
                <button
                    onClick={next}
                    disabled={currentPage === maxPage}
                    className="w-10 h-10 flex items-center justify-center border-2 rounded-full transition disabled:opacity-50">
                    <ChevronRight size={18} />
                </button>
            </div>
        </section>
    );
}