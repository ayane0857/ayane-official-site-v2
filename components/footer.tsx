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
  TbUser,
} from "react-icons/tb";
export default function Footer() {
  return (
    <footer className="mt-16 pb-8">
      <div className="flex justify-center items-center mb-8 space-x-4 text-[#d4a5a5]">
        <TbFlower className="w-5 h-5 animate-pulse" />
        <TbStar className="w-4 h-4 animate-bounce" />
        <TbSparkles className="w-6 h-6 animate-pulse" />
        <TbStar className="w-4 h-4 animate-bounce" />
        <TbFlower className="w-5 h-5 animate-pulse" />
      </div>

      <div className="flex justify-center">
        <div className="bg-[#e8d6d0] px-12 py-8 rounded-3xl max-w-4xl w-full mx-4">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://github.com/ayane0857"
              className="text-gray-700 hover:text-[#d4a5a5] transition-all hover:scale-110"
            >
              <TbBrandGithub className="w-8 h-8" />
            </a>
            <a
              href="https://x.com/ayane0857_"
              className="text-gray-700 hover:text-[#d4a5a5] transition-all hover:scale-110"
            >
              <TbBrandTwitter className="w-8 h-8" />
            </a>
            <a
              href="https://ayane0857.booth.pm/"
              className="text-gray-700 hover:text-[#d4a5a5] transition-all hover:scale-110"
            >
              <TbBuildingStore className="w-8 h-8" />
            </a>
            <a
              href="https://youtube.com/@ayane0857"
              className="text-gray-700 hover:text-[#d4a5a5] transition-all hover:scale-110"
            >
              <TbBrandYoutube className="w-8 h-8" />
            </a>
          </div>

          {/* フッターナビゲーション */}
          <div className="flex justify-center space-x-8 mb-6 text-sm font-semibold text-gray-600">
            <a
              href="#"
              className="hover:text-gray-800 flex items-center space-x-1"
            >
              <TbHome className="w-4 h-4" />
              <span>Home</span>
            </a>
            <a
              href="#"
              className="hover:text-gray-800 flex items-center space-x-1"
            >
              <TbMail className="w-4 h-4" />
              <span>Contact</span>
            </a>
            <a
              href="#"
              className="hover:text-gray-800 flex items-center space-x-1"
            >
              <TbLicense className="w-4 h-4" />
              <span>License</span>
            </a>
            <a
              href="#"
              className="hover:text-gray-800 flex items-center space-x-1"
            >
              <TbUser className="w-4 h-4" />
              <span>About</span>
            </a>
          </div>

          <div className="text-center text-gray-600 text-sm">
            <p className="flex items-center justify-center space-x-2">
              <span>© 2026 Ayane. All rights reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
