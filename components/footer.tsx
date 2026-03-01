import {
  TbStar,
  TbSparkles,
  TbBrandGithub,
  TbBrandTwitter,
  TbBrandYoutube,
  TbBuildingStore,
  TbHome,
  TbLicense,
  TbMail,
  TbFlower,
} from "react-icons/tb";
import Link from "next/link";

export default function Footer() {
  return (
    // モバイルではマージンを小さく(my-8 mx-4)、デスクトップで(md:m-16)に戻す
    <footer className="my-8 mx-4 md:m-16 pb-8">
      {/* 装飾アイコンセクション */}
      <div className="flex justify-center items-center mb-8 space-x-2 md:space-x-4 text-[#d4a5a5]">
        <TbFlower className="w-5 h-5 animate-pulse" />
        <TbStar className="w-4 h-4 animate-bounce" />
        <TbSparkles className="w-6 h-6 animate-pulse" />
        <TbStar className="w-4 h-4 animate-bounce" />
        <TbFlower className="w-5 h-5 animate-pulse" />
      </div>

      <div className="flex justify-center">
        {/* パディングをモバイル向けに調整(px-6) */}
        <div className="bg-[#e8d6d0] px-6 py-8 md:px-12 rounded-3xl max-w-4xl w-full">
          {/* SNSアイコン - モバイルでは少し間隔を詰める */}
          <div className="flex justify-center space-x-5 md:space-x-8 mb-8">
            <a
              href="https://github.com/ayane0857"
              className="text-gray-700 hover:text-[#d4a5a5] transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <TbBrandGithub className="w-7 h-7 md:w-8 md:h-8" />
            </a>
            <a
              href="https://x.com/ayane0857_"
              className="text-gray-700 hover:text-[#d4a5a5] transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <TbBrandTwitter className="w-7 h-7 md:w-8 md:h-8" />
            </a>
            <a
              href="https://ayane0857.booth.pm/"
              className="text-gray-700 hover:text-[#d4a5a5] transition-all hover:scale-110"
              aria-label="Booth"
            >
              <TbBuildingStore className="w-7 h-7 md:w-8 md:h-8" />
            </a>
            <a
              href="https://youtube.com/@ayane0857"
              className="text-gray-700 hover:text-[#d4a5a5] transition-all hover:scale-110"
              aria-label="YouTube"
            >
              <TbBrandYoutube className="w-7 h-7 md:w-8 md:h-8" />
            </a>
          </div>

          {/* フッターナビゲーション - flex-wrapで折り返しに対応 */}
          <div className="flex flex-wrap justify-center gap-y-4 gap-x-6 md:gap-x-10 mb-8 text-sm font-semibold text-gray-600">
            <Link
              href="/"
              className="hover:text-gray-800 flex items-center space-x-1 whitespace-nowrap"
            >
              <TbHome className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-800 flex items-center space-x-1 whitespace-nowrap"
            >
              <TbMail className="w-4 h-4" />
              <span>Contact</span>
            </Link>
            <Link
              href="/license"
              className="hover:text-gray-800 flex items-center space-x-1 whitespace-nowrap"
            >
              <TbLicense className="w-4 h-4" />
              <span>License</span>
            </Link>
            <Link
              href="/skills"
              className="hover:text-gray-800 flex items-center space-x-1 whitespace-nowrap"
            >
              <TbStar className="w-4 h-4" />
              <span>Skill</span>
            </Link>
            <Link
              href="/works"
              className="hover:text-gray-800 flex items-center space-x-1 whitespace-nowrap"
            >
              <TbSparkles className="w-4 h-4" />
              <span className="hover:text-gray-800">works</span>
            </Link>
          </div>

          {/* コピーライト */}
          <div className="text-center text-gray-600 text-xs md:text-sm">
            <p>© 2026 Ayane. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
