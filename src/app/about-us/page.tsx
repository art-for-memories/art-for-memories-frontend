/* eslint-disable react/no-unescaped-entities */
import Layout from '@/components/Layout'
import Navbar from '@/components/Navbar'

function AboutUs() {
    return (<>
        <Layout>
            <div className="overflow-x-hidden">
                <div className='bg-neutral-900 py-5'>
                    <Navbar />
                </div>

                <section className="py-5 bg-neutral-900 lg:py-0 relative">
                    <div className="px-4 mx-auto sm:px-6 lg:px-20 max-w-7xl pb-5 bg-neutral-900">
                        <div className="grid items-stretch grid-cols-1 gap-x-16 gap-y-5">
                            <div className="flex items-center sm:py-10 lg:py-10 xl:py-10">
                                <div>
                                    <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">About us</p>
                                    <h2 className="mt-8 text-3xl font-bold font-boldonse leading-tight text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: '4rem' }}>
                                        All About Preserving Memories
                                    </h2>
                                    <p className="text-xl leading-relaxed text-gray-200 mt-9">
                                        Once, during the 29th Commemoration of the 1994 Genocide Against the Tutsi, King NGABO had a conversation with a Genocide Survivor.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className='text-xl leading-relaxed text-gray-200'>
                            The survivor said:

                            <p className="my-4">
                                “Young brother, do you know that we don’t have pictures of our parents?”
                                King NGABO asked, “What happened?”
                                The survivor replied, “When we moved to a new house in 2005, the last picture we had was lost.”
                                King NGABO then asked, “How do you tell your children about their grandparents?”
                            </p>

                            <p className="my-4">
                                With a soft laugh, the survivor said, “I tell them that every old man is their grandfather and every old woman is their grandmother.”
                                That moment deeply touched King NGABO and sparked an idea in his mind.
                            </p>

                            <p className="my-4">
                                During a studio session, King NGABO was working alongside students from Nyundo School of Arts, who often spent their holidays at his studio. He came across a post where someone shared the only existing picture of their grandfather, though it was unclear. Seeing this, the studio team worked on restoring the image and returned it to the family.
                                This experience inspired King NGABO to take action.
                            </p>
                            <p className="my-4">
                                He decided to create a platform dedicated to preserving the damaged images of the victims of the 1994 Genocide Against the Tutsi.
                            </p>
                            <p className="my-4">
                                From this vision, “ART FOR MEMORIES” was born, a project dedicated to preserving the damaged images of the victims, as well as collecting, archiving, and illustrating the stories of Genocide Survivors through art.
                            </p>
                        </p>
                    </div>
                </section>

                <section className="bg-neutral-900 lg:py-0 relative">
                    <div className='px-4 mx-auto sm:px-6 lg:px-20 max-w-7xl pb-5 bg-neutral-900'>
                        <div className="flex items-center justify-start lg:order-1 sm:py-16 lg:py-10 xl:py-10">
                            <div>
                                <h2 className="mt-3 text-3xl font-bold font-boldonse leading-tight text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: '4rem' }}>
                                    Our Mission
                                </h2>
                                <p className="text-xl leading-relaxed text-gray-200 mt-6">
                                    At "Art for Memories," our mission is to honor and preserve the memories of the victims of the 1994 Genocide Against the Tutsi. We are committed to restoring damaged photographs, archiving personal stories, and illustrating these narratives through the transformative power of art.
                                </p>
                                <p className="text-xl leading-relaxed text-gray-200 mt-6">
                                    By meticulously restoring photographs, we aim to bring back cherished memories that were thought to be lost forever. Each restored image serves as a bridge to the past, allowing families to reconnect with their loved ones and share their legacy with future generations.
                                </p>
                                <p className="text-xl leading-relaxed text-gray-200 mt-6">
                                    Beyond image restoration, we strive to create a comprehensive archive of stories that capture the resilience, courage, and humanity of Genocide Survivors. These stories, told through words and art, serve as a testament to the strength of the human spirit and the importance of remembering history.
                                </p>
                                <p className="text-xl leading-relaxed text-gray-200 mt-6">
                                    Our mission is not just about preserving the past but also about inspiring the present and future. Through art and storytelling, we aim to foster healing, promote understanding, and build a world where the lessons of history guide us toward compassion and unity.
                                </p>
                                <p className="text-xl leading-relaxed text-gray-200 mt-6">
                                    Together, we can ensure that the memories of those who came before us are not only preserved but celebrated, serving as a source of hope and inspiration for generations to come.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-neutral-900 lg:py-0 relative">
                    <div className='px-4 mx-auto sm:px-6 lg:px-20 max-w-7xl pb-10 bg-neutral-900'>
                        <div className="flex items-center justify-start lg:order-1 sm:py-16 lg:py-10 xl:py-10">
                            <div>
                                <h2 className="mt-10 text-3xl font-bold font-boldonse leading-tight text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: '4rem' }}>
                                    Our Vision
                                </h2>
                                <p className="text-xl leading-relaxed text-gray-200 mt-6">
                                    To create a world where memories are preserved and shared, fostering healing and understanding through the power of art and storytelling.
                                </p>
                                <p className="text-xl leading-relaxed text-gray-200 mt-6">
                                    We envision a future where every individual, regardless of their past, has access to a platform that honors their history and preserves their legacy. Through innovative techniques in image restoration, digital archiving, and artistic expression, we aim to bridge the gap between generations and cultures.
                                </p>
                                <p className="text-xl leading-relaxed text-gray-200 mt-6">
                                    By leveraging the transformative power of art, we strive to not only restore damaged photographs but also to breathe life into the stories behind them. Our vision is to inspire communities to embrace their shared history, promote empathy, and build a foundation for a more compassionate and connected world.
                                </p>
                                <p className="text-xl leading-relaxed text-gray-200 mt-6">
                                    Together, we can ensure that the memories of the past are not forgotten but celebrated, serving as a beacon of hope and resilience for future generations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    </>)
}

export default AboutUs