import { usePagination } from "@/hooks/usePagination";
import MemoryCard from "@/components/cards/MemoryCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Art } from "@/types/arts";

export default function MemoriesList({ title, data }: { title: string, data: Art[] }) {
    const itemsPerPage = 5;
    const { next, prev, currentData, currentPage, maxPage, setCurrentPage } = usePagination(data, itemsPerPage);

    return (<>
        <section className="px-6 py-10 md:px-20 lg:px-32 bg-white">
            <div className="mb-3">
                <h2 className="text-4xl font-bold text-black">{title}</h2>
            </div>

            <div className="mt-12">
                {(currentData() as Art[]).map((memory: Art, index: number) => (
                    <div key={index} className="mb-6">
                        <MemoryCard props={memory} />
                    </div>
                ))}
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
                    className="w-10 h-10 flex items-center justify-center border-2 rounded-full transition disabled:opacity-50">
                    <ChevronRight size={18} />
                </button>
            </div>
        </section>
    </>);
}