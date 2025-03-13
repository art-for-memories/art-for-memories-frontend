'use client';

import MemoryForm from "@/components/forms/MemoryForm";
import Navbar from "@/components/Navbar";

export default function Page() {
    const formSubmit = () => {
        console.log("data");
    }

    return (<div className="bg-white">
        <Navbar />

        <div className="my-10">
            <MemoryForm onSuccess={formSubmit} />
        </div>
    </div>);
}