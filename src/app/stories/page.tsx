"use client";
import StoriesList from "@/components/lists/StoriesList";
import FetchSpinner from "@/components/spinners/fetch-spinner";
import TopHeader from "@/components/TopHeader";
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
                setStories(stories.data);
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
        <TopHeader title="Their Stories" path="Stories" />
        
        <div className="mt-10">
            {loading && <FetchSpinner />}
            <StoriesList title="Published Stories" data={stories} />
        </div>
    </>);
}