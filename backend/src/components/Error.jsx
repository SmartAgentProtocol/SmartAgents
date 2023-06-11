import React from 'react'

const Error = ({message}) => {
    return (
        <div class="flex items-center bg-red-100 border-l-4 border-red-500 py-2 px-3 shadow-md mb-4">
            <div class="flex-shrink-0">
                <svg class="fill-current text-red-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm1 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1-4a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1z" />
                </svg>
            </div>
            <div class="ml-3">
                <p class="text-sm text-red-700 font-semibold">Error</p>
                <p class="text-sm text-red-700">{message}</p>
            </div>
        </div>
    )
}

export default Error