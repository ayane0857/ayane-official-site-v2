import Image from "next/image";
import ScrollingLogoNav from "@/components/reciprocallink";
import { ServiceCard } from "@/components/ui/service-card";

export default function Home() {
  return (
    <div className="gap-6">
      <main className="py-12 flex justify-center min-h-screen items-center">
        <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl items-center justify-center gap-8 md:gap-16 px-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">彩音</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed w-full max-w-xs md:w-80 whitespace-pre-line mx-auto md:mx-0">
              {`2010年製の学生エンジニアもどき
        さまざまなことに手を付け始めてる愚か者
        楽しそうなことはなんでもやるが理解はできていない模様
        よわよわエンジニアなので手加減をしてほしいです`}
            </p>
          </div>

          <div className="flex justify-center w-full max-w-[240px] md:max-w-none">
            <Image
              src="/ayane-toushin.png"
              alt="彩音の等身大画像"
              width={357}
              height={500}
              priority
              className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain"
            />
          </div>
        </div>
      </main>
      <section className="py-20 px-4 max-w-5xl mx-auto w-full">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">サービス</h2>
          <p className="text-muted-foreground mt-2 text-center">
            運営・制作しているサービス
          </p>
          <div className="h-1 w-12 bg-primary mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="彩奏 彼方"
            description="単独音で構成されたシンプルな音源。"
            type="UTAU"
            link="https://utau.ayane0857.net"
          />
          <ServiceCard
            title="彩音のスライド公開所"
            description="彩音がLTなどで使用したスライドを公開しています。"
            type="Portfolio"
            link="https://slides.ayane0857.net"
          />
        </div>
      </section>
      <section className="py-20 px-4 max-w-5xl mx-auto w-full flex flex-col items-center">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">相互リンク</h2>
          <p className="text-muted-foreground mt-2 text-center">
            古のサイトにありがちな相互なリンク達
          </p>
          <div className="h-1 w-12 bg-primary mt-4 rounded-full" />
        </div>
        <ScrollingLogoNav />
      </section>
    </div>
  );
}
