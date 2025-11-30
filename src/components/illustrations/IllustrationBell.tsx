import { cn } from "@/lib/utils";

export function IllustrationBell({ className }: { className?: string }) {
    return (
        <div className={cn("relative w-full h-full flex items-center justify-center", className)}>
            <style jsx>{`
                @keyframes smooth-swing {
                    0% { transform: rotate(0deg); }
                    25% { transform: rotate(10deg); }
                    50% { transform: rotate(0deg); }
                    75% { transform: rotate(-10deg); }
                    100% { transform: rotate(0deg); }
                }
                .animate-smooth-swing {
                    animation: smooth-swing 2s ease-in-out infinite;
                    transform-origin: 100px 55px; /* Pivot at the top ring */
                }
                @keyframes clapper-move {
                    0% { transform: translateX(0); }
                    25% { transform: translateX(-3px); } /* Opposite to bell swing */
                    50% { transform: translateX(0); }
                    75% { transform: translateX(3px); }
                    100% { transform: translateX(0); }
                }
                .animate-clapper-move {
                    animation: clapper-move 2s ease-in-out infinite;
                }
            `}</style>

            <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Background Blob */}
                <circle cx="100" cy="100" r="80" fill="var(--primary)" fillOpacity="0.05" />
                <circle cx="100" cy="100" r="60" fill="var(--primary)" fillOpacity="0.1" />

                {/* Main Group for Animation */}
                <g className="animate-smooth-swing">
                    {/* Clapper (Behind Bell Body) */}
                    <circle cx="100" cy="125" r="6" fill="var(--primary)" className="animate-clapper-move" />

                    {/* Bell Body - Scaled Down & Stouter */}
                    {/* Previous Y range: ~55 to 135. New: ~65 to 125 (smaller) */}
                    <path
                        d="M100 65C85 65 72 78 72 98V118C72 122 68 125 64 125H136C132 125 128 122 128 118V98C128 78 115 65 100 65Z"
                        fill="white"
                        stroke="var(--primary)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Top Ring */}
                    <path d="M100 65V58" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="100" cy="55" r="3" stroke="var(--primary)" strokeWidth="3" />
                </g>

                {/* Sound Waves - Simple & Elegant */}
                <path
                    d="M150 85C154 92 154 100 150 108"
                    stroke="var(--primary)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.5"
                />
                <path
                    d="M160 80C166 90 166 105 160 115"
                    stroke="var(--primary)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.3"
                />

                {/* Left Side Waves */}
                <path
                    d="M50 85C46 92 46 100 50 108"
                    stroke="var(--primary)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.5"
                />
            </svg>
        </div>
    );
}
