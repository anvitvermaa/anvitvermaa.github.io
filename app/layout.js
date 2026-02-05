import "./globals.css";
import SocialSidebar from "../src/components/SocialSidebar"; 
import Navbar from "../src/components/Navbar"; 

export const metadata = {
  title: "Anvit Verma",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Reverted body to simple classes; font is handled in globals.css */}
      <body className="bg-[#0a192f] text-[#8892b0]">
        
        {/* 1. NAVBAR */}
        <Navbar />

        {/* 2. Sidebars (Hidden on mobile) */}
        <div className="hidden md:block">
            <SocialSidebar />
        </div>

        {/* 3. Main Content */}
        <div className="flex flex-col min-h-screen">
            {children}
        </div>
      </body>
    </html>
  );
}