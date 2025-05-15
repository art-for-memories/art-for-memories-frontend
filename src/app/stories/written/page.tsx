"use client";

import PageHeader from "@/components/headers/page-header";
import Layout from "@/components/Layout";
import StoriesList from "@/components/lists/StoriesList";
import type { Stories } from "@/types/stories";
import { useEffect, useState } from "react";

export default function Stories() {
    const [writtenStories, setWrittenStories] = useState([]);

    const getAllStories = async () => {
        try {
            const response = await fetch('/api/stories');

            if (response.ok) {
                const allStories = await response.json();
                setWrittenStories(allStories.filter((story: Stories) => story.type === 'Written Story'));
            } else {
                console.error('Failed to fetch stories');
            }
        } catch (error) {
            console.error('Error fetching stories:', error);
        }
    }

    useEffect(() => {
        getAllStories();
    })

    return (<>
        <Layout>
            <PageHeader
                title='Written Stories'
                description='Memories They Carry, Stories They Share'
                sup_title='Their Stories'
            />

            <div className="bg-white">
                <StoriesList title="Written Stories" data={writtenStories} />
            </div>
        </Layout>
    </>);
}