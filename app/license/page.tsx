import { TbLink } from "react-icons/tb";

export default function License() {
  return (
    <main className="p-6 mx-auto min-h-screen flex items-center justify-center">
      <div className="bg-[#e8d6d0] rounded-[2rem] max-w-2xl w-full p-10 md:p-16 shadow-lg shadow-black/5 text-center">
        {/* ヘッダー部分：お問い合わせと同じスタイル */}
        <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
          License
          <span className="block text-sm font-medium text-gray-500 mt-1 uppercase tracking-widest">
            ライセンス
          </span>
        </h2>

        {/* コンテンツ部分：白背景のカードで可読性をアップ */}
        <div className="mt-12 bg-white/50 p-8 rounded-2xl text-left border border-white/20">
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            このサイトのコンテンツは、
            <span className="font-semibold text-gray-800">
              Creative Commons CC BY-NC 4.0
            </span>
            に基づいて提供されています。
          </p>

          <div className="mt-8 pt-6 border-t border-gray-200/50">
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
