import MemoryForm from "@/components/forms/MemoryForm";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Submit Your Memories",
    description: "Submit your memories to Art of Memories Rwanda and contribute to preserving the legacy of Genocide Survivors through art.",
    keywords: ["Memory Submission", "Art of Memories Rwanda", "Genocide Survivors", "Preserve Memories", "Submit Memories", "rwanda", "art", "genocide", "survivors"],
};

export default function Page() {
    return (<div className="bg-white">
        <Navbar />

        <div className="my-10">
            <MemoryForm />
        </div>
    </div>);
}