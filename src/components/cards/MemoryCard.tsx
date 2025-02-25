import Image from 'next/image';

export interface MemoryCardProps {
    oldPhoto: string;
    preservedPhoto: string;
    name: string;
    age: number;
    preview?: boolean;
    killedOn?: string;
    submittedBy?: string;
}

export default function MemoryCard({ props }: { props: MemoryCardProps }) {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Old Photo Section */}
            <div className="">
                <h3 className="text-md font-semibold mb-2 text-slate-700">Old Photo</h3>

                <div className='relative mt-4'>
                    <Image
                        src={props.oldPhoto}
                        alt="Old Memory"
                        className="w-64 h-96 object-cover border border-gray-400"
                        width={200}
                        height={600}
                    />
                    {!props.preview && <div className="bg-black/40 text-white text-xs p-2 mt-2 absolute bottom-0 left-0 right-0">
                        <p>{props.name}</p>
                        <p>AGED : {props.age}</p>
                    </div>}
                </div>
            </div>
            
            <div className="flex items-center justify-center w-[100px] h-32">
                <div className="h-1 bg-black flex-grow"></div>

                {/* Logo Circle */}
                <div className="border-2 border-black rounded-full w-10 h-10 flex items-center justify-center mx-1">
                    <span className="bg-black text-white px-1 py-1 rounded-full">
                        <div><Image src={'/images/logo.PNG'} alt={"logo"} width={30} height={30} /></div>
                    </span>
                </div>

                <div className="h-1 bg-black flex-grow"></div>
            </div>

            {/* Preserved Photo Section */}
            <div className="">
                <h3 className="text-md font-semibold mb-2 text-slate-700">Preserved Photo</h3>

                <div className='relative mt-4'>
                    <Image
                        src={props.preservedPhoto}
                        alt="Preserved Memory"
                        className="w-64 h-90 object-cover border border-gray-400"
                        width={200}
                        height={400}
                    />
                </div>
            </div>

            {/* Preview pannel */}
            {props.preview && (
                <div className="bg-black rounded-sm text-white p-10 text-xl text-center">
                    <div>{props.name}</div>
                    <div>AGED: {props.age} years old</div>
                    <div>Killed on {props.killedOn}</div>
                    <div>submitted by {props.submittedBy}</div>
                </div>
            )}
        </div>
    );
}