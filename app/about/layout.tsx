import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <span>123</span>
      {children}
    </div>
  );
}
