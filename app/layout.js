import "./globals.css";
import SocialLeft from "../components/SocialLeft";
import SocialRight from "../components/SocialRight";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Anvit Verma | Portfolio",
  description: "Anvit Verma is a software engineer specializing in building exceptional digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-navy text-slate">
        <Navbar />
        <SocialLeft />
        <SocialRight />
        {children}
      </body>
    </html>
  );
}