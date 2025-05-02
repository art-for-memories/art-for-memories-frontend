import React, { useState } from "react";

function GalleryForm({ onSuccess }: { onSuccess: () => void }) {
    const [formData, setFormData] = useState({
        name: "",
        image: null as File | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, files } = e.target;

        if (name === "image" && files && files.length > 0) {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: e.target.value });
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.image) {
            alert("Please select an image file.");
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("image", formData.image);

        try {
            const response = await fetch('/api/gallery', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                alert('Image submitted successfully!');
                setFormData({
                    name: "",
                    image: null,
                });
                onSuccess();
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Failed to submit image. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting image:', error);
            alert('Failed to submit image. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white shadow-lg rounded-3xl text-slate-900">
            <h2 className="text-2xl font-bold mb-4">Submit Image</h2>

            <div className="mb-5">
                <label className="block font-semibold ml-2">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>

            <div className="mb-5">
                <label className="block font-semibold ml-2">Image:</label>
                <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    accept="image/*"
                    required
                />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700">
                Submit Image
            </button>
        </form>
    );
}

export default GalleryForm;
