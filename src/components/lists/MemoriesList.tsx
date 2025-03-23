'use client';

import { usePagination } from "@/hooks/usePagination";
import MemoryCard from "@/components/cards/MemoryCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Art } from "@/types/arts";
import Image from "next/image";
import FormModal from "../models/form-model";
import MemoryForm from "../forms/MemoryForm";
import { useState } from "react";

export default function MemoriesList({ title, data }: { title: string, data: Art[] }) {
    const itemsPerPage = 5;
    const { next, prev, currentData, currentPage, maxPage, setCurrentPage } = usePagination(data, itemsPerPage);
    const [isFormOpen, setFormOpen] = useState(false);

    return (<>
        {/* <section>
            <div className="flex flex-col items-center justify-center mt-12">
                <div className='border border-gray-300 rounded-full pl-4 pr-2 py-2 w-full text-sm focus:outline-none flex items-center bg-white'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M18.93 20.689c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97Z" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Search your desired Cars..."
                        className="border-none font-bold outline-none focus:border-none focus:outline-none ml-3 bg-white w-full h-full text-slate-700"
                    />
                    <div className='hidden md:block'>
                        {onLoading && <FetchLoader />}

                        {!onLoading && <button onClick={handleSearch} className="inline-flex h-11 w-full items-center justify-center text-sm ml-10 rounded-full bg-primary px-5 font-medium tracking-wide text-white shadow-none outline-none transition duration-200 hover:bg-primary focus:ring sm:w-auto">
                            <div className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="m22 22-2-2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                            <div className='capitalize'>Search</div>
                        </button>}
                    </div>
                </div>
            </div>
        </section> */}

        <section className="px-6 py-10 md:px-20 lg:px-32 bg-white">
            <div className="mb-3 border-b border-gray-200 pb-5 flex items-center justify-between">
                <h2 className="text-4xl font-bold text-black">{title}</h2>
                <div>
                    {/* Submit Button */}
                    <button onClick={() => setFormOpen(true)} className="hidden md:block bg-black text-white px-5 py-3 rounded-full hover:opacity-80">
                        Submit Your Memories
                    </button>

                    <FormModal isOpen={isFormOpen} onClose={() => setFormOpen(false)}>
                        <MemoryForm onSuccess={() => setFormOpen(false)} />
                    </FormModal>
                </div>
            </div>

            <div className="mt-12">
                {data.length === 0 && (
                    <div className='bg-white rounded-xl flex flex-col items-center justify-center p-4'>
                        <Image src={'/svgs/empty.svg'} alt='' width={400} height={400} />
                        <span className='text-slate-700 font-semibold text-base'>No data found</span>
                    </div>
                )}
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