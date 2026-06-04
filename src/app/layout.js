import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "HNA | Your Complete Business & Financial Partner",
  description: "Holistic Network of Accounting (HNA) LLP provides integrated accounting, taxation, compliance, outsourcing, and technology solutions in Ernakulam, Kerala.",
  keywords: "Accounting, Bookkeeping, Tax Consulting, GST, BPO, Financial Management, Ernakulam, Kerala",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
