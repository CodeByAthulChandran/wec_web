
"use client";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ 
  subsets: ["latin"],
  weight: [ "100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function LayoutWrapper({ children }) {

    return (
        <>
            <Header />
            <main className={workSans.className}>
                {children}
            </main>
            <Footer/>
        </>
    );
}
