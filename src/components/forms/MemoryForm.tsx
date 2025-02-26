import Image from 'next/image';

export default function MemoryForm() {
    return (
        <div className="max-w-md md:max-w-lg mx-auto p-6 bg-white">
            <div className="flex items-center space-x-2 justify-between mb-4">
                <div className="text-2xl font-bold flex items-center">
                    <span className="bg-black text-white px-1 py-1 rounded">
                        <div><Image src={'/images/logo.PNG'} alt={"logo"} width={40} height={40} /></div>
                    </span>
                    <span className="text-black ml-2 text-sm">Art for Memories.</span>
                </div>
            </div>

            <h2 className="text-xl font-semibold text-black">Submit Your Memory</h2>
            <p className="text-gray-500 mb-5 mt-3">
                Fill your personal details to continue for your Memory Submission
            </p>

            {/* Form Fields */}
            <form className="space-y-4">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm text-black font-bold">First name</label>
                        <input
                            type="text"
                            placeholder="King"
                            className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-black font-bold">Last name</label>
                        <input
                            type="text"
                            placeholder="Ngabo"
                            className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label className="text-sm text-black font-bold">Email</label>
                    <input
                        type="email"
                        placeholder="Enter email here"
                        className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Phone Number */}
                <div>
                    <label className="text-sm text-black font-bold">Phone Number</label>
                    <div className="flex border border-gray-300 rounded-[8px] overflow-hidden">
                        <span className="px-3 py-2 bg-gray-100 border-r border-gray-300 text-black">+250</span>
                        <input
                            type="text"
                            placeholder="785119320"
                            className="w-full p-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                </div>

                {/* Memory Selection */}
                <div>
                    <label className="text-sm text-black font-bold">
                        Select the memory to share
                    </label>
                    <select className="w-full border border-gray-300 rounded-[8px] px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-black">
                        <option>Select one of these options</option>
                    </select>
                </div>

                {/* File Upload */}
                <div>
                    <label className="text-sm text-black font-medium">Pictures</label>
                    <div className="border border-gray-300 rounded-md p-2 flex items-center space-x-2">
                        <span className="text-gray-400">📎</span>
                        <span className="text-gray-400">Attach the picture of your loved ones</span>
                    </div>
                </div>

                {/* Submit Button */}
                <div className='flex items-center justify-between mt-5'>
                    <button className="w-auto bg-black text-white flex items-center justify-between py-3 px-4 rounded-[8px] hover:opacity-80">
                        <span>Submit</span>
                        <span className='ml-5'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07"></path><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M3.5 12h16.83" opacity=".4"></path></svg></span>
                    </button>
                </div>
            </form>
        </div>
    );
}