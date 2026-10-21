import Header from "@/component/header";
import Footer from "@/component/footer";
import PortfolioSlider from "@/component/portfolioslider";
import Socials from "@/component/socials";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { MdChevronRight } from "react-icons/md";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div className="flex flex-col gap-16">
      <section className="flex items-center justify-center gap-8 px-8 py-4">
        <div className="w-full max-w-[300px] md:w-1/3 md:max-w-none shrink-0">
          <Image
            src="/images/avatar.png"
            alt="Avatar"
            width={400}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-6xl font-bold">Ayane</p>
            <span className="text-xl text-[#545454]">Student / Engineer</span>
          </div>
          <p className="text-2xl whitespace-pre-line">{t("HeroText")}</p>
          <div>
            <p className="text-xl text-[#545454]">Tags</p>
            <div className="flex items-center gap-2">
              <span className="bg-[#f1f1f1] px-4 py-1 rounded-full">
                #UniProject
              </span>
              <span className="bg-[#f1f1f1] px-4 py-1 rounded-full">
                #Next.js
              </span>
              <span className="bg-[#f1f1f1] px-4 py-1 rounded-full">
                #TypeScript
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="px-16 gap-6 flex flex-col">
        <div className="flex items-center justify-between">
          <p className="text-4xl font-semibold">Portfolio</p>
          <Link
            href="/portfolio"
            className="flex items-center gap-2 text-[#545454] cursor-pointer"
          >
            <p>{t("ViewPortfolio")}</p>
            <MdChevronRight size={24} />
          </Link>
        </div>
        <PortfolioSlider />
      </section>
      <section className="px-16 gap-6 flex flex-col">
        <p className="text-4xl font-semibold">Socials</p>
        <Socials />
      </section>
    </div>
  );
}
