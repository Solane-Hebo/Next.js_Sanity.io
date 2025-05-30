import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:{
    default: "Events - Events in Stockholm",
    template: "%s | Events in Stockholm",
  },
  description: "Built a website using Next.js 15, Sanity, and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-slate-50 min-h-screen flex flex-col`}
      >
        
        {children}
     
    
      </body>
    </html>
  );
}
