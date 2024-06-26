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
      <div class="bg-back bg-cover bg-center h-screen">
        <div className="max-w-3xl mx-auto p-4">
          <Navbar />
          <div className="mt-8">
          {children}
          </div>
        </div>
        </div>
      </body>
    </html>
  );
}
