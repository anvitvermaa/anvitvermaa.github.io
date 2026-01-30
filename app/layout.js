// app/layout.js
import "./globals.css";
import SocialSidebar from "../src/components/SocialSidebar"; 
import SocialRight from "../src/components/SocialRight";
import Navbar from "../src/components/Navbar"; // IMPORT IS HERE

export const metadata = {
  title: "Anvit Verma",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a192f] text-[#8892b0]">
        
        {/* 1. NAVBAR MUST BE HERE (Directly inside Body) */}
        <Navbar />

        {/* 2. Sidebars (Hidden on mobile, visible on desktop) */}
        <div className="hidden md:block">
            <SocialSidebar />
            <SocialRight />
        </div>

        {/* 3. Main Content */}
        <div className="flex flex-col min-h-screen">
            {children}
        </div>
      </body>
    </html>
  );
}