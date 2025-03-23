"use client";

import Layout from "@/components/Layout";
import MemoriesList from "@/components/lists/MemoriesList";
import FetchSpinner from "@/components/spinners/fetch-spinner";
import TopHeader from "@/components/TopHeader";
import { Art } from "@/types/arts";
import { useEffect, useState } from "react";

export default function Stories() {
    const [arts, setArts] = useState<Art[]>([]);
    const [loading, setLoading] = useState(false);

    const getAllArts = async () => {
        try {
            setLoading(true);

            const response = await fetch('/api/arts');
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
            } else {
                throw new Error('Failed to fetch arts');
            }

            setLoading(false);
        } catch { }
    };

    useEffect(() => {
        getAllArts();
    }, []);

    return (<>
        <Layout>
            <TopHeader title="Memories" path="Memories" />
            
            {loading && <FetchSpinner />}
            <MemoriesList title="Their Memories" data={arts} />
        </Layout>
    </>);
}