import "@/app/ui/global.css";
import { montserrat } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className="py-6 flex justify-center items-center">
          Hecho con ❤️ por la gente de Vercel
        </footer>
      </body>
    </html>
  );
}
