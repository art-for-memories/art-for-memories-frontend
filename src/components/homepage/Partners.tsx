import Image from 'next/image';

export default function Partners() {
    return (
      <section className="py-24 text-center bg-white">
        <h2 className="text-xl font-semibold mb-6">Our Partners</h2>
        <div className="flex justify-center items-center gap-8">
            <Image src="/images/partners/part-1.png" alt="BRD Logo" className="h-32 md:h-16 object-contain" height={128} width={48} />
            <Image src="/images/partners/part-2.png" alt="IBUKA Logo" className="h-12 md:h-16 object-contain" height={128} width={48} />
        </div>
      </section>
    );
  }
  