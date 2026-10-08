import "./globals.css";

import localFont from "next/font/local";
import { Sparkles } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { FavoriteProvider } from "@/context/FavoriteContext";
import { createClient } from "@/lib/supabase/server";

const fontSans = localFont({
  src: [
    {
      path: "./fonts/PlusJakartaSans-Variable.woff2",
      style: "normal",
    },
    {
      path: "./fonts/PlusJakartaSans-Italic-Variable.woff2",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "MyWebsite — Build something meaningful",
  description:
    "We help individuals and businesses build modern, simple, and useful digital experiences.",
};

export default async function RootLayout({ children }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html
      lang="en"
      className={`dark ${fontSans.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        {/* Background dekoratif untuk semua halaman */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid bg-radial-fade" />

          <div className="absolute top-1/2 left-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[120px]" />
          <div className="animate-blob absolute top-16 left-10 h-72 w-72 rounded-full bg-accent/40 blur-[90px]" />
          <div className="animate-blob absolute top-40 right-10 h-72 w-72 rounded-full bg-[#FFDE59]/40 blur-[90px] [animation-delay:4s]" />
          <div className="animate-blob absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-[#7B5CFF]/35 blur-[90px] [animation-delay:2s]" />
          <div className="animate-blob absolute bottom-20 right-1/4 h-56 w-56 rounded-full bg-secondary/50 blur-[90px] [animation-delay:6s]" />

          <Sparkles className="absolute top-10 right-16 size-6 animate-pulse text-[#FFDE59]" />
          <Sparkles className="absolute bottom-20 left-12 size-5 animate-pulse text-accent [animation-delay:1s]" />
          <Sparkles className="absolute top-1/3 left-8 size-4 animate-pulse text-primary [animation-delay:2s]" />
        </div>
        
        <AuthProvider user={user ? { id: user.id, email: user.email } : null}>
          <FavoriteProvider>
            <Navbar />

            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </FavoriteProvider>
        </AuthProvider>
      </body>
    </html>
  );
}