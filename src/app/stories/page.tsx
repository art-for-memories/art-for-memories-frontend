"use client";
import StoriesList from "@/components/lists/StoriesList";
import TopHeader from "@/components/TopHeader";

export default function Stories() {
    return (<>
        <TopHeader title="Their Stories" />

        <StoriesList title="Illustrated Stories" data={[
            {
                image: "/images/stories/story-1.png",
                type: "Written Story",
                date: "April 08th, 2025",
                title: "Uko Nabuze Mama Umbyara",
                author: "King NGABO",
                role: "Writer"
            },
            {
                image: "/images/stories/story-2.png",
                type: "Illustrated",
                date: "April 08th, 2025",
                title: "Sinibuka Uko Basega",
                author: "King NGABO",
                role: "Illustrator / Creator"
            },
            {
                image: "/images/stories/story-3.png",
                type: "Illustrated",
                date: "April 08th, 2025",
                title: "Umunsi Wa Nyuma Mbabona",
                author: "King NGABO",
                role: "Creator"
            }
        ]} />

        <StoriesList title="Published Stories" data={[
            {
                image: "/images/stories/story-1.png",
                type: "Written Story",
                date: "April 08th, 2025",
                title: "Uko Nabuze Mama Umbyara",
                author: "King NGABO",
                role: "Writer"
            },
            {
                image: "/images/stories/story-2.png",
                type: "Illustrated",
                date: "April 08th, 2025",
                title: "Sinibuka Uko Basega",
                author: "King NGABO",
                role: "Illustrator / Creator"
            },
            {
                image: "/images/stories/story-3.png",
                type: "Illustrated",
                date: "April 08th, 2025",
                title: "Umunsi Wa Nyuma Mbabona",
                author: "King NGABO",
                role: "Creator"
            },
            {
                image: "/images/stories/story-1.png",
                type: "Written Story",
                date: "April 08th, 2025",
                title: "Uko Nabuze Mama Umbyara",
                author: "King NGABO",
                role: "Writer"
            },
            {
                image: "/images/stories/story-2.png",
                type: "Illustrated",
                date: "April 08th, 2025",
                title: "Sinibuka Uko Basega",
                author: "King NGABO",
                role: "Illustrator / Creator"
            },
            {
                image: "/images/stories/story-3.png",
                type: "Illustrated",
                date: "April 08th, 2025",
                title: "Umunsi Wa Nyuma Mbabona",
                author: "King NGABO",
                role: "Creator"
            }
        ]} />
    </>);
}