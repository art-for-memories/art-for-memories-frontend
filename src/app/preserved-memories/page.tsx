"use client";

import PageHeader from "@/components/headers/page-header";
import Layout from "@/components/Layout";
import MemoriesList from "@/components/lists/MemoriesList";
import { Art } from "@/types/arts";
import { useEffect, useState } from "react";

interface SearchQueryHandler {
    (searchQuery: string): void;
}

export default function Stories() {
    const [arts, setArts] = useState<Art[]>([]);
    const [filteredArts, setFilteredArts] = useState<Art[]>([]);
    const [loading, setLoading] = useState(false); 

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
                setFilteredArts(formattedData);
            } else {
                throw new Error('Failed to fetch arts');
            }

            setLoading(false);
        } catch {
            setLoading(false);
        }
    };

    const handleSearch: SearchQueryHandler = (searchQuery) => {
        setLoading(true);

        const query = searchQuery.toLowerCase();
        const filtered = arts.filter((art) => art.name.toLowerCase().includes(query) || art.age.toString().includes(query));

        setLoading(false);

        setFilteredArts(filtered);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch((event.target as HTMLInputElement).value);
        }
    };

    useEffect(() => {
        getAllArts();
    }, []);

    return (
        <Layout>
            <PageHeader
                title='Memories'
                description='Honoring Lives Through Preserved Images'
                sup_title=''
                // backgroundImage='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/7e/99/0d/caption.jpg?w=1400&h=-1&s=1'
            />

            <MemoriesList title="Preserved Memories" data={filteredArts} onSearch={handleKeyDown} loading={loading} />
        </Layout>
    );
}