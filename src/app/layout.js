import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "To Do App",
  description: "The best To Do app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div class="bg-mount bg-cover bg-center min-h-screen flex flex-col justify-between items-center">
        <div className="max-w-3xl mx-96 p-4">
          <Navbar />
          <div className="mt-8 mb-auto">
          {children}
          </div>
          <div className="mx-96"></div>
        </div >
        <Footer className="w-screen"/>
        </div>
      </body>
    </html>
  );
}