export function IllustrationCalculator({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 200 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Background Blob */}
            <path
                d="M170 90C170 120.376 140 155 100 155C60 155 40 120.376 40 90C40 59.6243 65 40 100 40C135 40 170 59.6243 170 90Z"
                fill="var(--primary)"
                fillOpacity="0.1"
            />

            {/* Calculator Body */}
            <rect x="70" y="50" width="60" height="80" rx="8" fill="white" stroke="var(--primary)" strokeWidth="2" />

            {/* Screen */}
            <rect x="80" y="60" width="40" height="20" rx="2" fill="var(--primary)" fillOpacity="0.1" />

            {/* Buttons */}
            <circle cx="85" cy="95" r="3" fill="var(--primary)" />
            <circle cx="100" cy="95" r="3" fill="var(--primary)" />
            <circle cx="115" cy="95" r="3" fill="var(--primary)" />

            <circle cx="85" cy="110" r="3" fill="var(--primary)" />
            <circle cx="100" cy="110" r="3" fill="var(--primary)" />
            <circle cx="115" cy="110" r="3" fill="var(--primary)" />

            {/* Floating Elements */}
            <g className="animate-float">
                <rect x="140" y="70" width="30" height="40" rx="4" fill="white" stroke="var(--primary)" strokeWidth="1.5" transform="rotate(15 140 70)" />
                <path d="M145 80H165" stroke="var(--primary)" strokeWidth="1.5" transform="rotate(15 140 70)" />
                <path d="M145 90H160" stroke="var(--primary)" strokeWidth="1.5" transform="rotate(15 140 70)" />
            </g>

            <g className="animate-pulse-soft">
                <circle cx="50" cy="80" r="8" fill="white" stroke="var(--primary)" strokeWidth="1.5" />
                <path d="M46 80H54" stroke="var(--primary)" strokeWidth="1.5" />
                <path d="M50 76V84" stroke="var(--primary)" strokeWidth="1.5" />
            </g>
        </svg>
    );
}
