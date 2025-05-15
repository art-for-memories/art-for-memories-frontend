import Image from "next/image";
import React, { useEffect, useState } from "react";

function GalleryForm({ onSuccess, currentImage }: { onSuccess: () => void, currentImage: { id: string; name: string; image: string } | null }) {
    const [formData, setFormData] = useState({
        name: "",
        image: null as File | null,
    });
    const [previewCurrentFile, setPreviewCurrentFile] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name } = e.target;
        setFormData({ ...formData, [name]: e.target.value });
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const uploadedImage = formData.image ? await uploadFile(formData.image) : null;

        try {
            const data: { name: string; image: string; current_image_id?: string } = {
                name: formData.name,
                image: uploadedImage,
            };

            if (currentImage) {
                data.current_image_id = currentImage.id;
            }

            const response = await fetch('/api/gallery', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(data),
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

    useEffect(() => {
        if (currentImage) {
            setFormData({
                name: currentImage.name,
                image: null,
            });
            setPreviewCurrentFile(currentImage.image);
        }
    }, [currentImage]);

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white shadow-lg rounded-3xl text-slate-900">
            <h2 className="text-slate-700 font-semibold">Submit Gallery Image</h2>

            <div className="mb-5 mt-5">
                <label className="block font-semibold">Name:</label>
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
                <label className="block font-semibold">Attach Image</label>
                <input
                    type="file"
                    name="image"
                    onChange={(e) => {
                        const file = e.target.files?.[0];

                        if (file) {
                            if (!file.type.startsWith("image/")) {
                                alert("Please upload a valid image file.");
                                return;
                            }

                            if (file.size > 1024 * 1024) {
                                alert("Image size must be under 1MB.");
                                return;
                            }

                            setFormData({ ...formData, image: file });
                            const reader = new FileReader();
                            reader.onloadend = () => {
                                setPreviewCurrentFile(reader.result as string);
                            };
                            reader.readAsDataURL(file);
                        }
                    }}
                    className="w-full p-2 border rounded"
                    accept="image/*"
                    required
                />
            </div>

            {previewCurrentFile && (
                <div className="mb-5">
                    <label className="block font-semibold ml-2">Preview:</label>
                    <Image
                        width={500}
                        height={500}
                        src={previewCurrentFile}
                        alt="Preview"
                        className="w-full h-auto rounded"
                        unoptimized
                    />
                </div>
            )}

            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700">
                {currentImage ? "Update Image" : "Submit Image"}
            </button>
        </form>
    );
}

export default GalleryForm;
