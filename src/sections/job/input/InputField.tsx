import ArrowDown from '@/assets/icons/arrrow/arrowDown';
import React, { useState } from 'react';

interface InputFieldProps {
    name: string;
    label?: string;
    type: "text" | "textarea" | "select"; // محدود کردن نوع فیلدها
    value?: string;

    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    error?: string;
    options?: string[]; 
    placeholder?: string; 
}

const FormField: React.FC<InputFieldProps> = ({
    name,
    label,
    type,
    value,
    onChange,
    error,
    options = [],
    placeholder,
}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(value || options[0]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (onChange) {
            onChange({ target: { name, value: option } } as React.ChangeEvent<HTMLSelectElement>);
        }
    };



    return (
        <div >
            <label htmlFor={name} className="block text-sm font-medium mb-2">
                {label}
            </label>
            {type === "select" && options ? (
                <div className="relative">

                    <div
                        onClick={toggleDropdown}
                        className="w-full px-2 py-3 rounded-lg border border-[#ADADAD] bg-transparent cursor-pointer focus:outline-none flex items-center justify-between"
                    >
                        <span>{selectedOption}</span>
                        <div className='flex ml-2'>
                        <ArrowDown/>
                        </div>
                    </div>

                    {isOpen && (
                        <div className="absolute left-0 w-full mt-2  rounded-lg shadow-lg z-10 bg-third ">
                            {options.map((option) => (
                                <div
                                    key={option}
                                    onClick={() => handleOptionClick(option)}
                                    className="px-4 py-2  hover:bg-gray-300 cursor-pointer "
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            ) : type === "textarea" ? (
                <textarea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full p-2 rounded-lg h-40 border border-[#ADADAD] bg-transparent focus:ring-0 focus:outline-none"
                />
            ) : (
                <input
                    id={name}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    autoComplete="off"
                    className="w-full p-2 rounded-lg border border-[#ADADAD] bg-transparent focus:ring-0 focus:outline-none h-12"
                />
            )}
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
};

export default FormField;
