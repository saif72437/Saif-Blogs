import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-slate-950",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 border-2 border-white/40 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}
