export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      Esto es el layout del dashboard
      {children}
    </section>
  );
}
