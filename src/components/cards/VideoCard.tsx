import { useState, useRef } from 'react';
import { Video } from '@/types/video';
import { Play, Pause } from 'lucide-react';

export default function VideoCard({ video }: { video: Video }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="bg-black rounded-lg flex items-center justify-center relative mx-1 w-[250px] h-[200px] sm:w-[350px] sm:h-[300px] md:w-[250px] md:h-[200px]">
            <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover rounded-lg" controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <button onClick={handlePlayPause} className="bg-white rounded-full p-4 shadow-lg absolute">
                {isPlaying ? <Pause className="h-10 w-10 text-black" /> : <Play className="h-10 w-10 text-black" />}
            </button>
        </div>
    );
}