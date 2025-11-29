export function IllustrationNisab({ className }: { className?: string }) {
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

            {/* Scale Base */}
            <rect x="95" y="60" width="20" height="80" rx="2" fill="var(--primary)" fillOpacity="0.2" />
            <rect x="75" y="135" width="60" height="10" rx="5" fill="var(--primary)" />

            {/* Animated Scale Group */}
            <g className="animate-sway origin-[105px_60px]">
                {/* Scale Arm */}
                <rect x="45" y="60" width="120" height="6" rx="3" fill="var(--primary)" />

                {/* Left Pan (Gold) */}
                <g>
                    <path d="M45 65L30 100H60L45 65Z" fill="var(--primary)" fillOpacity="0.1" stroke="var(--primary)" strokeWidth="2" />
                    <circle cx="45" cy="90" r="8" fill="#FCD34D" stroke="var(--primary)" strokeWidth="1.5" />
                    <circle cx="52" cy="95" r="6" fill="#FCD34D" stroke="var(--primary)" strokeWidth="1.5" />
                </g>

                {/* Right Pan (Coins/Money) */}
                <g>
                    <path d="M165 65L150 100H180L165 65Z" fill="var(--primary)" fillOpacity="0.1" stroke="var(--primary)" strokeWidth="2" />
                    <rect x="155" y="85" width="20" height="12" rx="2" fill="white" stroke="var(--primary)" strokeWidth="1.5" />
                    <path d="M165 88V98" stroke="var(--primary)" strokeWidth="1.5" />
                </g>
            </g>

            {/* Decorative Elements */}
            <circle cx="180" cy="40" r="4" fill="var(--primary)" fillOpacity="0.4" />
            <circle cx="30" cy="130" r="6" fill="var(--primary)" fillOpacity="0.2" />
        </svg>
    );
}
