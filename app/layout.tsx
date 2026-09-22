import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini-diagnóstico Comercial | SP.mkt — R$297",
  description:
    "Descubra o gargalo que trava suas vendas — em 1 sessão. Mini-diagnóstico Comercial: 45–60 min + mapa padronizado + 3 ações objetivas. R$297.",
  openGraph: {
    title: "Mini-diagnóstico Comercial | SP.mkt",
    description:
      "Descubra o gargalo que trava suas vendas — em 1 sessão. 45–60 min + mapa + 3 ações. R$297.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
