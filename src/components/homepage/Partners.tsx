import Image from 'next/image';

export default function Partners() {
    return (
      <section className="px-6 py-10 md:px-20 lg:px-32 text-center bg-white">
        <h2 className="text-xl font-semibold mb-6 text-slate-700">Our Partners</h2>
        <div className="flex justify-center items-center gap-8">
            <Image src="/images/partners/part-1.png" alt="BRD Logo" className="w-32 object-contain" height={128} width={48} />
            <Image src="/images/partners/part-2.png" alt="IBUKA Logo" className="w-32 object-contain" height={128} width={48} />
        </div>
      </section>
    );
  }
  