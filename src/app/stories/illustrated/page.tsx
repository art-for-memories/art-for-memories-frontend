"use client";

import PageHeader from "@/components/headers/page-header";
import Layout from "@/components/Layout";
import StoriesList from "@/components/lists/StoriesList";
import type { Stories } from "@/types/stories";
import { useEffect, useState } from "react";

export default function Stories() {
    const [illustratedStories, setIllustratedStories] = useState([]);

    const getAllStories = async () => {
        try {
            const response = await fetch('/api/stories');

            if (response.ok) {
                const allStories = await response.json();
                setIllustratedStories(allStories.filter((story: Stories) => story.type === 'Illustrated'));
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
                title='Illustrated Stories'
                description='Memories They Carry, Stories They Share'
                sup_title='Their Stories'
            />

            <div className="bg-white">
                <StoriesList title="Illustrated Stories" data={illustratedStories} />
            </div>
        </Layout>
    </>);
}