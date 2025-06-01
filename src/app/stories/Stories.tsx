'use client';

import StoriesList from '@/components/lists/StoriesList';
import type { Stories } from '@/types/stories';
import React, { useEffect, useState } from 'react'

function Stories() {
    const [writtenStories, setWrittenStories] = useState([]);
    const [illustratedStories, setIllustratedStories] = useState([]);

    const getAllStories = async () => {
        try {
            const response = await fetch('/api/stories');

            if (response.ok) {
                const allStories = await response.json();
                setWrittenStories(allStories.filter((story: Stories) => story.type === 'Written Story'));
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
    }, [])
    return (
        <>
            <StoriesList title="Written Stories" data={writtenStories} />
            <StoriesList title="Illustrated Stories" data={illustratedStories} />
        </>
    )
}

export default Stories;