import React from "react";
import type { Metadata } from "next";
import {
  TbBrandYoutube,
  TbBrandGithub,
  TbMusic,
  TbCode,
  TbExternalLink,
} from "react-icons/tb";

export const metadata: Metadata = {
  title: "制作物 | 彩音のサイト",
  openGraph: {
    title: "制作物一覧",
    description:
      "彩音が今までに制作したUTAUカバーやプログラミング作品の一覧です！",
  },
  twitter: {
    title: "制作物一覧",
    description:
      "彩音が今までに制作したUTAUカバーやプログラミング作品の一覧です！",
  },
};

// UTAUカバー作品のデータ
const utauWorks = [
  {
    title: "ダーリン",
    Source: "馳音ヤタ",
    description:
      "初めてのUTAUカバー作品です！UTAUについてあまり知らない状態から一日で作りました。",
    youtubeUrl: "",
    otherUrl: "https://utaloader.net/music/20251012171037191623",
    date: "2025.10.13",
  },
  {
    title: "深海少女 -deep sea girl-",
    Source: "謎",
    description:
      "二日目の作品（二作品目）です。今回はできるだけ自分だけで作ってみました",
    youtubeUrl: "",
    otherUrl: "https://utaloader.net/music/20251013044059705603",
    date: "2025.10.13",
  },
  {
    title: "ひつじがいっぴき",
    Source: "馳音ユト",
    description: "別の人にMIX教えてもらいました。",
    youtubeUrl: "",
    otherUrl: "https://utaloader.net/music/20251025171825824177",
    date: "2025.10.26",
  },
];

const devWorks = [
  {
    title: "彩音のてきとーなホームページ",
    description: "このサイトのことである。てきとーに作ったのでほんとてきとー！",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/ayane0857/ayane-official-site-v2",
    siteUrl: "https://ayane0857.net",
    date: "2026.01.19",
  },
  {
    title: "彩奏 彼方 公式サイト",
    description: "単独音で構成されたシンプルな音源。",
    techStack: ["Next.js"],
    githubUrl: "https://github.com/ayane0857/ayane-utau-site",
    siteUrl: "https://utau.ayane0857.net",
    date: "2025.01.29",
  },
  {
    title: "彩音のスライド公開所",
    description: "彩音がLTなどで使用したスライドを公開しています。",
    techStack: ["Next.js"],
    githubUrl: "https://github.com/ayane0857/slides",
    siteUrl: "https://slide.ayane0857.net",
    date: "2025.01.29",
  },
];

export default function Works() {
  return (
    <main className="p-6 mx-auto min-h-screen flex items-center justify-center py-24">
      <div className="bg-[#e8d6d0] rounded-[2rem] max-w-5xl w-full p-10 md:p-16 shadow-lg shadow-black/5 text-center">
        {/* ヘッダー */}
        <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
          Works
          <span className="block text-sm font-medium text-gray-500 mt-1 uppercase tracking-widest">
            制作物一覧
          </span>
        </h2>

        <div className="mt-16 space-y-16 text-left">
          {/* UTAUカバー セクション */}
          <section>
            <div className="flex items-center gap-3 mb-6 ml-2 border-l-4 border-white/50 pl-3">
              <TbMusic className="text-gray-700" size={24} />
              <h3 className="text-xl font-bold text-gray-700">UTAU Covers</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {utauWorks.map((work, idx) => (
                <div
                  key={idx}
                  className="flex flex-col bg-white/50 p-6 rounded-2xl hover:bg-white transition-all duration-300 shadow-sm group"
                >
                  <span className="text-xs font-bold text-gray-400 tracking-widest mb-2 block">
                    {work.date}
                  </span>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    {work.title}
                  </h4>
                  <p className="text-sm text-gray-500 mb-4">
                    Original: {work.Source || "不明"}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {work.youtubeUrl && (
                      <a
                        href={work.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                      >
                        <TbBrandYoutube size={18} />
                        YouTube
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* プログラミング セクション */}
          <section>
            <div className="flex items-center gap-3 mb-6 ml-2 border-l-4 border-white/50 pl-3">
              <TbCode className="text-gray-700" size={24} />
              <h3 className="text-xl font-bold text-gray-700">Development</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {devWorks.map((work, idx) => (
                <div
                  key={idx}
                  className="flex flex-col bg-white/50 p-6 rounded-2xl hover:bg-white transition-all duration-300 shadow-sm group"
                >
                  <span className="text-xs font-bold text-gray-400 tracking-widest mb-2 block">
                    {work.date}
                  </span>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    {work.title}
                  </h4>

                  {/* 使用技術のタグ */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-gray-200/50 text-gray-600 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                    {work.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    {work.githubUrl && (
                      <a
                        href={work.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                      >
                        <TbBrandGithub size={18} />
                        GitHub
                      </a>
                    )}
                    {work.siteUrl && (
                      <a
                        href={work.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                      >
                        <TbExternalLink size={18} />
                        Website
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
