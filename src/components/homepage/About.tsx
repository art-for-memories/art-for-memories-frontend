"use client";
import Image from "next/image";

const About = () => {
    return (
        <section className="py-24 px-6 md:px-20 lg:px-32 bg-white text-black relative">
            {/* Container */}
            <div className="max-w-4xl mx-auto">
                {/* Small Heading */}
                <p className="text-sm font-semibold text-gray-500 uppercase">ABOUT US</p>

                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-900">
                    We&apos;re Dedicated To Preserving Memories
                </h2>

                {/* Description */}
                <p className="mt-6 text-gray-600 leading-relaxed">
                    In our commitment to honor and remember the lives affected by the 1994 Genocide Against
                    the Tutsi in Rwanda, Art For Memories offers a platform for healing and historical
                    preservation. We facilitate the sharing of personal memories and stories, ensuring that
                    each voice is heard and no memory is forgotten. Our team is devoted to creating a space
                    where survivors and their families can celebrate the lives of their loved ones and
                    educate future generations about the past to inspire a better tomorrow.
                </p>

                {/* Image */}
                <div className="mt-10 flex justify-center">
                    <Image
                        src="/images/founder.jpg" 
                        alt="Founder"
                        className="w-64 h-auto object-cover ring-black ring-opacity-5 p-2 rounded-md"
                        width={100}
                        height={100}
                    />
                </div>

                {/* Founder Info */}
                <p className="mt-6 text-gray-600 text-center">
                    The Art For Memories initiative was founded during Kwibuka 29 by{" "}
                    <span className="font-semibold text-gray-900">King Ngabo, Museum Ingabo</span>, a Rwandan
                    creative artist and the founder/creative director of an African storytelling and art
                    museum.
                </p>
            </div>

            <div className="vector-1 absolute bottom-0 right-0 left-0"> 
                <Image src={'/images/vectors/vector-2.png'} alt={"vector"} width={200} height={100} />
            </div>
            <div className="vector-1 absolute -bottom-2 right-0 left-1"> 
                <Image src={'/images/vectors/vector-2.png'} alt={"vector"} width={200} height={100} />
            </div>
            <div className="vector-1 absolute bottom-0 right-0 left-0"> 
                <Image src={'/images/vectors/vector-3.png'} alt={"vector"} width={200} height={100} />
            </div>
        </section>
    );
};

export default About;
