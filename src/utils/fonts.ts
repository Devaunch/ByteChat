import { Poppins, JetBrains_Mono, Dancing_Script } from "next/font/google";

export const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const jetBrainsMono = JetBrains_Mono({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

export const dancingScript = Dancing_Script({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});
