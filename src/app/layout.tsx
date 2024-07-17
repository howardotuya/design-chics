import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supportive Network for African Women in Design",
  description: "Join our community of African women in design to access resources, opportunities, and support for your design journey. We offer insights, skill-building workshops, networking events, and mentorship programs to empower female designers and foster creativity, innovation, and professional growth.",
  openGraph: {
    title: "Supportive Network for African Women in Design",
    description: "Join our community of African women in design to access resources, opportunities, and support for your design journey. We offer insights, skill-building workshops, networking events, and mentorship programs to empower female designers and foster creativity, innovation, and professional growth.",
    url: "https://www.designchics.com/",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/path/to/image.jpg",
        width: 800,
        height: 600,
        alt: "African Women in Design Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supportive Network for African Women in Design",
    description: "Join our community of African women in design to access resources, opportunities, and support for your design journey. We offer insights, skill-building workshops, networking events, and mentorship programs to empower female designers and foster creativity, innovation, and professional growth.",
    images: [
      {
        url: "https://yourwebsite.com/path/to/image.jpg",
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
        className={`${inter.className} bg-neutral-950 min-h-[100vh] flex flex-col`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
