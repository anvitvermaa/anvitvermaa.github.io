import "./globals.css";
import SocialSidebar from "../src/components/SocialSidebar"; 
import Navbar from "../src/components/Navbar"; 
import SideRays from "../src/components/SideRays";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  title: "Anvit Verma",
  description: "AI Engineer & Researcher",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#111111] text-[#aaaaaa] relative selection:bg-[#ffffff] selection:text-[#111111]">
        
        {/* Background SideRays */}
        <div className="fixed inset-0 z-[0] pointer-events-none">
          <SideRays />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Sidebar - Always Rendered */}
        <SocialSidebar />

        {/* Page Content */}
        <div className="flex flex-col min-h-screen">
            {children}
        </div>
        
      </body>
    </html>
  );
}