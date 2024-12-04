import React from 'react';

interface InputFieldProps {
    name: string;
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    error?: string;
    options?: string[];
}

const InputAndSelectField: React.FC<InputFieldProps> = ({ name, label, type, value, onChange, error, options }) => {
    return (
        <div>
            <label className="block text-sm font-medium">{label}</label>
            {type === "select" ? (
                    <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full p-2 rounded border bg-transparent"
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
    style={{
        WebkitBoxShadow: '0 0 0px 1000px transparent inset',
        transition: 'background-color 5000s ease-in-out 0s', 
    }}
    className="w-full p-2 rounded border bg-transparent text-foreground"
    placeholder={label}
/>

            )}
            {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>
    );
};

export default InputAndSelectField;
