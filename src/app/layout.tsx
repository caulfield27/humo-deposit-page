import type { Metadata } from "next";
import {Golos_Text} from "next/font/google"
import  "./globals.css";
import { Header } from "@/widgets/header";

const golos = Golos_Text({ subsets: ["latin"],weight:["400", "500","600","700"]});

export const metadata: Metadata = {
  title: "Humo Deposit page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={golos.className}>
        <div className='wrapper'>
          <Header/>
          {children}
        </div>
      </body>
    </html>
  );
}
