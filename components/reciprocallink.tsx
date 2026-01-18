import { IoIosLink } from "react-icons/io";
const links = [
  { name: "Nico", url: "https://ilovejunkpcnico.netlify.app/" },
  {
    name: "めろんそ〜だ",
    url: "https://mellllonsoda.github.io/mellllonsoda-s-page/",
  },
  { name: "kaeru", url: "https://www.kaerubasyo.com/" },
  { name: "ゆいと", url: "https://www.yuito-it.jp/" },
  { name: "ActiveTK", url: "https://activetk.jp/" },
  { name: "256server", url: "https://256server.com/" },
  { name: "しひろ", url: "https://shihiro.com/" },
];

export default function LinkScroller() {
  return (
    <div className="scroller-container">
      <div className="scroller-inner">
        <div className="scroll-list">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="link-item text-lg font-medium text-gray-500 transition-all duration-300 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
              <IoIosLink className="inline-block text-gray-500 transition-colors duration-300 group-hover:text-gray-900" />
            </a>
          ))}
        </div>
        <div className="scroll-list" aria-hidden="true">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="link-item text-lg font-medium text-gray-500 transition-all duration-300 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
              <IoIosLink className="inline-block text-gray-500 transition-colors duration-300 group-hover:text-gray-900" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
