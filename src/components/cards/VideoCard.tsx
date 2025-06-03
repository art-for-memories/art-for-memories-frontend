import { Video } from '@/types/video';
import { useState } from 'react';

export default function VideoCard({ video }: { video: Video }) {
    const [expanded, setExpanded] = useState(false);
    return (
        <div
            className={`bg-black rounded-lg flex items-center justify-center w-full h-full border border-gray-200 relative group min-h-[200px] aspect-video transition-all duration-300 cursor-pointer ${expanded ? 'z-50 fixed inset-0 m-auto max-w-3xl max-h-[80vh] p-4' : ''}`}
            onClick={() => setExpanded(!expanded)}
            style={expanded ? { background: 'rgba(0,0,0,0.95)' } : {}}
        >
            <iframe
                src={video.url}
                className="w-full h-full rounded-lg"
                allow="autoplay; encrypted-media"
                allowFullScreen
                frameBorder="0"
                title="YouTube Video"
            ></iframe>
            
            {expanded && (
                <button
                    className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-60 rounded-full px-3 py-1 z-50 hover:bg-opacity-90"
                    onClick={e => { e.stopPropagation(); setExpanded(false); }}
                    aria-label="Close video preview"
                >
                    &times;
                </button>
            )}
        </div>
    );
}