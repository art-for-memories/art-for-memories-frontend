/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Navbar from '@/components/dashboard/navbar';
import Sidebar from '@/components/dashboard/sidebar';
import FormModal from '@/components/models/form-model';
import FetchSpinner from '@/components/spinners/fetch-spinner';
import React, { useEffect, useState } from 'react';

interface Video {
    url: string;
}

function Videos() {
    const [isFormOpen, setFormOpen] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isPending, startTransition] = useState(false);
    const [loading, setLoading] = useState(false);
    const [videos, setVideos] = useState([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (!files) return;

        const newFiles: File[] = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type.startsWith('video/')) {
                newFiles.push(file);
            }
        }

        setSelectedFiles(newFiles);
    };

    const uploadFiles = async () => {
        const uploadedFiles: string[] = [];

        for (const file of selectedFiles) {
            const formData = new FormData();

            formData.append('file', file);
            formData.append('upload_preset', 'memories_preset'); // Ensure this preset exists in Cloudinary

            setIsSubmitting(true);

            const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            uploadedFiles.push(data.secure_url);
            setIsSubmitting(false);
        }

        return uploadedFiles;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const uploadedFiles = await uploadFiles();

            const formData = {
                files: uploadedFiles,
            };

            setIsSubmitting(true);

            const response = await fetch('/api/videos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormOpen(false);
                setSelectedFiles([]);
            } else {
                console.error('Failed to submit video');
            }

            setIsSubmitting(false);
        } catch (error) {
            console.error('Error submitting video:', error);
        }
    };

    const getVideos = async () => {
        setLoading(true);

        const response = await fetch('/api/videos');
        const data = await response.json();

        setVideos(data);
        setLoading(false);
    }

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <div>
            <Navbar />

            <div className="min-h-screen flex bg-gray-100">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 p-6">
                    <header>
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl font-semibold text-black">Upload Videos</h1>

                            <button onClick={() => setFormOpen(true)} className="bg-black text-white px-4 py-2 flex items-center rounded cursor-pointer">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </span>
                                <span>Add New</span>
                            </button>
                        </div>

                        <FormModal isOpen={isFormOpen} onClose={() => setFormOpen(false)}>
                            <h3 className="text-slate-700 font-semibold">Upload New Video</h3>

                            <form onSubmit={handleSubmit}>
                                <div className="my-5">
                                    <label className="text-sm text-black font-medium">Video</label>
                                    <div className="border border-gray-300 rounded-md p-2 flex items-center space-x-2 cursor-pointer" onClick={() => document.getElementById('upload-files')?.click()}>
                                        <span className="text-gray-400">📎</span>
                                        <span className="text-gray-400">Attach the video file</span>
                                        <input type="file" className="hidden" multiple id='upload-files' accept="video/*" onChange={handleFileChange} />
                                    </div>
                                </div>

                                {/* File Previews */}
                                {selectedFiles.length > 0 && (
                                    <div className="mt-4 grid grid-cols-2 gap-4">
                                        {selectedFiles.map((file, index) => (
                                            <div key={index} className="relative">
                                                <p className="text-sm text-black">{file.name}</p>
                                                <video width="100%" controls>
                                                    <source src={URL.createObjectURL(file)} type={file.type} />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <div className='flex items-center justify-between mt-5'>
                                    <button type='submit' disabled={isSubmitting || isPending} className="w-auto bg-black text-white flex items-center justify-between py-3 px-4 rounded-[8px] hover:opacity-80">
                                        <span>{isPending ? "Submitting..." : "Submit"}</span>
                                        <span className='ml-5'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07"></path><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M3.5 12h16.83" opacity=".4"></path></svg></span>
                                    </button>
                                </div>
                            </form>
                        </FormModal>
                    </header>

                    {/* Table */}
                    <div className="mt-4">
                        {videos && videos.map((video: Video, index: number) => (
                            <div key={index} className="bg-black rounded-lg flex items-center justify-center relative mx-1 w-[250px] h-[200px] sm:w-[350px] sm:h-[300px] md:w-[250px] md:h-[200px]">
                                <video width="100%" height="100%" controls>
                                    <source src={video.url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ))}

                        {loading && <div className="my-10"><FetchSpinner /></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videos;