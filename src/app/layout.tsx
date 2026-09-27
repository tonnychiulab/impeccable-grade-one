import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "一年級",
  description:
    "做完一年級，學習者能在短時間內交出一個看得見的結果，另一個人打開就能指著它說這就是成品。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-Hant" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
