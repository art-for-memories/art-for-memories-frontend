'use client';

import Header from "@/components/dashboard/header";
import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar";
import Table from "@/components/dashboard/table";
import TableControls from "@/components/dashboard/table-controls";
import MemoryForm from "@/components/forms/MemoryForm";
import FormModal from "@/components/models/form-model";
import FetchSpinner from "@/components/spinners/fetch-spinner";
import { Memory } from "@/types/memories";
import { useEffect, useState } from "react";

export default function Memories() {
    const headers = ['First Name', 'Last Name', 'Email', 'Phone Number', 'Memory', 'Status'];
    const [memories, setMemories] = useState<Memory[]>([]);
    const [isFormOpen, setFormOpen] = useState(false);
    const [currentMemory, setCurrentMemory] = useState<Memory | undefined>(undefined);
    const [loading, setLoading] = useState(false);

    const getMemories = async () => {
        setLoading(true);
        const res = await fetch('/api/memories');
        const data = await res.json();
        setLoading(false);
        setMemories(data);
    };

    const handleDelete = async (id: string) => {
        const confirmDelete = confirm('Are you sure you want to delete this memory?');

        if (confirmDelete) {
            setLoading(true);

            await fetch(`/api/memories`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id }),
            });

            setLoading(false);
            setMemories(memories.filter((memory) => memory.id !== id));
        }
    };

    const previewMemory = (memory: Memory) => {
        setCurrentMemory(memory);
        setFormOpen(true);
    }

    const handleSubmitted = () => {
        getMemories();
        setFormOpen(false);
        window.location.reload();
    }

    const searchMemory = async (searchTerm: string) => {
        if (searchTerm.length > 3) {
            setLoading(true);

            const data = memories.filter((memory) => {
                return memory.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || memory.lastName.toLowerCase().includes(searchTerm.toLowerCase()) || memory.email.toLowerCase().includes(searchTerm.toLowerCase()) || memory.phone.toLowerCase().includes(searchTerm.toLowerCase()) || memory.memory.toLowerCase().includes(searchTerm.toLowerCase());
            });

            setLoading(false);
            setMemories(data);
        } else {
            getMemories();
        }
    }

    const approvedMemory = async (id: string) => {
        setLoading(true);

        await fetch(`/api/memories`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, status: 'approved' }),
        });

        setLoading(false);
        getMemories();
    }

    useEffect(() => {
        getMemories();
    }, []);

    return (
        <div>
            <Navbar />

            <div className="min-h-screen flex bg-gray-100">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 p-6">
                    <Header />

                    {/* Controls */}
                    <TableControls onSearch={searchMemory} />

                    {/* Table */}
                    <div className="mt-4">
                        {loading && <div className="my-10"><FetchSpinner /></div>} 
                        <Table headers={headers} data={memories} onDelete={handleDelete} onPreview={previewMemory} onApproved={approvedMemory} />
                    </div>
                </div>

                <FormModal isOpen={isFormOpen} onClose={() => setFormOpen(false)}>
                    <MemoryForm currentMemory={currentMemory} onSuccess={() => handleSubmitted()} />
                </FormModal>
            </div>
        </div>
    );
}
