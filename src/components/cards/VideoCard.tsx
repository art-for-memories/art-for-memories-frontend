import { Play } from 'lucide-react';

export default function VideoCard() {
    return (
        <div className="bg-black rounded-lg flex items-center justify-center relative mx-1 w-[250] h-[200] sm:w-[350] sm:h-[300] md:w-[250] md:h-[200]">
            <button className="bg-white rounded-full p-4 shadow-lg">
                <Play className="h-10 w-10 text-black" />
            </button>
        </div>
    );
}