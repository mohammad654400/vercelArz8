import React from 'react';

interface InputFieldProps {
    name: string;
    label: string;
    type: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    error?: string;
    options?: string[];
}

const FormField: React.FC<InputFieldProps> = ({ name, label, type, value, onChange, error, options }) => {
    return (
        <div className='mb-4'>
            <label className="block text-sm font-medium mb-2">{label}</label>
            {type === "select" ? (
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full p-2 rounded border bg-transparent focus:ring-0 focus:outline-none"
                    autoComplete="off"
                >
                    <option value="">انتخاب کنید</option>
                    {options?.map(option => (
                        <option key={option} value={option} className="bg-third text-foreground">
                            {option}
                        </option>
                    ))}
                </select>
            ) : (

                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    autoComplete="off"
                    className="w-full p-2 rounded border bg-transparent focus:ring-0 focus:outline-none"
                    placeholder={label}
                />

            )}
            {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>
    );
};

export default FormField;
