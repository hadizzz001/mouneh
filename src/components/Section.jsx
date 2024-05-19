import { cn } from "../utils";
import React from "react";

export default function Section({
    children,
    title,
    color,
    background,
    className,
    variant,
}) {
    return (
        <section
            className={cn("container px-44 sm:px-8 pt-16 sm:pt-8", className)}
        >
            <h2
                className={`section-title section-title-${variant} mb-20 sm:mb-12 uppercase text-xl sm:text-base font-thin text-center`}
                style={color ? { "--underline-color": color } : {}}
            >
                {title}
            </h2>
            {children}
        </section>
    );
}
