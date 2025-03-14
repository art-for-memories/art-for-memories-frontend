"use client";

import Layout from "@/components/Layout";
import MemoriesList from "@/components/lists/MemoriesList";
import FetchSpinner from "@/components/spinners/fetch-spinner";
import TopHeader from "@/components/TopHeader";
import { Art } from "@/types/arts";
import Image from "next/image";
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
            <TopHeader title="Memories" path="there Memories" />
            {loading && <FetchSpinner />}
            {arts.length === 0 && !loading && (
                <div className='bg-white rounded-xl flex flex-col items-center justify-center p-4'>
                    <Image src={'/svgs/empty.svg'} alt='' width={400} height={400} />
                    <span className='text-slate-700 font-semibold text-base'>No memories found</span>
                </div>
            )}
            <MemoriesList title="Their Memories" data={arts} />
        </Layout>
    </>);
}