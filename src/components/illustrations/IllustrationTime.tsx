export function IllustrationTime({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 200 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Background Blob */}
            <path
                d="M160.5 105C160.5 135.376 135.376 160 105 160C74.6243 160 50 135.376 50 105C50 74.6243 74.6243 50 105 50C135.376 50 160.5 74.6243 160.5 105Z"
                fill="var(--primary)"
                fillOpacity="0.1"
            />

            {/* Calendar Base */}
            <rect x="60" y="60" width="80" height="70" rx="4" fill="white" stroke="var(--primary)" strokeWidth="2" />

            {/* Calendar Header */}
            <path d="M60 64C60 61.7909 61.7909 60 64 60H136C138.209 60 140 61.7909 140 64V80H60V64Z" fill="var(--primary)" fillOpacity="0.1" />
            <path d="M60 80H140" stroke="var(--primary)" strokeWidth="2" />

            {/* Calendar Rings */}
            <rect x="75" y="55" width="4" height="10" rx="2" fill="var(--primary)" />
            <rect x="121" y="55" width="4" height="10" rx="2" fill="var(--primary)" />

            {/* Calendar Content (Checkmark/Date) */}
            <circle cx="100" cy="105" r="15" fill="var(--primary)" fillOpacity="0.1" />
            <path d="M92 105L97 110L108 99" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Clock/Time Element (Floating) */}
            <g className="animate-float">
                <circle cx="150" cy="120" r="20" fill="white" stroke="var(--primary)" strokeWidth="2" />
                <path d="M150 120V110" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
                <path d="M150 120L156 126" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="150" cy="120" r="2" fill="var(--primary)" />
            </g>

            {/* Decorative Elements */}
            <circle cx="40" cy="80" r="4" fill="#FCD34D" stroke="var(--primary)" strokeWidth="1" />
            <circle cx="170" cy="60" r="3" fill="var(--primary)" fillOpacity="0.3" />
        </svg>
    );
}
