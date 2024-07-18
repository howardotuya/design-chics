import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Empowering African Women in Design: Join Our Community",
  description: "Join our community of African women in design to access resources, opportunities, and support for your design journey. We offer insights, skill-building workshops, networking events, and mentorship programs to empower female designers and foster creativity, innovation, and professional growth.",
  openGraph: {
    locale: 'en_US',
    title: "Empowering African Women in Design: Join Our Community",
    description: "Join our community of African women in design to access resources, opportunities, and support for your design journey. We offer insights, skill-building workshops, networking events, and mentorship programs to empower female designers and foster creativity, innovation, and professional growth.",
    url: "https://www.designchics.com/",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/devhorla/image/upload/v1721301285/Screenshot_2024-07-18_at_12.13.52_PM_rgdtv8.png",
        width: 800,
        height: 600,
        alt: "African Women in Design Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Empowering African Women in Design: Join Our Community",
    description: "Join our community of African women in design to access resources, opportunities, and support for your design journey. We offer insights, skill-building workshops, networking events, and mentorship programs to empower female designers and foster creativity, innovation, and professional growth.",
    images: [
      {
        url: "https://res.cloudinary.com/devhorla/image/upload/v1721301285/Screenshot_2024-07-18_at_12.13.52_PM_rgdtv8.png",
        alt: "African Women in Design Community",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-950 min-h-[100vh] flex flex-col max-w-screen-2xl mx-auto`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
