import "./globals.css";
import Navbar from "../src/components/Navbar";
// Replaced SocialLeft with the SocialSidebar we created
import SocialSidebar from "../src/components/SocialSidebar"; 
import SocialRight from "../src/components/SocialRight";

export const metadata = {
  title: "Portfolio",
  description: "Built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a192f] text-[#8892b0] overflow-x-hidden relative">
        {/* Navbar fixed at the top */}
        <Navbar />
        
        {/* Sidebars fixed to the viewport - visible on md screens and up */}
        {/* This wrapper handles the 'hidden' logic, so SocialSidebar works perfectly here */}
        <div className="hidden md:block">
            <SocialSidebar />
            <SocialRight />
        </div>

        {/* Main Content Wrapper */}
        <div className="flex flex-col min-h-screen">
            {children}
        </div>
      </body>
    </html>
  );
}