import { TbSparkles, TbHeart, TbHome, TbLicense, TbMail } from "react-icons/tb";

export default function Header() {
  return (
    <header className="m-4 flex justify-center">
      <div className="bg-[#e8d6d0] px-8 py-3 rounded-full">
        <nav>
          <ul className="flex space-x-8 font-bold text-gray-700">
            <li>
              <a href="sponsor" className="hover:text-gray-900">
                <TbHeart className="inline mb-1 mr-1 w-7 h-7" />
              </a>
            </li>
            <li>
              <a href="contact" className="hover:text-gray-900">
                <TbMail className="inline mb-1 mr-1 w-7 h-7" />
              </a>
            </li>
            <li>
              <a href="home" className="hover:text-gray-900">
                <TbHome className="inline mb-1 mr-1 w-7 h-7" />
              </a>
            </li>
            <li>
              <a href="license" className="hover:text-gray-900">
                <TbLicense className="inline mb-1 mr-1 w-7 h-7" />
              </a>
            </li>
            <li>
              <a href="share" className="hover:text-gray-900">
                <TbSparkles className="inline mb-1 mr-1 w-7 h-7" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
