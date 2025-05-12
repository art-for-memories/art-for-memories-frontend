/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Video } from '@/types/video';
import React, { useEffect, useState } from 'react'

function VideoForm({ onCallback, setFormOpen, currentVideo }: { onCallback: () => void, setFormOpen: React.Dispatch<React.SetStateAction<boolean>>, currentVideo?: Video }) {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isPending, startTransition] = useState(false);
    const [title, setTitle] = useState('');
    const [caption, setCaption] = useState('');
    const [videoPreview, setVideoPreview] = useState<string | null>(null);

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
            formData.append('upload_preset', 'memories_preset');

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

            const formData: { files: string[]; title: string; caption: string; current_video_id?: string } = {
                files: uploadedFiles,
                title,
                caption,
            };

            if (currentVideo) {
                formData['current_video_id'] = currentVideo.id;
            }

            setIsSubmitting(true);

            const response = await fetch('/api/videos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormOpen(false);
                setSelectedFiles([]);
                onCallback();
            } else {
                console.error('Failed to submit video');
            }

            setIsSubmitting(false);
        } catch (error) {
            console.error('Error submitting video:', error);
        }
    };

    useEffect(() => {
        if (currentVideo) {
            setTitle(currentVideo.title || '');
            setCaption(currentVideo.caption || '');
            setVideoPreview(currentVideo.url || null);
        }
    }, []);

    return (<>
        <h3 className="text-slate-700 font-semibold">Upload New Video</h3>

        <form onSubmit={handleSubmit} className='mt-5'>
            <div className="mb-5">
                <label className="block font-semibold text-slate-800">Title</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded text-slate-800"
                    required
                />
            </div>

            <div className="mb-5">
                <label className="block font-semibold text-slate-800">Caption</label>
                <input
                    type="text"
                    name="caption"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="w-full p-2 border rounded text-slate-800"
                    required
                />
            </div>

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

            {/* current video preview */}
            {videoPreview && (
                <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="relative">
                        <p className="text-sm text-black">Current Video</p>
                        <video width="100%" controls>
                            <source src={videoPreview} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}

            {/* Submit Button */}
            <div className='flex items-center justify-between mt-5'>
                <button type='submit' disabled={isSubmitting || isPending} className="w-auto bg-black text-white flex items-center justify-between py-3 px-4 rounded-[8px] hover:opacity-80">
                    <span>{isSubmitting ? "Submitting..." : (currentVideo ? "Save Changes" : "Submit")}</span>
                    <span className='ml-5'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07"></path><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M3.5 12h16.83" opacity=".4"></path></svg></span>
                </button>
            </div>
        </form>
    </>)
}

export default VideoForm