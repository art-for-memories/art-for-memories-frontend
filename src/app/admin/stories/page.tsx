'use client';

import Navbar from '@/components/dashboard/navbar'
import Sidebar from '@/components/dashboard/sidebar'
import FormModal from '@/components/models/form-model';
import React, { useEffect, useState } from 'react'
import StoriesTable from '@/components/dashboard/StoriesTable';
import FetchSpinner from '@/components/spinners/fetch-spinner';

interface Story {
    id: string;
    title: string;
    author: string;
    date: string;
    files: string[];
    status: string;
    storyType: string;
}

function Stories() {
    const [isFormOpen, setFormOpen] = useState(false);
    const [storyType, setStoryType] = useState('Written Story');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isPending, startTransition] = useState(false);

    const [stories, setStories] = useState<Story[]>([]);
    const [loading, setLoading] = useState(false);

    const headers = ['title', 'author', 'date', 'files', 'status', 'storyType'];

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (!files) return;

        const newFiles: File[] = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
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
            formData.append('upload_preset', 'memories_preset');

            const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            uploadedFiles.push(data.secure_url);
        }

        return uploadedFiles;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        setIsSubmitting(true);

        try {
            const uploadedFiles = await uploadFiles();

            const formData = {
                storyType,
                title,
                author,
                date,
                files: uploadedFiles,
            };

            const response = await fetch('/api/stories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormOpen(false);
                // Reset form fields
                setStoryType('Written Story');
                setTitle('');
                setAuthor('');
                setDate('');
                setSelectedFiles([]);
            } else {
                console.error('Failed to submit story');
            }
        } catch (error) {
            console.error('Error submitting story:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const getAllStories = async () => {
        try {
            setLoading(true);

            const response = await fetch('/api/stories');

            if (response.ok) {
                const stories = await response.json();
                setStories(stories);
            } else {
                console.error('Failed to fetch stories');
            }

            setLoading(false);
        } catch (error) {
            console.error('Error fetching stories:', error);
        }
    };

    const handleDelete = async (id: string) => {
        startTransition(true);

        try {
            setLoading(true);

            const response = await fetch(`/api/stories`, {
                method: 'DELETE',
                body: JSON.stringify({ id }),
            });

            if (response.ok) {
                setStories(stories.filter((story) => story.id !== id));
                setLoading(false);
            } else {
                console.error('Failed to delete story');
            }
        } catch (error) {
            console.error('Error deleting story:', error);
        } finally {
            startTransition(false);
        }
    };

    useEffect(() => {
        getAllStories();
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
                            <h1 className="text-xl font-semibold text-black">Their Stories</h1>

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
                            <h3 className="text-slate-700 font-semibold">Upload New Story</h3>

                            <form onSubmit={handleSubmit}>
                                <div className="my-5">
                                    <label className="text-sm text-black font-bold">Story Type</label>
                                    <select
                                        className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                                        value={storyType}
                                        onChange={(e) => setStoryType(e.target.value)}
                                    >
                                        <option value="Written Story">Written Story</option>
                                        <option value="Illustrated">Illustrated</option>
                                    </select>
                                </div>

                                <div className="my-5">
                                    <label className="text-sm text-black font-bold">Title</label>
                                    <input
                                        type="text"
                                        placeholder="Catchy Title"
                                        className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>

                                <div className="my-5">
                                    <label className="text-sm text-black font-bold">Author</label>
                                    <input
                                        type="text"
                                        placeholder="King"
                                        className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                    />
                                </div>

                                <div className="my-5">
                                    <label className="text-sm text-black font-bold">Date</label>
                                    <input
                                        type="date"
                                        className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </div>

                                <div className="my-5">
                                    <label className="text-sm text-black font-medium">Document</label>
                                    <div className="border border-gray-300 rounded-md p-2 flex items-center space-x-2 cursor-pointer" onClick={() => document.getElementById('upload-files')?.click()}>
                                        <span className="text-gray-400">📎</span>
                                        <span className="text-gray-400">Attach the file your loved ones</span>
                                        <input type="file" className="hidden" multiple id='upload-files' accept=".pdf,.docx" onChange={handleFileChange} />
                                    </div>
                                </div>

                                {/* File Previews */}
                                {selectedFiles.length > 0 && (
                                    <div className="mt-4 grid grid-cols-2 gap-4">
                                        {selectedFiles.map((file, index) => (
                                            <div key={index} className="relative">
                                                <p className="text-sm text-black">{file.name}</p>
                                                {file.type === 'application/pdf' ? (
                                                    <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                                        Open PDF
                                                    </a>
                                                ) : (
                                                    <p className="text-gray-500">Preview not available</p>
                                                )}
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

                    <div className="flex border border-gray-200 bg-white rounded px-2 items-center mt-5">
                        <span className="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </span>
                        <input type="text" placeholder="Enter staff name..." className="p-2 focus:outline-none text-slate-700" />
                    </div>

                    {/* Table */}
                    <div className="mt-4">
                        <StoriesTable
                            headers={headers}
                            data={stories}
                            onDelete={handleDelete}
                            onPreview={() => { }}
                            onApproved={() => { }}
                        />
                        {loading && <div className="my-10"><FetchSpinner /></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stories