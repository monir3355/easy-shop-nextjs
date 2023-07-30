import classNames from "@/utils/classNames";
import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Easy Shop",
  description: "Online busy and sell products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className="transition-all">
      <body
        className={classNames(
          roboto.variable,
          "container mx-auto px-2, font-roboto"
        )}
        suppressHydrationWarning={true}
      >
        <div>
          <Navbar />
          <div className="min-h-[calc(100vh-390px)]">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
