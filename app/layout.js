import "./globals.css";
import SocialSidebar from "../src/components/SocialSidebar"; 
import Navbar from "../src/components/Navbar"; 

export const metadata = {
  title: "Anvit Verma",
  description: "AI Engineer & Researcher",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a192f] text-[#8892b0] relative selection:bg-[#64ffda] selection:text-[#0a192f]">
        
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