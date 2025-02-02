import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import FlyCard from "@/components/FlyCard";
import LatestStory from "@/components/LatestStory";
import Caroucel from "@/components/Caroucel";
 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Banner />
        <div className="bg-[#F2F2F2]">
          <Caroucel />
         <FlyCard />
         <LatestStory />
        </div>
        
   
        {children}
        </body>
    </html>
  );
}
