import { Play } from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function VideoCard({ }) {
    return (
        <div className=''>
            <div className="mt-4 bg-black rounded-lg h-64 flex items-center justify-center relative">
                <button className="bg-white rounded-full p-4 shadow-lg">
                    <Play className="h-10 w-10 text-black" />
                </button>
            </div>
        </div>
    );
}