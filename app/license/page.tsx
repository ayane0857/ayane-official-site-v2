import type { Metadata } from "next";
import { TbLink, TbPalette, TbCheck } from "react-icons/tb";

export const metadata: Metadata = {
  title: "ライセンス",
  openGraph: {
    title: "ライセンス",
    description: "彩音に関するライセンスを記載しています",
  },
  twitter: {
    title: "ライセンス",
    description: "彩音に関するライセンスを記載しています",
  },
};

export default function License() {
  return (
    <main className="p-6 mx-auto min-h-screen flex items-center justify-center">
      <div className="bg-[#e8d6d0] rounded-[2rem] max-w-2xl w-full p-10 md:p-16 shadow-lg shadow-black/5 text-center">
        {/* ヘッダー部分 */}
        <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
          License
          <span className="block text-sm font-medium text-gray-500 mt-1 uppercase tracking-widest">
            ライセンス
          </span>
        </h2>

        {/* コンテンツ部分 */}
        <div className="mt-12 bg-white/50 p-8 rounded-2xl text-left border border-white/20">
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            このサイトのコンテンツは、
            <span className="mx-1 font-semibold text-gray-800">
              Creative Commons CC BY-NC 4.0
            </span>
            に基づいて提供されています。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-800 border-l-4 border-gray-400 pl-3">
            クリエイタークレジット
          </h3>
          
          <div className="mt-5 space-y-4">
            {/* イラスト制作セクション */}
            <div className="flex gap-4 p-4 bg-white/70 rounded-xl border border-gray-200/30 hover:bg-white/90 transition-colors duration-300">
              <div className="mt-1">
                <TbPalette className="h-6 w-6 text-gray-600 flex-shrink-0" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Illustration</span>
                <ul className="mt-1 text-gray-700 text-sm md:text-base space-y-1">
                  <li>
                    <span className="font-semibold text-gray-800 text-lg">さ</span>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800 text-lg">ユネ</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 書類チェックセクション */}
            <div className="flex gap-4 p-4 bg-white/70 rounded-xl border border-gray-200/30 hover:bg-white/90 transition-colors duration-300">
              <div className="mt-1">
                <TbCheck className="h-6 w-6 text-gray-600 flex-shrink-0" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Document Review</span>
                <div className="mt-1 text-gray-700 text-sm md:text-base">
                  <span className="font-semibold text-gray-800 text-lg">しひろ</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200/50">
            <a
              href="https://creativecommons.org/licenses/by-nc/4.0/deed.ja"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              <span className="font-medium underline underline-offset-4 decoration-gray-300 group-hover:decoration-gray-600">
                クリエイティブ・コモンズの詳細を見る
              </span>
              <TbLink className="h-5 w-5 opacity-70 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}