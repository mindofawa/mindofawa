// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import NavBot from "../components/BottomNav";
import AuthProvider from "../components/AuthProvider";

export const metadata: Metadata = {
  title: "SnapZoška",
  description: "With love by %$@!*&",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <main style={{ flexGrow: 1 }}>
              {children}
            </main>
          </div>
          <NavBot /> 
        </AuthProvider>
      </body>
    </html>
  );
}


