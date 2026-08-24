import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./animations.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clinicamedicafenix.com.br"),
  title: "Pactual Proteção Veicular | Preço Justo e Sem Burocracia",
  description: "Há mais de 15 anos protegendo famílias e veículos comerciais. Proteção completa, preço justo, sem análise de SPC/Serasa e com assistência 24 horas por dia.",
  keywords: ["proteção veicular", "seguro de carro", "seguro auto", "associação pactual", "proteção para aplicativo", "seguro de moto", "proteção de caminhão", "nova iguaçu", "rio de janeiro"],
  authors: [{ name: "Pactual Benefícios" }],
  creator: "Pactual Benefícios",
  publisher: "Pactual Benefícios",
  icons: {
    icon: "/images/logos/logo-vertical-normal.png",
    shortcut: "/images/logos/logo-vertical-normal.png",
    apple: "/images/logos/logo-vertical-normal.png",
  },
  openGraph: {
    title: "Pactual Proteção Veicular",
    description: "Sua tranquilidade levada a sério. Proteção completa, preço justo e sem consulta ao SPC/Serasa.",
    url: "https://pactual.org.br",
    siteName: "Pactual Benefícios",
    images: [
      {
        url: "/images/logos/logo-horizontal-normal.png",
        width: 1200,
        height: 630,
        alt: "Pactual Proteção Veicular",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pactual Proteção Veicular",
    description: "Sua tranquilidade levada a sério. Proteção completa, preço justo e sem consulta ao SPC/Serasa.",
    images: ["/images/logos/logo-horizontal-normal.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preload" as="image" href="/Energy_shield_poster.jpg" fetchPriority="high" />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans bg-white text-pactual-graphite">
        {children}
      </body>
    </html>
  );
}

