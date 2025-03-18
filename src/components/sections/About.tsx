/* eslint-disable react/no-unescaped-entities */
const About = () => {
    return (
        <section className="px-6 py-28 md:px-20 lg:px-32 bg-white text-black relative">
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
                    During the 29th commemoration of the 1994 Genocide Against the Tutsi, King NGABO engaged in a poignant conversation with a genocide survivor. The survivor expressed a deeply personal loss, revealing, "Young brother, do you know that we don’t have pictures of our parents?" When King NGABO inquired about the circumstances, the survivor explained that the last photo they possessed was misplaced during a move in 2005. Curious about family legacy, King NGABO asked how the survivor recounted stories of their grandparents to their children. With a gentle laugh, the survivor responded, "I tell them that every old man is their grandfather and every old woman is their grandmother."

                    This exchange profoundly affected King NGABO and ignited a spark of inspiration. While collaborating with students from Nyundo School of Arts at his studio—a place where students frequently spent their holidays—King NGABO encountered a post about the only existing, albeit unclear, picture of someone's grandfather. Motivated by this discovery, the studio team restored the image and returned it to the appreciative family.

                    This incident propelled King NGABO to take a significant step forward. He resolved to establish a platform focused on the restoration and preservation of images damaged during the 1994 Genocide Against the Tutsi. This initiative led to the creation of "ART FOR MEMORIES," a project committed to restoring these important photographs and compiling, archiving, and artistically representing the stories of genocide survivors.
                </p>

                {/* Founder Info */}
                <p className="mt-6 text-gray-600 text-center">
                    The Art For Memories initiative was founded during Kwibuka 29 by{" "}
                    <span className="font-semibold text-gray-900">King Ngabo, Museum Ingabo</span>, a Rwandan
                    creative artist and the founder/creative director of an African storytelling and art
                    museum.
                </p>
            </div>
        </section>
    );
};

export default About;
