import MemoryCard from '@/components/cards/MemoryCard';

export default function Memory() {
  return (
    <section className="flex flex-col items-center text-center bg-white py-24 relative">
      <h2 className="mb-16 font-semibold text-4xl md:text-6xl font-heading text-slate-700">Their Memories</h2>

      <MemoryCard props={{
        id: '1',
        oldPhoto: "/images/memories/memory-1.jpg",
        preservedPhoto: "/images/memories/memory-2.jpg",
        name: "KALISA LEONARD",
        age: 78
      }} />
    </section>
  );
}
