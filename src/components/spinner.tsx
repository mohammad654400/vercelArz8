import React from 'react'

export default function spinner() {
    return (
        <div className="flex flex-row gap-6 w-full h-full justify-center items-center">
            <div className="w-10 h-10 rounded-full bg-primary animate-bounce"></div>
            <div className="w-10 h-10 rounded-full bg-primary animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-10 h-10 rounded-full bg-primary animate-bounce [animation-delay:-.5s]"></div>
        </div>
    )
}
