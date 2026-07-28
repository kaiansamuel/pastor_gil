import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lapidando Tesouros — Pastor Gil",
  description:
    "Comunidade terapêutica gratuita liderada pelo Pastor Gil, dedicada à recuperação de dependentes químicos em Aparecida de Goiânia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
      {/* Google Analytics removido: o gaId do template original apontava para a conta de outra pessoa. Adicionar de volta com o gaId real da Lapidando Tesouros. */}
    </html>
  );
}
