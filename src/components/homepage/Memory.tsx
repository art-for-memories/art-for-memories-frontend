"use client";
import Image from 'next/image';
import MemoryCard from '@/components/cards/MemoryCard';

export default function Memory() {
  return (
    <section className="flex flex-col items-center text-center bg-white py-24 relative">
      <h2 className="text-lg font-semibold uppercase tracking-wide mb-6 text-slate-700">Their Memories</h2>

      <MemoryCard props={{
        oldPhoto: "/images/memories/memory-1.jpg",
        preservedPhoto: "/images/memories/memory-2.jpg",
        name: "KALISA LEONARD",
        age: 78
      }} />

      <div className="vector-1 absolute bottom-0 right-0 left-0">
        <Image src={'/images/vectors/vector-4.png'} alt={"vector"} width={200} height={100} />
      </div>
      <div className="vector-1 absolute bottom-0 right-0">
        <Image src={'/images/vectors/vector-5.png'} alt={"vector"} width={200} height={100} />
      </div>
      <div className="vector-1 absolute bottom-0 right-3">
        <Image src={'/images/vectors/vector-5.png'} alt={"vector"} width={200} height={100} />
      </div>
    </section>
  );
}
