'use client'

import React, {useState,  useRef} from "react";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { translateToOO } from "@/utils/translator";

export default function Home() {
    const [rawInput, setRawInput] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = textareaRef.current;
        const rawValue = e.target.value;

        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${Math.min(textarea.scrollHeight, 108)}px`;
        }
        setRawInput(rawValue);
        const translatedText = translateToOO(rawValue);
        setTranslatedText(translatedText);
    };

    return (
        <>
            <div className="bg-gray-200 dark:bg-gray-900 flex flex-col items-center min-h-screen p-8 pb-20 gap-6 sm:p-12 font-[family-name:var(--font-geist-sans)]">
                <header className="w-full sm:w-[32rem] text-center pb-2 border-b border-gray-300 dark:border-gray-700">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white tracking-tight">
                        OOvify 💬
                    </h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Live English ↔ OO-Speak translator
                    </p>
                </header>
                <textarea
                    ref={textareaRef}
                    value={rawInput}
                    onChange={handleInputChange}
                    placeholder={
                        "Type in English to translate to OO-Speak..."
                    }
                    className="overflow-auto scrollbar-hide w-full sm:w-[32rem] px-5 py-3 rounded-2xl border border-gray-400 dark:border-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none bg-white dark:bg-zinc-900 placeholder-gray-600 dark:placeholder-gray-500"
                    style={{ minHeight: '3rem', maxHeight: '6.75rem' }}
                />

                <div className="relative w-full sm:w-[32rem] max-w-full rounded-2xl border border-gray-400 dark:border-gray-600 p-4 shadow-inner overflow-x-auto bg-white dark:bg-zinc-900">
                    <p className="whitespace-pre-wrap break-words p-2 pr-10 text-gray-700 dark:text-gray-100">
                        {translatedText || "Output will appear here..."}
                    </p>

                    {translatedText && (
                        <button
                            onClick={() => navigator.clipboard.writeText(translatedText)}
                            className="absolute top-2 right-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
                            aria-label="Copy to clipboard"
                        >
                            <ClipboardDocumentIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
