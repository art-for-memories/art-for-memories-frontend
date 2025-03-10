'use client';

import Header from "@/components/dashboard/header";
import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar";
import Table from "@/components/dashboard/table";
import TableControls from "@/components/dashboard/table-controls";

export default function Memories() {
    const headers = ['First Name', 'Last Name', 'Email', 'Phone Number', 'Memory'];

    const employees = [
        { firstName: "Joshua", lastName: "Bakare", email: "josh@gmail.com", phone: "+2348012345678", role: "Birthday" },
        { firstName: "Jane", lastName: "Clement", email: "bakery@gmail.com", phone: "+2348012345678", role: "Genocide Day" },
        { firstName: "Hannah", lastName: "Johnson", email: "josh.Johnson@gmail.com", phone: "+2348012345678", role: "Staff" },
        { firstName: "John", lastName: "Ngoka", email: "josh.Ngoka@gmail.com", phone: "+2348012345678", role: "Staff" },
        { firstName: "Omotayo", lastName: "Adeleke", email: "josh.Adeleke@gmail.com", phone: "+2348012345678", role: "Staff" },
        { firstName: "Gloria", lastName: "Amadi", email: "josh.bakery@gmail.com", phone: "+2348012345678", role: "Staff" }
    ];

    const handleDelete = (email: string) => {
        console.log(`Delete employee with email: ${email}`);
    };

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
                    <TableControls />

                    {/* Table */}
                    <div className="mt-4">
                        <Table headers={headers} data={employees} onDelete={handleDelete} />
                    </div>
                </div>
            </div>
        </div>
    );
}
