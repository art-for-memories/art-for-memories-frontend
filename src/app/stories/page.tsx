"use client";
import StoriesList from "@/components/lists/StoriesList";
import FetchSpinner from "@/components/spinners/fetch-spinner";
import TopHeader from "@/components/TopHeader";
import { Stories as Story } from "@/types/stories";
import { useEffect, useState } from "react";

export default function Stories() {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllStories = async () => {
        try {
            setLoading(true);

            const response = await fetch('/api/stories/approved');

            if (response.ok) {
                const stories = await response.json();

                const formattedStories = stories.data.map((story: Story) => ({
                    image: story.image,
                    type: story.storyType,
                    date: story.date,
                    title: story.title,
                    author: story.author,
                    role: "Illustrator",
                    preview: false,
                }));

                setStories(formattedStories);
            } else {
                console.error('Failed to fetch stories');
            }

            setLoading(false);
        } catch (error) {
            console.error('Error fetching stories:', error);
        }
    };

    useEffect(() => {
        getAllStories();
    }, []);

    return (<>
        <TopHeader title="Their Stories" />
        {loading && <FetchSpinner />}
        <StoriesList title="Published Stories" data={stories} />
    </>);
}