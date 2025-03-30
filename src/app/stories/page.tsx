"use client";

import PageHeader from "@/components/headers/page-header";
import Layout from "@/components/Layout";
import StoriesList from "@/components/lists/StoriesList";
// import Navbar from "@/components/Navbar";
import FetchSpinner from "@/components/spinners/fetch-spinner";
// import TopHeader from "@/components/TopHeader";
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
        <Layout>
            <PageHeader
                title='Written & Published Stories'
                description='Explore inspiring written and published stories shared by our community.'
                sup_title='Their Stories'
                // backgroundImage='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/63/27/43/academic-visit-for-national.jpg?w=1400&h=-1&s=1'
            />

            <div className="bg-white">
                {loading && <FetchSpinner />}
                <StoriesList title="Published Stories" data={stories} />
            </div>
        </Layout>
    </>);
}