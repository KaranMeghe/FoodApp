import { useState } from "react";
const Accordion = ({ title, children, isOpenDefault = false }) => {
    const [isOpen, setIsOpen] = useState(isOpenDefault);

    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="border rounded-lg shadow nb-4">
            <button onClick={toggleAccordion} className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300">

                <span className="font-medium">{title}</span>
                <span className={`transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>   ▼
                </span>

            </button>

            {isOpen && (
                <div className="px-4 py-3 bg-white text-gray-700 border-t">
                    {children}
                </div>

            )}
        </div>
    );
};

export default Accordion;