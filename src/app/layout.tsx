import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "alman_ — Computer Engineering Graduate",
  description:
    "Portfolio of Alman Kamal Mahdi. Computer Engineering graduate from Diponegoro University. Backend Developer, Machine Learning, Networking. PHP, Laravel, Python, MySQL.",
  keywords: [
    "Computer Engineering",
    "Backend Developer",
    "Machine Learning",
    "PHP",
    "Laravel",
    "Python",
    "Portfolio",
  ],
  openGraph: {
    title: "alman_ — Computer Engineering Graduate",
    description:
      "Computer Engineering graduate from Diponegoro University. Backend Developer with experience in PHP, Laravel, Python, and Machine Learning.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} ${outfit.variable}`}>
        {children}
        {/* Console Easter Egg */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log(
                "%c" +
                "\\n" +
                "  ╔══════════════════════════════════════╗\\n" +
                "  ║                                      ║\\n" +
                "  ║   █▀█ █   █▄█ █▀█ █▄ █              ║\\n" +
                "  ║   █▀█ █▄▄ █ █ █▀█ █ ▀█ _            ║\\n" +
                "  ║                                      ║\\n" +
                "  ║   Computer Engineering Graduate     ║\\n" +
                "  ║                                      ║\\n" +
                "  ╚══════════════════════════════════════╝\\n" +
                "\\n",
                "color: #888888; font-family: monospace; font-size: 12px;"
              );
              console.log(
                "%c> Curious enough to open DevTools? Nice. Let's talk: almankm317@gmail.com",
                "color: #666666; font-family: monospace; font-size: 11px;"
              );
              console.log(
                "%c> This site was built with Next.js, TypeScript, and zero AI templates.",
                "color: #555555; font-family: monospace; font-size: 11px;"
              );
            `,
          }}
        />
      </body>
    </html>
  );
}
