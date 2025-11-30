"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { IllustrationBell } from "./illustrations/IllustrationBell";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function ZakatReminderModal() {
    const [interval, setInterval] = useState<string>("monthly");

    const handleCreateReminder = () => {
        // 1. Calculate Start Date (Tomorrow)
        const startDate = new Date();
        startDate.setDate(startDate.getDate() + 1); // Start tomorrow

        // Format date as YYYYMMDD
        const formatDate = (date: Date) => {
            return date.toISOString().replace(/-|:|\.\d\d\d/g, "").substring(0, 8);
        };

        const startStr = formatDate(startDate);
        const endStr = startStr; // Single day event

        // 2. Define Recurrence Rule (RRULE)
        let rrule = "FREQ=MONTHLY"; // Default
        switch (interval) {
            case "monthly":
                rrule = "FREQ=MONTHLY";
                break;
            case "3months":
                rrule = "FREQ=MONTHLY;INTERVAL=3";
                break;
            case "6months":
                rrule = "FREQ=MONTHLY;INTERVAL=6";
                break;
            case "yearly":
                rrule = "FREQ=YEARLY";
                break;
        }

        // 3. Construct URL
        const title = encodeURIComponent("Waktunya cek zakat maal");
        const details = encodeURIComponent("Cek ulang harta kamu, apakah masih di atas nisab. Kalau iya, hitung dan tunaikan zakat maal 2,5%.\n\nHitung ulang zakat di: https://www.mal.web.id/");
        const location = encodeURIComponent("Malku Zakat Calculator");

        // Google Calendar Template URL
        const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&ctz=Asia%2FJakarta&text=${title}&details=${details}&location=${location}&dates=${startStr}/${endStr}&recur=RRULE:${rrule}`;

        // Open in new tab
        window.open(url, "_blank");
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" size="lg" className="shadow-lg hover:shadow-xl transition-all">
                    Buat pengingat zakat
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md sm:rounded-3xl gap-0 p-0 overflow-hidden border-0 shadow-2xl">
                <div className="p-5 sm:p-6 pb-0 flex flex-col items-center text-center space-y-2">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mb-1 sm:mb-2">
                        <IllustrationBell />
                    </div>
                    <DialogHeader className="space-y-1.5 sm:space-y-2">
                        <DialogTitle className="text-xl sm:text-2xl font-bold text-center">Pilih pengingat zakat kamu</DialogTitle>
                        <DialogDescription className="text-center text-sm sm:text-base max-w-[280px] sm:max-w-xs mx-auto leading-relaxed">
                            Biar kamu tidak lupa cek ulang nisab dan bayar zakat maal secara rutin.
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <div className="px-5 sm:px-6 py-4 sm:py-0">
                    <RadioGroup defaultValue="monthly" onValueChange={setInterval} className="grid gap-2 sm:gap-2">
                        {[
                            { id: "monthly", label: "Bulanan" },
                            { id: "3months", label: "Tiap 3 bulan" },
                            { id: "6months", label: "Tiap 6 bulan" },
                            { id: "yearly", label: "Tahunan" }
                        ].map((option) => (
                            <div key={option.id} className="relative">
                                <RadioGroupItem value={option.id} id={option.id} className="peer sr-only" />
                                <Label
                                    htmlFor={option.id}
                                    className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl border border-border/50 bg-background hover:bg-muted/50 cursor-pointer transition-all peer-data-[state=checked]:border-primary/20 peer-data-[state=checked]:bg-primary/5 peer-data-[state=checked]:ring-1 peer-data-[state=checked]:ring-primary peer-data-[state=checked]:[&_.check-circle]:bg-primary peer-data-[state=checked]:[&_.check-circle]:border-primary peer-data-[state=checked]:[&_.check-icon]:opacity-100"
                                >
                                    <span className="font-medium text-sm sm:text-base">{option.label}</span>
                                    <div className="check-circle w-5 h-5 rounded-full border border-primary/30 flex items-center justify-center transition-all shadow-sm">
                                        <Check className="check-icon w-3 h-3 text-primary-foreground opacity-0 transition-opacity" strokeWidth={3} />
                                    </div>
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>

                <div className="px-5 sm:px-6 pb-4 sm:pb-0">
                    <div className="bg-muted/40 p-3 sm:p-4 rounded-xl text-[11px] sm:text-xs text-muted-foreground space-y-1.5 border border-border/40">
                        <p className="font-semibold text-foreground flex items-center gap-2">
                            Catatan fiqih
                        </p>
                        <p className="leading-relaxed opacity-90">
                            Membayar zakat maal lebih awal secara bertahap dibolehkan selama total setahun mencapai 2,5% dari harta yang sudah mencapai nisab.
                        </p>
                    </div>
                </div>

                <DialogFooter className="p-5 sm:p-6 pt-2 sm:justify-between gap-3 bg-muted/10">
                    <DialogClose asChild>
                        <Button type="button" variant="ghost" className="w-full sm:w-auto hover:bg-muted/50 h-11 sm:h-10 rounded-xl">
                            Nanti saja
                        </Button>
                    </DialogClose>
                    <Button type="button" onClick={handleCreateReminder} className="w-full sm:w-auto rounded-xl h-11 sm:h-10 text-base sm:text-sm font-medium">
                        Buat pengingat
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
