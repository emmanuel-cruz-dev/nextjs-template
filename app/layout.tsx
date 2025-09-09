import "@/app/ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Hello world!</h1>
        <section>{children}</section>
      </body>
    </html>
  );
}
