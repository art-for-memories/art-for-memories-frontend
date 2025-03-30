import React, { useState } from "react";
import Tiptap from "./Tiptap";

function WriteStoryForm() {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        story: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleContentChange = (content: string): void => {
        setFormData({ ...formData, story: content });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        alert("Story submitted!");
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white shadow-lg rounded-3xl text-slate-900">
            <h2 className="text-2xl font-bold mb-4">Write Your Story</h2>

            <div className="mb-5">
                <label className="block font-semibold ml-2">Title:</label>
                <input type="text" name="title" onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>

            <div className="mb-5">
                <label className="block font-semibold mb-2">Story:</label>
                <Tiptap onContentChange={handleContentChange} />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700">
                Submit Story
            </button>
        </form>
    );
}

export default WriteStoryForm;
