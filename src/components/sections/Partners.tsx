import Image from 'next/image';

export default function Partners() {
  return (
    <section className="px-6 py-10 md:px-20 lg:px-32 text-center bg-white rounded-tr-3xl rounded-tl-3xl">
      <h2 className="text-3xl md:text-5xl underline mb-12 font-semibold font-heading text-slate-700">Our Partners</h2>

      <div className="grid grid-cols-2 md:flex justify-center items-center gap-6 md:gap-12">
        <Image
          src="/images/partners/part-1.png"
          alt="BRD Logo"
          className="w-24 md:w-32 object-contain"
          height={128}
          width={128}
        />
        <Image
          src="/images/partners/part-2.png"
          alt="IBUKA Logo"
          className="w-24 md:w-32 object-contain"
          height={128}
          width={128}
        />
      </div>
    </section>
  );
}
