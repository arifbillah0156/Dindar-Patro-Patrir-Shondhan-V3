import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  title: "দ্বীনদার পাত্র/পাত্রীর সন্ধান",
  description:
    "Halal Marriage Platform | দ্বীনদার পাত্র বা পাত্রীর জন্য বিশ্বস্ত ও ইসলামীক নিয়মে বিয়ের মাধ্যম। এখনই আপনার যোগ্য জীবনসঙ্গী খুঁজুন আমাদের ওয়েবসাইটে। এখানে ফ্রীতে বায়োডাটা জমা দিতে পারবেন।",
  keywords:
    "দ্বীনদার পাত্র, দ্বীনদার পাত্রীর সন্ধান, ইসলামিক বিয়ে, মুসলিম ম্যারেজ মিডিয়া, পাত্রের বায়োডাটা, পাত্রীর বায়োডাটা, Halal Marriage, Islamic Matrimony, মুসলিম বিয়ে, বিয়ের মাধ্যম, দ্বীনদার জীবনসঙ্গী",
  author: "Dindar Patro Patri Team",
  icons: "/Web Icon.png",

  // Google Site Verification
  verification: {
    "google-site-verification": "sJOws3r9s8CvjuIwHU65ZBLdx_uDrgq0tKIs4SGSssM",
  },

  // Open Graph (Facebook, LinkedIn) Meta Tags
  openGraph: {
    title: "দ্বীনদার পাত্র/পাত্রীর সন্ধান",
    description:
      "দ্বীনদার পাত্র/পাত্রীর সন্ধান | Trusted Halal Marriage. বিশ্বস্ত ও ইসলামী নিয়মে বিয়ের উপযুক্ত পাত্র/পাত্রীর সন্ধান করুন।",
    url: "https://www.dindarpatropatri.xyz/",
    type: "website",
    image: {
      url: "https://www.dindarpatropatri.xyz/og-image.jpg",
      width: 1200,
      height: 630,
      type: "image/jpeg",
    },
  },

  // Twitter Card Meta Tags
  twitter: {
    card: "summary_large_image",
    title: "দ্বীনদার পাত্র/পাত্রীর সন্ধান",
    description:
      "বিশ্বস্ত ইসলামিক বিয়ে সংক্রান্ত প্ল্যাটফর্ম, যেখানে দ্বীনদার পাত্র-পাত্রীর সন্ধান পাওয়া যায়।",
    image: "https://www.dindarpatropatri.xyz/twitter-image.jpg",
  },

  // Robots Meta (Allow Search Engine Indexing)
  robots: "index, follow",

  // Canonical URL (Prevent Duplicate Content Issues)
  alternates: {
    canonical: "https://www.dindarpatropatri.xyz/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" dir="ltr">
      <head>
        <meta httpEquiv="Content-Language" content="bn" />

        {/*  */}
        {/* Google Analytics (Replace 'G-1KMMWWDHLH' with your actual Measurement ID) */}

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-1KMMWWDHLH"
        ></Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1KMMWWDHLH');
            `,
          }}
        ></Script>
      </head>
      <body className="bg-gray-50">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
