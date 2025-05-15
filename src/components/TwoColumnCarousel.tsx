import 'swiper/css';
import 'swiper/css/pagination';
import Gallery from './sections/gallery';

export default function TwoColumnCarousel() {
    return (
        <section className="p-6 py-10 md:py-20 md:px-16 bg-neutral-50">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#429cce] rounded-3xl">
                {/* Left Content */}
                <div className="flex flex-col justify-center px-14 py-14">
                    <h1 className="mb-10 font-semibold text-3xl md:text-5xl font-heading text-white capitalize">
                        More than just <br className='hidden md:block' />
                        <span className="bg-[#e6bf5d] rounded-lg px-4 mt-1 inline-block">A Memories</span>
                    </h1>
                   <p className="text-lg text-gray-900 font-semibold">
                        Preserve your precious moments with a touch of elegance. Our platform ensures your memories are Preserved and cherished for a lifetime.
                    </p>
                </div>

                {/* Right Carousel */}
                <div>
                    <Gallery />
                </div>
            </div>
        </section>
    );
}
