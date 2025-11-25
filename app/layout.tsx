import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = { title: "Thirumalai — Blog", description: "Quantum, AI, Deep Tech, Research & Personal Writings." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0B0C10] text-gray-200 antialiased">
        <Navbar />
        <main className="min-h-screen max-w-3xl mx-auto px-4 py-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
