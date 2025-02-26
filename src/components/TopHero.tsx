import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  path?: string;
}

const TopHero = ({ title, path }: HeroSectionProps) => {
  return (
    <div className="bg-black text-white py-10 relative flex items-center justify-center h-[250px]">
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
          <div className="mt-3">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
            <span className="text-gray-500 mx-2">{">"}</span>
            <Link href="#" className="ring-1 ring-gray-200 px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
              {path ? path : "all"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHero;
