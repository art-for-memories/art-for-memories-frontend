"use client";
import Layout from "@/components/Layout";
import MemoriesList from "@/components/lists/MemoriesList";
import TopHeader from "@/components/TopHeader";

export default function Stories() {
    const memories = [
        {
            oldPhoto: "/images/memories/memory-1.jpg",
            preservedPhoto: "/images/memories/memory-2.jpg",
            name: "KALISA LEONARD",
            age: 78,
            preview: true,
            killedOn: "April 08th, 2025",

        },
        {
            oldPhoto: "/images/memories/memory-1.jpg",
            preservedPhoto: "/images/memories/memory-2.jpg",
            name: "KALISA LEONARD",
            age: 78,
            preview: true,
            killedOn: "April 08th, 2025",

        },
        {
            oldPhoto: "/images/memories/memory-1.jpg",
            preservedPhoto: "/images/memories/memory-2.jpg",
            name: "KALISA LEONARD",
            age: 78,
            preview: true,
            killedOn: "April 08th, 2025",

        },
    ];

    return (<>
        <Layout>
            <TopHeader title="Memories" path="there Memories" />
            <MemoriesList title="Their Memories" data={memories} />
        </Layout>
    </>);
}