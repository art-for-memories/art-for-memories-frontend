import { useState, useRef } from 'react';
import { Video } from '@/types/video';
import { Play, Pause } from 'lucide-react';
import Image from 'next/image';

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
        <div className="bg-black rounded-lg flex items-center justify-center w-full h-full border border-gray-200 relative group">
            {!isPlaying && (
                <div className='w-full h-full rounded-lg absolute fade-in'>
                    <Image
                        width={500}
                        height={500}
                        src={video.image ?? '/images/thumbs.PNG'}
                        alt="Video thumbnail"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            )}

            <video
                ref={videoRef}
                className={`w-full h-full object-cover rounded-lg ${!isPlaying ? 'opacity-0' : ''}`}
            >
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <button
                onClick={handlePlayPause}
                className="bg-white rounded-full p-4 shadow-lg absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
                {isPlaying ? <Pause className="h-10 w-10 text-black" /> : <Play className="h-10 w-10 text-black" />}
            </button>
        </div>
    );
}