/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from 'next/image';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";

const formSchema = z.object({
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty(),
    email: z.string().email(),
    phoneNumber: z.string().min(10),
    memory: z.string().nonempty(),
    images: z.any().refine((files) => files instanceof FileList && files.length > 0, {
        message: "Please upload at least one image",
    })
});

type FormData = z.infer<typeof formSchema>;

export default function MemoryForm() {
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();
    const [selectedImages, setSelectedImages] = useState<string[]>([]);

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset, setValue } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        const api_url = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL;

        const formData = new FormData();

        formData.append("firstname", data.firstName);
        formData.append("lastname", data.lastName);
        formData.append("email", data.email);
        formData.append("phone", data.phoneNumber);
        formData.append("memories", data.memory);

        Array.from(data.images).forEach((file) => {
            formData.append("images", file as Blob);
        });

        startTransition(async () => {
            try {
                const response = await fetch(`${api_url}/memories`, {
                    method: "POST",
                    body: formData,
                });

                if (response.ok) {
                    reset();
                    setSelectedImages([]);
                    setSuccessMessage("Memory submitted successfully!");
                    setErrorMessage(null);
                } else {
                    const errorData = await response.json();

                    setErrorMessage(errorData.message || "Failed to submit memory. Please try again later.");
                    setSuccessMessage(null);
                }
            } catch (error) {
                setErrorMessage("Failed to submit memory. Please try again later.");
                setSuccessMessage(null);
            }
        });
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (!files) return;

        const newImages: string[] = [];

        for (let i = 0; i < files.length; i++) {
            newImages.push(URL.createObjectURL(files[i]));
        }

        setSelectedImages(newImages);
        setValue("images", files);
    };

    return (
        <div className="max-w-md md:max-w-lg mx-auto p-6 bg-white">
            <div className="flex items-center space-x-2 justify-between mb-4">
                <div className="text-2xl font-bold flex items-center">
                    <span className="bg-black text-white px-1 py-1 rounded">
                        <div><Image src={'/images/logo.PNG'} alt={"logo"} width={40} height={40} /></div>
                    </span>
                    <span className="text-black ml-2 text-sm">Art for Memories.</span>
                </div>
            </div>

            <h2 className="text-xl font-semibold text-black">Submit Your Memory</h2>

            <p className="text-gray-500 mb-5 mt-3">
                Fill your personal details to continue for your Memory Submission
            </p>

            {/* Form Fields */}
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm text-black font-bold">First name</label>
                        <input
                            type="text"
                            placeholder="King"
                            className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                            {...register("firstName")}
                        />
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                    </div>
                    <div>
                        <label className="text-sm text-black font-bold">Last name</label>
                        <input
                            type="text"
                            placeholder="Ngabo"
                            className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                            {...register("lastName")}
                        />
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label className="text-sm text-black font-bold">Email</label>
                    <input
                        type="email"
                        placeholder="Enter email here"
                        className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                        {...register("email")}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                {/* Phone Number */}
                <div>
                    <label className="text-sm text-black font-bold">Phone Number</label>
                    <div className="flex border border-gray-300 rounded-[8px] overflow-hidden">
                        <span className="px-3 py-2 bg-gray-100 border-r border-gray-300 text-black">+250</span>
                        <input
                            type="text"
                            placeholder="785119320"
                            className="w-full p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                            {...register("phoneNumber")}
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
                    </div>
                </div>

                {/* Memory Selection */}
                <div>
                    <label className="text-sm text-black font-bold">
                        Select the memory to share
                    </label>
                    <select
                        className="w-full border border-gray-300 rounded-[8px] px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                        {...register("memory")}
                    >
                        <option>Select one of these options</option>
                        <option value="birthday">Birthday</option>
                        <option value="wedding">Wedding</option>
                        <option value="graduation">Graduation</option>
                    </select>
                    {errors.memory && <p className="text-red-500 text-sm">{errors.memory.message}</p>}
                </div>

                {/* File Upload */}
                <div>
                    <label className="text-sm text-black font-medium">Pictures</label>
                    <div className="border border-gray-300 rounded-md p-2 flex items-center space-x-2 cursor-pointer" onClick={() => document.getElementById('upload-images')?.click()}>
                        <span className="text-gray-400">📎</span>
                        <span className="text-gray-400">Attach the picture of your loved ones</span>
                        <input type="file" className="hidden" multiple id='upload-images' onChange={handleImageChange} />
                    </div>
                    {errors.images && <p className="text-red-500 text-sm">{String(errors.images.message)}</p>}
                </div>

                {/* Image Previews */}
                {selectedImages.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        {selectedImages.map((image, index) => (
                            <div key={index} className="relative">
                                <Image src={image} alt={`Selected ${index}`} className="w-full h-32 object-cover rounded-md" width={100} height={100} />
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

            <div className='mt-5 font-semibold'>
                {successMessage && <p className="text-green-500">{successMessage}</p>}
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </div>
        </div>
    );
}