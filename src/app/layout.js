
import Footer from "./Footer";
import "./globals.css";
import Navbar from "./Navbar";

export const metadata = {
  title: "Website-2",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en" className="dark">
    <html lang="en" className="dark">
      <body className={` antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
