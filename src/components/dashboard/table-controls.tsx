import React from 'react'

function TableControls({ onSearch }: { onSearch: (searchTerm: string) => void }) {
    return (
        <div className="flex items-center space-x-4 py-5 mt-5">
            <div className="flex border border-gray-200 bg-white rounded px-2 items-center">
                <span className="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </span>
                <input type="text" placeholder="Search Now..." className="p-2 focus:outline-none text-slate-700" onKeyUp={(e) => onSearch((e.target as HTMLInputElement).value)} />
            </div>
        </div>
    )
}

export default TableControls
