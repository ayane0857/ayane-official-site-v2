import React from "react";
import { TbMail, TbBrandTwitter } from "react-icons/tb";

export default function About() {
  return (
    <div className="p-6 mx-auto min-h-screen flex items-center justify-center">
      <div className="bg-[#e8d6d0] rounded-[2rem] max-w-2xl w-full p-10 md:p-16 shadow-lg shadow-black/5 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
          Contact
          <span className="block text-sm font-medium text-gray-500 mt-1 uppercase tracking-widest">
            お問い合わせ
          </span>
        </h2>

        <div className="mt-12 space-y-4">
          <a
            href="https://x.com/ayane0857_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white/50 hover:bg-white transition-all duration-300 py-4 px-6 rounded-2xl group"
          >
            <TbBrandTwitter className="w-5 h-5 text-[#1DA1F2] group-hover:scale-110 transition-transform" />
            <span className="font-medium text-gray-700">@ayane0857_</span>
          </a>

          <a
            href="mailto:info@ayane0857.net"
            className="flex items-center justify-center gap-3 bg-white/50 hover:bg-white transition-all duration-300 py-4 px-6 rounded-2xl group"
          >
            <TbMail className="w-5 h-5 text-gray-600 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-gray-700 underline underline-offset-4 decoration-gray-300">
              info@ayane0857.net
            </span>
          </a>
        </div>

        <p className="mt-10 text-xs text-gray-500">お気軽にご連絡ください。</p>
      </div>
    </div>
  );
}
