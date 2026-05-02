"use client"

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

type CollapsibleProps = {
    title: string;
    description?: string;
    children: React.ReactNode;
};

const Collapsible = ({ title, description, children }: CollapsibleProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="shadow shadow-gray-200 rounded-xl bg-white overflow-hidden ">

            <div
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between  cursor-pointer  px-6 py-4 border-b border-gray-300"
            >
                <div className="space-y-2 w-full">
                    <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
                    {description && <p className="text-sm  text-gray-500">
                        {description}          </p>}
                </div>

                <span
                    className={`transition-transform duration-300 ${open ? "rotate-90" : ""
                        }`}
                >
                    <IoIosArrowForward className="text-gray-600" />

                </span>
            </div>

            <div
                className={`transition-all duration-300 overflow-hidden ${open ? "min-h-full p-4" : "max-h-0 px-4"
                    }`}
            >
                {children}

            </div>
        </div>
    );
};

export default Collapsible;