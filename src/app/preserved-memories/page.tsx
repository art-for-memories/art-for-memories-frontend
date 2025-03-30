"use client";

import Layout from "@/components/Layout";
import MemoriesList from "@/components/lists/MemoriesList";
import FetchSpinner from "@/components/spinners/fetch-spinner";
import TopHeader from "@/components/TopHeader";
import { Art } from "@/types/arts";
import { useEffect, useState } from "react";

export default function Stories() {
    const [arts, setArts] = useState<Art[]>([]);
    const [filteredArts, setFilteredArts] = useState<Art[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const getAllArts = async () => {
        try {
            setLoading(true);

            const response = await fetch('/api/preserved-memories');
            const data = await response.json();

            if (response.ok) {
                const formattedData = data.map((art: Art) => ({
                    oldPhoto: art.oldPhoto,
                    preservedPhoto: art.preservedPhoto,
                    name: art.name,
                    age: art.age,
                    preview: true,
                    killedOn: "April 08th, 1994",
                }));

                setArts(formattedData);
                setFilteredArts(formattedData); // Initialize filteredArts with all arts
            } else {
                throw new Error('Failed to fetch arts');
            }

            setLoading(false);
        } catch {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        setLoading(true);

        const query = searchQuery.toLowerCase();
        const filtered = arts.filter((art) => art.name.toLowerCase().includes(query) || art.age.toString().includes(query));
        
        setLoading(false);
        
        setFilteredArts(filtered);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    useEffect(() => {
        getAllArts();
    }, []);

    return (
        <>
            <Layout>
                <TopHeader title="Memories" path="Memories" />

                <section className="flex flex-col items-center justify-center mb-10">
                    <div className="border border-gray-300 rounded-full pl-4 pr-2 py-2 w-full text-sm focus:outline-none flex items-center bg-white max-w-3xl">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path opacity=".4" d="M18.93 20.689c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97Z" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>

                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Search memories by name or age..."
                            className="border-none font-bold outline-none py-3 focus:border-none focus:outline-none ml-3 bg-white w-full h-full text-slate-700"
                        />
                        <div className="hidden md:block">
                            {loading && <FetchSpinner />}
                        </div>
                    </div>
                </section>

                <MemoriesList title="Their Memories" data={filteredArts} />
            </Layout>
        </>
    );
}