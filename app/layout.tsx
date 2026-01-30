import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { GoToTop } from "@/components/GoToTop";
import { Loader } from "@/components/Loader";

export const metadata: Metadata = {
  title: "Wedding — Joefrey & Sheila",
  description: "We Are Getting Married",
  keywords: "wedding, html5, template, responsive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Sacramento"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/icomoon.css" />
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <Loader />
        <div id="page">
          <Nav />
          {children}
          <Footer />
        </div>
        <GoToTop />
      </body>
    </html>
  );
}
