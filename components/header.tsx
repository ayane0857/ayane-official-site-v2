import Link from "next/link";
import { TbSparkles, TbStar, TbHome, TbLicense, TbMail } from "react-icons/tb";

export default function Header() {
  return (
    <header className="m-4 flex justify-center">
      <div className="bg-[#e8d6d0] px-8 py-3 rounded-full">
        <nav>
          <ul className="flex space-x-8 font-bold text-gray-700">
            <li>
              <Link href="skill" className="hover:text-gray-900" title="スキル">
                <TbStar className="inline mb-1 mr-1 w-7 h-7" />
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                className="hover:text-gray-900"
                title="コンタクト"
              >
                <TbMail className="inline mb-1 mr-1 w-7 h-7" />
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-900" title="ホーム">
                <TbHome className="inline mb-1 mr-1 w-7 h-7" />
              </Link>
            </li>
            <li>
              <Link
                href="license"
                className="hover:text-gray-900"
                title="ライセンス"
              >
                <TbLicense className="inline mb-1 mr-1 w-7 h-7" />
              </Link>
            </li>
            <li>
              <Link href="works" className="hover:text-gray-900" title="制作物">
                <TbSparkles className="inline mb-1 mr-1 w-7 h-7" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
