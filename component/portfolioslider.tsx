"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { MdChevronRight } from "react-icons/md";
import { portfolios, type PortfolioData } from "@/data/Portfolio";

export type PortfolioItem = {
  id: number;
  src: string;
  alt: string;
  href: string;
  tags: string[];
  date: string;
  links: PortfolioData["links"];
};

const items: PortfolioItem[] = [...portfolios]
  .sort((a, b) => b.timestmp.localeCompare(a.timestmp)) // 新しい順
  .map((portfolio) => ({
    id: portfolio.id,
    src: `/images/portfolio/${portfolio.id}.png`,
    alt: String(portfolio.id),
    href: `/portfolio/${portfolio.id}`,
    tags: portfolio.tags,
    date: portfolio.timestmp,
    links: portfolio.links,
  }));

export default function PortfolioSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [canSlideNext, setCanSlideNext] = useState(false);

  const updateNavigation = (swiper: SwiperType) => {
    setCanSlideNext(!swiper.isEnd && !swiper.isLocked);
  };

  const visibilityClass = canSlideNext
    ? "opacity-100"
    : "pointer-events-none opacity-0";

  return (
    <div className="relative overflow-hidden">
      <Swiper
        modules={[FreeMode]}
        freeMode
        slidesPerView="auto"
        spaceBetween={24}
        slidesOffsetBefore={0}
        slidesOffsetAfter={28}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          updateNavigation(swiper);
        }}
        onProgress={updateNavigation}
        onFromEdge={updateNavigation}
        onResize={updateNavigation}
        onUpdate={updateNavigation}
        onReachEnd={() => setCanSlideNext(false)}
        onLock={() => setCanSlideNext(false)}
        onUnlock={updateNavigation}
        role="region"
        aria-label="ポートフォリオ作品一覧"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="!w-[70vw] md:!w-[304px]">
            <Link
              href={item.href}
              className="relative block aspect-video overflow-hidden rounded-xl bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-700"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 70vw, 304px"
                className="object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 右端の白い靄 */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white via-white/70 to-transparent transition-opacity duration-300 ${visibilityClass}`}
      />

      {/* 次へボタン */}
      <button
        type="button"
        onClick={() => swiperRef.current?.slideNext()}
        disabled={!canSlideNext}
        tabIndex={canSlideNext ? 0 : -1}
        aria-label="次の作品を見る"
        className={`absolute right-4 top-1/2 z-20 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-neutral-800 shadow-md ring-1 ring-black/5 transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700 disabled:cursor-default md:grid ${visibilityClass}`}
      >
        <MdChevronRight className="size-6" />
      </button>
    </div>
  );
}
