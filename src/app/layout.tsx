import type { Metadata, Viewport } from "next";
import "./globals.css";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";

export const viewport: Viewport = {
  viewportFit: "auto"  

}

export const metadata: Metadata = {
  title: "Immanuel Velikovsky",
  description: "Worlds in Collision - A experiência digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho></Cabecalho>
        {children}
        <Rodape></Rodape>
      </body>
    </html>
  );
}