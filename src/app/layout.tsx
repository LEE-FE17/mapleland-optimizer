import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "메이플랜드 아이템 최적화",
  description: "직업별 마을 아이템 가격 비교 및 레벨별 쇼핑 가이드",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-50">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg text-gray-900">
              🍄 메이플랜드 최적화
            </Link>
            <nav className="flex gap-1">
              <Link
                href="/compare"
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
              >
                가격 비교
              </Link>
              <Link
                href="/guide"
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
              >
                레벨 가이드
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">{children}</main>
        <footer className="border-t border-gray-200 py-4 text-center text-xs text-gray-400">
          메이플랜드 비공식 팬사이트 · 데이터는 직접 수집된 것입니다
        </footer>
      </body>
    </html>
  );
}
