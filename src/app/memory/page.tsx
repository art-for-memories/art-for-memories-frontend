import MemoryForm from "@/components/forms/MemoryForm";
import Navbar from "@/components/Navbar";

export default function Page() {
    return (<div className="bg-white">
        <Navbar />

        <div className="my-10">
            <MemoryForm />
        </div>
    </div>);
}