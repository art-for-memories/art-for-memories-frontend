import 'swiper/css';
import 'swiper/css/pagination';
import Gallery from './sections/gallery';

export default function TwoColumnCarousel() {
    return (
        <section className="px-2 py-5 md:py-10 md:px-10 bg-neutral-50">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 bg-[#429cce] rounded-2xl md:rounded-3xl">
                {/* Left Content */}
                <div className="flex flex-col justify-center px-4 py-8 md:px-10 md:py-14 lg:px-16">
                    <h1 className="mb-6 sm:mb-8 md:mb-10 font-semibold text-2xl sm:text-3xl md:text-5xl font-heading text-white capitalize">
                        More than just <br className="hidden md:block" />
                        <span className="bg-[#e6bf5d] rounded-lg px-2 sm:px-4 mt-1 inline-block">A Sketch</span>
                    </h1>
                    <p className="text-base sm:text-lg text-gray-900 font-semibold">
                        Since April 2023, during Kwibuka 29, ART FOR MEMORIES has been preserving images of victims of the 1994 Genocide Against the Tutsi and returning them to their families.
                    </p>
                </div>

                {/* Right Carousel */}
                <div className="px-2 py-4 sm:px-0 sm:py-0 md:px-0 md:py-0 flex items-center">
                    <Gallery />
                </div>
            </div>
        </section>
    );
}
