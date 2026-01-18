import Image from "next/image";
import ScrollingLogoNav from "../components/reciprocallink";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="gap-6">
      <main className="py-12 flex justify-center min-h-screen">
        <div className="flex w-full max-w-6xl items-center justify-center gap-16 px-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">彩音</h2>
            <p className="text-gray-600 leading-relaxed w-80 whitespace-pre-line">
              {`2010年製の学生エンジニアもどき
              さまざまなことに手を付け始めてる愚か者
              楽しそうなことはなんでもやるが理解はできていない模様
              よわよわエンジニアなので手加減をしてほしいです`}
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/ayane-toushin.png"
              alt="彩音の等身大画像"
              width={357}
              height={500}
              className="max-h-[500px] object-contain"
            />
          </div>
        </div>
      </main>
      <section className="py-12 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold">相互リンク</h2>
        <ScrollingLogoNav />
      </section>
    </div>
  );
}
