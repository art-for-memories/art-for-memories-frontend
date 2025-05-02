import React, { useState } from "react";
import Tiptap from "./Tiptap";

function WriteStoryForm() {
    const [formData, setFormData] = useState({
        title: "",
        caption: "",
        author: "",
        type: "",
        date: "",
        image: null,
        kinyarwandaContent: "",
        englishContent: "",
        frenchContent: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleContentChange = (field: string, content: string): void => {
        setFormData({ ...formData, [field]: content });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/stories', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
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
                });
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Failed to submit story. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting story:', error);
            alert('Failed to submit story. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white shadow-lg rounded-3xl text-slate-900">
            <h2 className="text-2xl font-bold mb-4">Write Your Story</h2>

            <div className="mb-5">
                <label className="block font-semibold ml-2">Title:</label>
                <input type="text" name="title" onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>

            <div className="mb-5">
                <label className="block font-semibold ml-2">Caption:</label>
                <input type="text" name="caption" onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>

            <div className="mb-5">
                <label className="block font-semibold ml-2">Author:</label>
                <input type="text" name="author" onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>

            <div className="mb-5">
                <label className="block font-semibold ml-2">Type:</label>
                <select name="type" onChange={handleChange} className="w-full p-2 border rounded" required>
                    <option value="">Select Type</option>
                    <option value="Written Story">Written Story</option>
                    <option value="Illustrated">Illustrated</option>
                </select>
            </div>

            <div className="mb-5">
                <label className="block font-semibold ml-2">Published Date:</label>
                <input type="date" name="date" onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>

            <div className="mb-5">
                <label className="block font-semibold ml-2">Image url:</label>
                <input type="text" name="image" onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>

            <div className="mb-5">
                <label className="block font-semibold ml-2">Kinyarwanda Content:</label>
                <Tiptap onContentChange={(content: string) => handleContentChange('kinyarwandaContent', content)} />
            </div>

            <div className="mb-5">
                <label className="block font-semibold ml-2">English Content:</label>
                <Tiptap onContentChange={(content: string) => handleContentChange('englishContent', content)} />
            </div>

            <div className="mb-5">
                <label className="block font-semibold ml-2">French Content:</label>
                <Tiptap onContentChange={(content: string) => handleContentChange('frenchContent', content)} />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700">
                Submit Story
            </button>
        </form>
    );
}

export default WriteStoryForm;
