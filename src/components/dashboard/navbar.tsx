import Image from 'next/image'
import React from 'react';
import { useSession, signOut } from 'next-auth/react';


function Navbar() {
    const { data: session } = useSession();

    return (
        <nav className="w-full h-14 bg-white shadow-sm flex items-center px-4 border-b border-gray-200">
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center space-x-2">
                    <div className="text-2xl font-bold flex items-center">
                        <span className="bg-black text-white px-1 py-1 rounded">
                            <div><Image src={'/images/logo.PNG'} alt={"logo"} width={30} height={30} /></div>
                        </span>
                        <span className="text-black ml-2 text-sm">Art for Memories.</span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center space-x-2">
                        {session && (
                            <>
                                <Image src={session.user?.image || ""} className="w-7 h-7 rounded-full object-cover" alt="Logo" width={40} height={40} />
                                <span className="text-sm text-slate-600 font-semibold">Hi, {session.user?.name}</span>
                                <button onClick={() => signOut()} className="bg-red-600 text-white px-4 py-2 rounded text-sm">Logout</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar