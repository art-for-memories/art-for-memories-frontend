'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

function Gallery() {
    const [galleryImages, setGalleryImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchGalleryImages = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/gallery', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch gallery images');
            }

            const data = await response.json();

            setGalleryImages(data.map((item: { id: string; name: string; image: string }) => item.image));
        } catch (error) {
            console.error('Error fetching gallery images:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGalleryImages();
    }, []);

    return (
        <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="overflow-hidden h-full"
        >
            {loading && (
                <SwiperSlide>
                    <div className="flex items-center justify-center h-[400px] bg-white">
                        <svg className="animate-spin h-10 w-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                        </svg>
                    </div>
                </SwiperSlide>
            )}

            {!loading && galleryImages.length === 0 && (
                <SwiperSlide>
                    <Image
                        src={'/images/memory-logo.png'}
                        alt={`Art for memories`}
                        className="w-full h-full max-h-[500px] object-cover rounded-tr-3xl rounded-br-3xl"
                        width={500}
                        height={500}
                    />
                </SwiperSlide>
            )}

            {!loading && galleryImages.map((src, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full max-h-[500px] object-cover rounded-tr-3xl rounded-br-3xl"
                        width={500}
                        height={500}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Gallery