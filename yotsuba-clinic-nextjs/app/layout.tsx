import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "よつばオンラインメディカル | オーストラリアで日本語の医療相談",
  description: "オーストラリア全土で日本語による医療相談が可能。500名以上の日本人医師ネットワークと充実した医療通訳体制で安心の診療を提供します。",
  keywords: "オーストラリア,日本語,医療,オンライン診療,日本人医師,医療通訳",
  openGraph: {
    title: "よつばオンラインメディカル",
    description: "オーストラリアで、日本語で相談できる医療を",
    url: "https://yotsuba-medical.com.au",
    siteName: "よつばオンラインメディカル",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
