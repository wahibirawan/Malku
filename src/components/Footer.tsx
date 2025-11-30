import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-12 border-t border-border/40 bg-background">
            <div className="container px-4 md:px-6 mx-auto max-w-6xl text-center text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Malku. All rights reserved.</p>
                <div className="flex items-center justify-center gap-2 mt-2 text-sm">
                    <span>Dibuat dengan <span className="text-red-500 animate-pulse">❤</span> untuk umat oleh <Link
                        href="https://github.com/wahibirawan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary hover:underline inline-flex items-center gap-1 transition-colors"
                    >
                        Wahib Irawan
                    </Link></span>

                </div>
            </div>
        </footer>
    );
}
