import React, { useEffect, useState } from "react";
import Tiptap from "./Tiptap";
import { Stories } from "@/types/stories";

function WriteStoryForm({ currentStory }: { currentStory: Stories | null }) {
    const [formData, setFormData] = useState({
        title: "",
        caption: "",
        author: "",
        type: "",
        date: "",
        image: null as File | null,
        kinyarwandaContent: "",
        englishContent: "",
        frenchContent: "",
        file: null as File | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files && e.target.files.length > 0) {
            console.log(e.target.files[0])
            setFormData({ ...formData, file: e.target.files[0] });
        }
    };

    const handleContentChange = (field: string, content: string): void => {
        setFormData({ ...formData, [field]: content });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            Object.entries(formData).forEach(([key, value]) => {
                if (key === "file" || key === "image" && value instanceof File) {
                    if (value !== null) {
                        formDataToSend.append(key, value);
                    }
                } else if (key !== "file" && value) {
                    formDataToSend.append(key, value as string);
                }
            });

            if (currentStory) {
                formDataToSend.append("current_story_id", currentStory.id);
            }

            const response = await fetch('/api/stories', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                body: formDataToSend,
            });

            if (response.ok) {
                alert('Story submitted successfully!');

                setFormData({
                    title: "",
                    caption: "",
                    author: "",
                    type: "",
                    date: "",
                    image: null,
                    kinyarwandaContent: "",
                    englishContent: "",
                    frenchContent: "",
                    file: null,
                });

                window.location.reload();
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Failed to submit story. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting story:', error);
            alert('Failed to submit story. Please try again later.');
        }
    };

    useEffect(() => {
        if (currentStory) {
            setFormData({
                title: currentStory.title,
                caption: currentStory.caption,
                author: currentStory.author,
                type: currentStory.type,
                date: currentStory.date,
                image: currentStory.image ?? null,
                kinyarwandaContent: currentStory.kinyarwandaContent,
                englishContent: currentStory.englishContent,
                frenchContent: currentStory.frenchContent,
                file: null
            });
        }
    }, [currentStory]);

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white shadow-lg rounded-3xl text-slate-900" encType="multipart/form-data">
            <h2 className="text-2xl font-bold mb-4">Write Your Story</h2>

            <div className="mb-5">
                <label className="block font-semibold ml-2">Title:</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>

            <div className="mb-5">
                <label className="block font-semibold ml-2">Caption:</label>
                <input type="text" name="caption" value={formData.caption} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>

            <div className="mb-5">
                <label className="block font-semibold ml-2">Author:</label>
                <input type="text" name="author" value={formData.author} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>

            <div className="mb-5">
                <label className="block font-semibold ml-2">Type:</label>
                <select name="type" value={formData.type} onChange={handleChange} className="w-full p-2 border rounded" required>
                    <option value="">Select Type</option>
                    <option value="Written Story">Written Story</option>
                    <option value="Illustrated">Illustrated</option>
                </select>
            </div>

            <div className="mb-5">
                <label className="block font-semibold ml-2">Published Date:</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>

            <div className="mb-5">
                <label className="block font-semibold ml-2">Image</label>
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                            const file = e.target.files[0];
                            const reader = new FileReader();

                            reader.readAsDataURL(file);

                            setFormData({ ...formData, image: file });
                        }
                    }}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>

            {formData.type === "Illustrated" && (
                <div className="mb-5">
                    <label className="block font-semibold ml-2">Upload File:</label>
                    <input type="file" name="file" onChange={handleFileChange} className="w-full p-2 border rounded" required />
                </div>
            )}

            {formData.type === "Written Story" && (
                <>
                    <div className="mb-5">
                        <label className="block font-semibold ml-2">Kinyarwanda Content:</label>
                        <Tiptap value={formData.kinyarwandaContent} onContentChange={(content: string) => handleContentChange('kinyarwandaContent', content)} />
                    </div>

                    <div className="mb-5">
                        <label className="block font-semibold ml-2">English Content:</label>
                        <Tiptap value={formData.englishContent} onContentChange={(content: string) => handleContentChange('englishContent', content)} />
                    </div>

                    <div className="mb-5">
                        <label className="block font-semibold ml-2">French Content:</label>
                        <Tiptap value={formData.frenchContent} onContentChange={(content: string) => handleContentChange('frenchContent', content)} />
                    </div>
                </>
            )}

            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700">
                {currentStory ? "Update Story" : "Submit Story"}
            </button>
        </form>
    );
}

export default WriteStoryForm;
