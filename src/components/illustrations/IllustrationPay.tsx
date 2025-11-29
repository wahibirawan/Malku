export function IllustrationPay({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 200 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Background Blob */}
            <circle cx="100" cy="100" r="50" fill="var(--primary)" fillOpacity="0.1" />

            {/* Hand holding coin */}
            <path d="M60 120C60 120 70 140 100 140C130 140 140 120 140 120" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />

            {/* Coin (Floating) */}
            <g className="animate-float">
                <circle cx="100" cy="90" r="20" fill="white" stroke="var(--primary)" strokeWidth="2" />
                <path d="M95 85L100 95L105 85" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Sparkles (Pulse) */}
            <g className="animate-pulse-soft">
                <path d="M140 70L145 60L150 70L160 75L150 80L145 90L140 80L130 75L140 70Z" fill="var(--primary)" />
                <circle cx="60" cy="70" r="4" fill="var(--primary)" fillOpacity="0.4" />
            </g>

            {/* Plant growing (Barakah) */}
            <path d="M100 70V50" stroke="var(--primary)" strokeWidth="2" />
            <path d="M100 60C100 60 110 55 110 45" stroke="var(--primary)" strokeWidth="2" />
            <path d="M100 55C100 55 90 50 90 40" stroke="var(--primary)" strokeWidth="2" />
        </svg>
    );
}
