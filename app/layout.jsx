import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WishlistDrawer from "@/components/WishlistDrawer";
import AiTripPlannerModal from "@/components/AiTripPlannerModal";
import AmbientAudioPlayer from "@/components/AmbientAudioPlayer";

export const metadata = {
  title: "Bharat Yatra 🇮🇳 | The Definitive Travel & Cultural Guide to India",
  description: "An ultra-modern travel platform celebrating the historic fortresses, tranquil backwaters, sacred temples, and Himalayan landscapes of Bharat.",
  keywords: ["Bharat Yatra", "Incredible India", "Rajasthan Forts", "Kerala Backwaters", "Taj Mahal", "Varanasi Ghats", "Leh Ladakh", "Luxury Travel India"],
  authors: [{ name: "Bharat Yatra Team" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,600;0,800;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#050811] text-gray-100 font-['Outfit',sans-serif] selection:bg-amber-500 selection:text-black">
        <AppProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <WishlistDrawer />
          <AiTripPlannerModal />
          <AmbientAudioPlayer />
        </AppProvider>
      </body>
    </html>
  );
}
