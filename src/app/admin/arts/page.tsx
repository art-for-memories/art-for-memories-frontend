'use client';

import ArtsTable from '@/components/dashboard/arts-table';
import Navbar from '@/components/dashboard/navbar'
import Sidebar from '@/components/dashboard/sidebar'
import FormModal from '@/components/models/form-model'
import FetchSpinner from '@/components/spinners/fetch-spinner';
import { Art } from '@/types/arts';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function FinalArt() {
    const [isFormOpen, setFormOpen] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [oldPhoto, setOldPhoto] = useState<File | null>(null);
    const [preservedPhoto, setPreservedPhoto] = useState<File | null>(null);
    const [oldPhotoPreview, setOldPhotoPreview] = useState<string | null>(null);
    const [preservedPhotoPreview, setPreservedPhotoPreview] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [arts, setArts] = useState<Art[]>([]);
    const [loading, setLoading] = useState(false);

    const headers = ['Name', 'Age', 'Old Photo', 'Preserved Photo'];

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, setFile: React.Dispatch<React.SetStateAction<File | null>>, setPreview: React.Dispatch<React.SetStateAction<string | null>>) => {
        const files = event.target.files;

        if (!files || files.length === 0) return;

        const file = files[0];
        if (file.type.startsWith('image/')) {
            setFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const uploadFile = async (file: File) => {
        const formData = new FormData();

        formData.append('file', file);
        formData.append('upload_preset', 'memories_preset'); // Ensure this preset exists in Cloudinary

        const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`, {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        return data.secure_url;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            const uploadedOldPhoto = oldPhoto ? await uploadFile(oldPhoto) : null;
            const uploadedPreservedPhoto = preservedPhoto ? await uploadFile(preservedPhoto) : null;

            const formData = {
                name,
                age,
                oldPhoto: uploadedOldPhoto,
                preservedPhoto: uploadedPreservedPhoto,
            };

            const response = await fetch('/api/preserved-memories', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormOpen(false);
                setName('');
                setAge('');
                setOldPhoto(null);
                setPreservedPhoto(null);
                setOldPhotoPreview(null);
                setPreservedPhotoPreview(null);
                getAllArts();
            } else {
                console.error('Failed to submit art');
            }
        } catch (error) {
            console.error('Error submitting art:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const getAllArts = async () => {
        try {
            setLoading(true);

            const response = await fetch('/api/preserved-memories');
            const data = await response.json();

            if (response.ok) {
                setArts(data);
            } else {
                throw new Error('Failed to fetch arts');
            }

            setLoading(false);
        } catch { }
    };

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this art?')) {
            setLoading(true);

            await fetch(`/api/preserved-memories`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id }),
            });

            setLoading(false);
            setArts(arts.filter((art) => art.id !== id));
        }
    };

    const handlePreview = (art: Art) => {
        console.log(art);
    };

    useEffect(() => {
        getAllArts();
    }, []);

    return (<>
        <div>
            <Navbar />

            <div className="min-h-screen flex bg-gray-100">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 p-6">
                    <header>
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl font-semibold text-black">Preserved Memories</h1>

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
                                    <label className="text-sm text-black font-bold">Name</label>
                                    <input
                                        type="text"
                                        placeholder="eg: king"
                                        className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="my-5">
                                    <label className="text-sm text-black font-bold">Age</label>
                                    <input
                                        type="number"
                                        placeholder="79"
                                        className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </div>

                                <div className="my-5">
                                    <label className="text-sm text-black font-medium">Old Photo</label>
                                    <div className="border border-gray-300 rounded-md p-2 flex items-center space-x-2 cursor-pointer" onClick={() => document.getElementById('upload-old-photo')?.click()}>
                                        <span className="text-gray-400">📎</span>
                                        <span className="text-gray-400">Attach the old photo</span>
                                        <input type="file" className="hidden" id='upload-old-photo' accept="image/*" onChange={(e) => handleFileChange(e, setOldPhoto, setOldPhotoPreview)} />
                                    </div>
                                    {oldPhotoPreview && (
                                        <div className="mt-4">
                                            <Image width={100} height={100} src={oldPhotoPreview} alt="Old Photo Preview" className="w-full h-32 object-cover rounded-md" />
                                        </div>
                                    )}
                                </div>

                                <div className="my-5">
                                    <label className="text-sm text-black font-medium">Preserved Photo</label>
                                    <div className="border border-gray-300 rounded-md p-2 flex items-center space-x-2 cursor-pointer" onClick={() => document.getElementById('upload-preserved-photo')?.click()}>
                                        <span className="text-gray-400">📎</span>
                                        <span className="text-gray-400">Attach the preserved photo</span>
                                        <input type="file" className="hidden" id='upload-preserved-photo' accept="image/*" onChange={(e) => handleFileChange(e, setPreservedPhoto, setPreservedPhotoPreview)} />
                                    </div>
                                    {preservedPhotoPreview && (
                                        <div className="mt-4">
                                            <Image width={100} height={100} src={preservedPhotoPreview} alt="Preserved Photo Preview" className="w-full h-32 object-cover rounded-md" />
                                        </div>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className='flex items-center justify-between mt-5'>
                                    {isSubmitting && <div className="my-10"><FetchSpinner /></div>}
                                    {!isSubmitting && <button type='submit' disabled={isSubmitting} className="w-auto bg-black text-white flex items-center justify-between py-3 px-4 rounded-[8px] hover:opacity-80">
                                        <span className='ml-5'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07"></path><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M3.5 12h16.83" opacity=".4"></path></svg></span>
                                    </button>}
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
                        {loading && <div className="my-10"><FetchSpinner /></div>}
                        <ArtsTable headers={headers} data={arts} onDelete={handleDelete} onPreview={handlePreview} />
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default FinalArt;