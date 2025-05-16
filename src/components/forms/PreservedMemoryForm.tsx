import React, { useEffect, useState } from 'react'
import FetchSpinner from '../spinners/fetch-spinner';
import Image from 'next/image';
import { Art } from '@/types/arts';

function PreservedMemoryForm({ onCallback, currentMemory }: { onCallback: () => void; currentMemory: Art | null }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('0');
    const [oldPhoto, setOldPhoto] = useState<File | null>(null);
    const [preservedPhoto, setPreservedPhoto] = useState<File | null>(null);
    const [oldPhotoPreview, setOldPhotoPreview] = useState<string | null>(null);
    const [preservedPhotoPreview, setPreservedPhotoPreview] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

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

            const formData: {
                name: string;
                age: string;
                oldPhoto: string | null;
                preservedPhoto: string | null;
                current_memory_id?: string;
            } = {
                name,
                age,
                oldPhoto: uploadedOldPhoto,
                preservedPhoto: uploadedPreservedPhoto,
            };

            if (currentMemory) {
                formData['current_memory_id'] = currentMemory.id;
            }

            const response = await fetch('/api/preserved-memories', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setName('');
                setAge('');
                setOldPhoto(null);
                setPreservedPhoto(null);
                setOldPhotoPreview(null);
                setPreservedPhotoPreview(null);
                onCallback();
            } else {
                console.error('Failed to submit art');
            }
        } catch (error) {
            console.error('Error submitting art:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (currentMemory) {
            setName(currentMemory.name);
            setAge(currentMemory.age.toString());
            setOldPhotoPreview(currentMemory.oldPhoto);
            setPreservedPhotoPreview(currentMemory.preservedPhoto);
        }
    }, [currentMemory]);

    return (<>
        <h3 className="text-slate-700 font-semibold">Upload New Memory</h3>

        <form onSubmit={handleSubmit} className='mt-5'>
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
                <label className="text-sm text-black font-medium">Old Photo</label>
                <div className="border border-gray-300 rounded-md p-2 flex items-center space-x-2 cursor-pointer" onClick={() => document.getElementById('upload-old-photo')?.click()}>
                    <span className="text-gray-400">📎</span>
                    <span className="text-gray-400">Attach the old photo</span>
                    <input
                        type="file"
                        className="hidden"
                        id='upload-old-photo'
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file && file.size > 1024 * 1024) {
                                alert('File size must be under 1MB');
                                return;
                            }
                            handleFileChange(e, setOldPhoto, setOldPhotoPreview);
                        }}
                    />
                </div>
                {oldPhotoPreview && (
                    <div className="mt-4">
                        <Image width={500} height={500} src={oldPhotoPreview} alt="Old Photo Preview" className="w-full h-32 object-cover rounded-md" />
                    </div>
                )}
            </div>

            <div className="my-5">
                <label className="text-sm text-black font-medium">Preserved Photo</label>
                <div className="border border-gray-300 rounded-md p-2 flex items-center space-x-2 cursor-pointer" onClick={() => document.getElementById('upload-preserved-photo')?.click()}>
                    <span className="text-gray-400">📎</span>
                    <span className="text-gray-400">Attach the preserved photo</span>
                    <input
                        type="file"
                        className="hidden"
                        id='upload-preserved-photo'
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file && file.size > 1024 * 1024) {
                                alert('File size must be under 1MB');
                                return;
                            }
                            handleFileChange(e, setPreservedPhoto, setPreservedPhotoPreview);
                        }}
                    />
                </div>
                {preservedPhotoPreview && (
                    <div className="mt-4">
                        <Image width={500} height={500} src={preservedPhotoPreview} alt="Preserved Photo Preview" className="w-full h-32 object-cover rounded-md" />
                    </div>
                )}
            </div>

            {/* Submit Button */}
            <div className='flex items-center justify-between mt-5'>
                {isSubmitting && <div className="my-10"><FetchSpinner /></div>}
                {!isSubmitting && <button type='submit' disabled={isSubmitting} className="w-auto bg-black text-white flex items-center justify-between py-3 px-4 rounded-[8px] hover:opacity-80">
                    <span>{currentMemory ? 'Save Changes' : 'Submit'}</span>
                    <span className='ml-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07"></path><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M3.5 12h16.83" opacity=".4"></path></svg></span>
                </button>}
            </div>
        </form>
    </>)
}

export default PreservedMemoryForm