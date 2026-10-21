import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/Portfolio";

async function PortfolioContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const t = await getTranslations("Portfolio");
  const { id } = await params;

  return (
    <div>
      <div className="px-5 pt-6 sm:px-8 lg:px-16">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-1.5 rounded-full bg-gray-200 px-4 py-1.5 text-sm text-gray-600 transition hover:bg-gray-300"
        >
          ← Portfolio
        </Link>
      </div>

      <div className="flex flex-col items-start justify-between gap-10 px-5 py-10 sm:flex-row sm:items-center sm:gap-8 sm:px-8 lg:px-16">
        <div className="max-w-xl shrink-0">
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
            {t(`${id}.title`)}
          </h1>
          <p className="mt-4 max-w-md whitespace-pre-line text-lg leading-relaxed text-[#545454] sm:text-xl">
            {t(`${id}.description`)}
          </p>
        </div>

        <div className="w-full max-w-2xl">
          <Image
            src={`/images/portfolio/${id}.png`}
            alt={String(id)}
            width={800}
            height={600}
            className="h-auto w-full rounded-4xl object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default function Portfolio(props: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={null}>
      <PortfolioContent {...props} />
    </Suspense>
  );
}
