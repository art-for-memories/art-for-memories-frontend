import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  path?: string;
}

const TopHero = ({ title, path }: HeroSectionProps) => {
  return (
    <section className="bg-black text-white py-10 relative flex items-center justify-center h-[250px]">
      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold flex items-center">
            <span className="bg-black text-white px-1 py-1 rounded">
              <div><Image src={'/images/logo.PNG'} alt={"logo"} width={100} height={100} /></div>
            </span>
          </div>
        </div>

        <div>
          {/* Title */}
          <h1 className="text-3xl font-bold mt-2">{title}</h1>

          {/* Breadcrumbs */}
          <div className="mt-3 flex items-center space-x-2 font-semibold ml-2">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>

            <span className="text-gray-500 mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07"></path><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M3.5 12h16.83" opacity=".4"></path></svg>
            </span>

            <Link href="#" className="border border-gray-200 px-4 py-1 rounded-full transition">
              {path ? path : "all"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHero;
