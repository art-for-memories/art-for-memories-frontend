import Image from 'next/image';
import React from 'react';

interface Gallery { id: string; name: string; image: string };

const GalleryTable: React.FC<{
    headers: string[]; data: Gallery[];
    onDelete: (id: string) => void;
    onPreview?: (id: string) => void;
}> = ({ headers, data, onDelete, onPreview }) => {
    return (
        <div className='bg-white rounded-xl flex flex-col items-center justify-center p-4 w-full'>
            <table className="w-full text-left whitespace-nowrap">
                <thead className=''>
                    <tr className="bg-gray-100 text-black text-sm">
                        {headers.map((header) => (
                            <th key={header} className="p-4">
                                {header.toUpperCase()}
                            </th>
                        ))}
                        <th className="p-4">ACTIONS</th>
                    </tr>
                </thead>

                <tbody>
                    {data.length === 0 && (
                        <tr>
                            <td colSpan={headers.length + 2} className="text-center">
                                <div className='bg-white rounded-xl flex flex-col items-center justify-center p-4'>
                                    <Image src={'/svgs/empty.svg'} alt='' width={400} height={400} />
                                    <span className='text-slate-700 font-semibold text-base'>No Images found</span>
                                </div>
                            </td>
                        </tr>
                    )}
                    {data.map((Stories) => (
                        <tr key={Stories.id} className="focus:outline-none h-16 border border-gray-100 rounded-lg bg-white text-black text-sm">
                            <td className={`p-4`}>
                                {Stories.name}
                            </td>
                            <td className={`p-4 max-w-[200px] overflow-hidden`}>
                                {Stories.image}
                            </td>
                            <td className="p-4">
                                <button onClick={() => onPreview && onPreview(Stories.id)} className="text-gray-500 ml-2 hover:text-red-500 bg-gray-200 rounded-xl p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                </button>

                                <button onClick={() => onDelete(Stories.id)} className="text-gray-500 ml-2 hover:text-red-500 bg-red-200 rounded-xl p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GalleryTable;