import React from 'react';

interface InputFieldProps {
    name: string;
    label?: string;
    type: "text" | "textarea" | "select"; // محدود کردن نوع فیلدها
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    error?: string;
    options?: string[]; // فقط در صورت `type === select` استفاده می‌شود
    placeholder?: string; // برای placeholder اختیاری
}

const FormField: React.FC<InputFieldProps> = ({
    name,
    label,
    type,
    value,
    onChange,
    error,
    options,
    placeholder,
}) => {
    return (
        <div >
            <label htmlFor={name} className="block text-sm font-medium mb-2">
                {label}
            </label>
            {type === "select" && options ? (
                <select
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full px-2 rounded-lg border bg-transparent focus:ring-0 focus:outline-none h-12"
                >
                    <option value="">انتخاب کنید</option>
                    {options.map((option) => (
                        <option key={option} value={option} className="bg-third text-foreground">
                            {option}
                        </option>
                    ))}
                </select>
            ) : type === "textarea" ? (
                <textarea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full p-2 rounded-lg h-40 border bg-transparent focus:ring-0 focus:outline-none"
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
                    className="w-full p-2 rounded-lg border bg-transparent focus:ring-0 focus:outline-none h-12"
                />
            )}
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
};

export default FormField;
