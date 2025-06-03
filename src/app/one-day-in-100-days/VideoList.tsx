'use client'

import VideosList from '@/components/lists/VideosList';
import React, { useEffect } from 'react';
import { useState } from "react";

function VideoList() {
    const [videos, setVideos] = useState([]);

    const getVideos = async () => {
        const response = await fetch('/api/videos');
        const data = await response.json();

        setVideos(data);
    }

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <div className="mx-auto space-y-8 bg-white max-w-6xl">
            {/* Other Videos Section */}
            <div className="mt-10">
                <VideosList title="Shared Videos" data={videos} />
            </div>
        </div>
    )
}

export default VideoList