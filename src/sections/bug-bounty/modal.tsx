import React from "react";  

interface ModalProps {  
    onClose: () => void;  
    isSuccess: boolean;   
    successMessage: string;   
    errorMessage: string;   
    successKeywords?: string[]; // تغییر به آرایه  
    errorKeywords?: string[]; // تغییر به آرایه  
    successIcon: React.ReactNode;   
    errorIcon: React.ReactNode;   
}  

export const Modal = ({  
    onClose,  
    isSuccess,  
    successMessage,  
    errorMessage,  
    successKeywords,  
    errorKeywords,  
    successIcon,  
    errorIcon,  
}: ModalProps) => {  
    console.log("isSuccess",isSuccess);
    
    const renderMessage = (message: string, keywords?: string[]) => {  
        if (keywords && keywords.length > 0) {  
            const regex = new RegExp(`(${keywords.join("|")})`, 'g'); // برای جستجوی چند کلمه  
            const parts = message.split(regex);  
            return parts.map((part, index) => {  
                return keywords.includes(part) ? (  
                    <span key={index} className="text-green-500">{part}</span>  
                ) : (  
                    part  
                );  
            });  
        }  
        return <span>{message}</span>;  
    };  

    return (  
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">  
            <div className="w-[400px] h-[380px] bg-secondary border border-primary rounded-xl flex flex-col items-center justify-center p-6">  
                {isSuccess ? successIcon : errorIcon}  

                <p className={`text-lg font-bold mt-4 text-center ${isSuccess ? 'text-foreground' : 'text-red-500'}`}>  
                    {isSuccess ?  
                        renderMessage(successMessage, successKeywords) :  
                        renderMessage(errorMessage, errorKeywords)}  
                </p>  

                <p className="text-lg font-bold mt-4 text-center text-foreground">  
                    {isSuccess ? "و با شما تماس گرفته خواهد شد." : "لطفاً دوباره تلاش کنید."}  
                </p>  

                <button  
                    className="mt-6 bg-primary text-white px-4 py-2 rounded"  
                    onClick={onClose}  
                >  
                    بستن  
                </button>  
            </div>  
        </div>  
    );  
};
