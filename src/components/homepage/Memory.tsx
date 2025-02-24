"use client";
import Image from 'next/image';

export default function Memory() {
    return (
      <section className="flex flex-col items-center text-center bg-white py-24">
        <h2 className="text-lg font-semibold uppercase tracking-wide mb-6 text-slate-700">Their Memories</h2>
  
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Old Photo Section */}
          <div className="">
            <h3 className="text-sm font-semibold mb-2 text-slate-700">Old Photo</h3>

            <div className='relative mt-4'>
              <Image
                src="/images/memories/memory-1.jpg"
                alt="Old Memory"
                className="w-64 h-96 object-cover border border-gray-400"
                width={200}
                height={600}
              />
              <div className="bg-black/40 text-white text-xs p-2 mt-2 absolute bottom-0 left-0 right-0">
                <p>KALISA LEONARD</p>
                <p>AGED : 78</p>
              </div>
            </div>
          </div>
  
          {/* Connector */}
          <div className="flex items-center">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-400 text-white">⇄</span>
          </div>
  
          {/* Preserved Photo Section */}
          <div className="">
            <h3 className="text-sm font-semibold mb-2 text-slate-700">Preserved Photo</h3>

            <div className='relative mt-4'>
              <Image
                src="/images/memories/memory-2.jpg"
                alt="Preserved Memory"
                className="w-64 h-90 object-cover border border-gray-400"
                width={200}
                height={400}
              />
            </div>
          </div>
        </div>

        <div className="vector-1 absolute bottom-0 right-0 left-0"> 
            <Image src={'/images/vectors/vector-4.png'} alt={"vector"} width={200} height={100} />
        </div>
      </section>
    );
  }
  