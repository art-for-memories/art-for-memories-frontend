'use client';

import Image from 'next/image';
import React, { useState } from 'react';

function StoryForm({ onSuccess }: { onSuccess: () => void }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [storyType, setStoryType] = useState('Written Story');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (!files) return;

        const newFiles: File[] = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                newFiles.push(file);
            } else {
                setErrorMessage('Only PDF or DOCX files are allowed.');
            }
        }

        setSelectedFiles(newFiles);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (!files) return;

        const newImages: File[] = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type.startsWith('image/')) {
                newImages.push(file);
            } else {
                setErrorMessage('Only image files are allowed.');
            }
        }

        setSelectedImages(newImages);
    };

    const uploadFiles = async (files: File[]): Promise<string[]> => {
        const uploadedFiles: string[] = [];
        
        setLoading(true);

        for (const file of files) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'memories_preset'); // Ensure this preset exists in Cloudinary

            const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            uploadedFiles.push(data.secure_url);
        }

        setLoading(false);
        return uploadedFiles;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!firstName || !lastName || !email || !phone || selectedFiles.length === 0) {
            setErrorMessage('All fields are required, and at least one file must be uploaded.');
            return;
        }

        try {
            setLoading(true);
            setErrorMessage(null);
            setSuccessMessage(null);

            const uploadedFiles = await uploadFiles(selectedFiles);
            const uploadedImages = await uploadFiles(selectedImages);

            const formData = {
                firstName,
                lastName,
                email,
                phone,
                files: uploadedFiles,
                storyType,
                title,
                author,
                date,
                images: uploadedImages,
            };

            const response = await fetch('/api/stories', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhone('');
                setSelectedFiles([]);
                setSelectedImages([]);
                setSuccessMessage('Story submitted successfully!');
                setErrorMessage(null);
                onSuccess();
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Failed to submit story. Please try again later.');
                setSuccessMessage(null);
            }
        } catch {
            setErrorMessage('Failed to submit story. Please try again later.');
            setSuccessMessage(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md md:max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-black mb-4">Submit Your Story</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm text-black font-bold">First Name</label>
                        <input
                            type="text"
                            placeholder="King"
                            className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="text-sm text-black font-bold">Last Name</label>
                        <input
                            type="text"
                            placeholder="Ngabo"
                            className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label className="text-sm text-black font-bold">Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter email here"
                        className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Phone Number */}
                <div>
                    <label className="text-sm text-black font-bold">Phone Number</label>
                    <div className="flex border border-gray-300 rounded-md overflow-hidden">
                        <span className="px-3 py-2 bg-gray-100 border-r border-gray-300 text-black">+250</span>
                        <input
                            type="text"
                            placeholder="785119320"
                            className="w-full p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>

                {/* Story Type */}
                <div>
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

                {/* Title */}
                <div>
                    <label className="text-sm text-black font-bold">Story Title</label>
                    <input
                        type="text"
                        placeholder="Catchy Title"
                        className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Author */}
                <div>
                    <label className="text-sm text-black font-bold">Author</label>
                    <input
                        type="text"
                        placeholder="Author Name"
                        className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="text-sm text-black font-bold">Date</label>
                    <input
                        type="date"
                        className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label className="text-sm text-black font-bold">Images</label>
                    <div
                        className="border border-gray-300 rounded-md p-2 flex items-center space-x-2 cursor-pointer"
                        onClick={() => document.getElementById('upload-images')?.click()}
                    >
                        <span className="text-gray-400">📎</span>
                        <span className="text-gray-400">Attach images</span>
                        <input
                            type="file"
                            className="hidden"
                            multiple
                            id="upload-images"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                </div>

                {/* Image Previews */}
                {selectedImages.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        {selectedImages.map((file, index) => (
                            <div key={index} className="relative">
                                <Image
                                    width={100}
                                    height={100}
                                    src={URL.createObjectURL(file)}
                                    alt={file.name}
                                    className="w-full h-32 object-cover rounded-md"
                                />
                                <p className="text-sm text-black mt-2">{file.name}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* File Upload */}
                <div>
                    <label className="text-sm text-black font-bold">Story Document (PDF or DOCX)</label>
                    <div
                        className="border border-gray-300 rounded-md p-2 flex items-center space-x-2 cursor-pointer"
                        onClick={() => document.getElementById('upload-files')?.click()}
                    >
                        <span className="text-gray-400">📎</span>
                        <span className="text-gray-400">Attach PDF or DOCX</span>
                        <input
                            type="file"
                            className="hidden"
                            multiple
                            id="upload-files"
                            onChange={handleFileChange}
                            accept=".pdf,.docx"
                        />
                    </div>
                </div>

                {/* File Previews */}
                {selectedFiles.length > 0 && (
                    <div className="mt-4">
                        <ul className="list-disc pl-5">
                            {selectedFiles.map((file, index) => (
                                <li key={index} className="text-sm text-gray-700">
                                    {file.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Submit Button */}
                <div className="flex items-center justify-between mt-5">
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-auto bg-black text-white flex items-center justify-between py-3 px-4 rounded-md hover:opacity-80 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <span>{loading ? "Submitting..." : "Submit"}</span>
                    </button>
                </div>
            </form>

            {/* Success/Error Messages */}
            <div className="mt-5 font-semibold">
                {successMessage && <p className="text-green-500">{successMessage}</p>}
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </div>
        </div>
    );
}

export default StoryForm;