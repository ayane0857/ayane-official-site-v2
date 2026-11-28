"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { FiArrowUpRight } from "react-icons/fi";
import type { PortfolioData } from "@/data/Portfolio";

type Props = {
  portfolio: PortfolioData;
  title: string;
  viewLabel: string;
  /** standard: 一覧用カード / featured: 代表作用の大型カード */
  variant?: "standard" | "featured";
  /** 任意：一覧での通し番号（1 -> "01"） */
  index?: number;
  /** 任意：制作年や担当領域など（例: "2026 / Web Design & Dev"） */
  meta?: string;
  /** 任意：作品の概要文 */
  description?: string;
};

const MAX_TAGS = 3;
const MAX_TAGS_FEATURED = 5;
const FALLBACK_IMAGE = "/images/no_image.jpg";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 light:focus-visible:ring-neutral-900 focus-visible:ring-offset-4 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-800";

export default function PortfolioCard({
  portfolio,
  title,
  viewLabel,
  variant = "standard",
  index,
  meta,
  description,
}: Props) {
  const { links, tags } = portfolio;

  const sourceUrl = links.image?.url || FALLBACK_IMAGE;
  const [failedUrl, setFailedUrl] = useState<string | null>(null);
  const imgSrc = failedUrl === sourceUrl ? FALLBACK_IMAGE : sourceUrl;

  const isFeatured = variant === "featured";
  const visibleTags = tags.slice(0, isFeatured ? MAX_TAGS_FEATURED : MAX_TAGS);
  const restCount = tags.length - visibleTags.length;

  const formattedIndex =
    typeof index === "number" ? String(index).padStart(2, "0") : null;

  const tagList =
    visibleTags.length > 0 ? (
      <ul className="flex flex-wrap items-center gap-1.5">
        {visibleTags.map((tag) => (
          <li
            key={tag}
            className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tag}
          </li>
        ))}
        {restCount > 0 && (
          <li className="px-1 text-xs text-neutral-500 dark:text-zinc-400">
            +{restCount}
          </li>
        )}
      </ul>
    ) : null;

  // ---------------------------------------------------------------------------
  // Featured: 画像を全面に敷き、情報パネルを手前に重ねる
  // ---------------------------------------------------------------------------
  if (isFeatured) {
    return (
      <Link
        href={`/portfolio/${portfolio.id}`}
        aria-label={`${title} — ${viewLabel}`}
        className={`group relative flex min-h-[26rem] items-end overflow-hidden rounded-3xl bg-neutral-200 p-4 sm:min-h-[30rem] sm:p-6 lg:min-h-[34rem] lg:p-8 dark:bg-zinc-700 ${focusRing}`}
      >
        <Image
          src={imgSrc}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 80vw, 100vw"
          onError={() => setFailedUrl(sourceUrl)}
          className="scale-100 object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />

        {formattedIndex && (
          <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-sm font-semibold text-neutral-900 tabular-nums sm:top-6 sm:left-6 dark:bg-zinc-900 dark:text-zinc-100">
            {formattedIndex}
          </span>
        )}

        {/* 情報パネル */}
        <div className="relative z-10 flex w-full flex-col gap-4 rounded-2xl bg-white p-5 shadow-xl sm:max-w-md sm:p-6 dark:bg-zinc-900">
          {meta && (
            <p className="text-sm text-neutral-500 dark:text-zinc-400">
              {meta}
            </p>
          )}

          <h2 className="text-2xl font-bold leading-snug tracking-tight text-neutral-900 sm:text-3xl dark:text-zinc-100">
            {title}
          </h2>

          {description && (
            <p className="line-clamp-3 text-sm leading-relaxed text-neutral-600 dark:text-zinc-300">
              {description}
            </p>
          )}

          {tagList}

          <div className="flex items-center justify-between border-t border-neutral-200 pt-4 dark:border-zinc-800">
            <span className="text-sm font-semibold text-neutral-900 dark:text-zinc-100">
              {viewLabel}
            </span>
            <span
              aria-hidden
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none motion-reduce:group-hover:rotate-0 dark:bg-zinc-700 dark:text-zinc-100"
            >
              <FiArrowUpRight size={18} />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // ---------------------------------------------------------------------------
  // Standard: 画像 → タイトル行 → 説明 → タグ のシンプルな縦構成
  // ---------------------------------------------------------------------------
  return (
    <Link
      href={`/portfolio/${portfolio.id}`}
      aria-label={`${title} — ${viewLabel}`}
      className={`group flex flex-col gap-4 rounded-2xl ${focusRing}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-zinc-700">
        <Image
          src={imgSrc}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          onError={() => setFailedUrl(sourceUrl)}
          className="scale-100 object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        {formattedIndex && (
          <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-0.5 text-xs font-semibold text-neutral-900 tabular-nums dark:bg-zinc-900/95 dark:text-zinc-100">
            {formattedIndex}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-start gap-3">
          <div className="min-w-0 flex-1">
            <h2 className="line-clamp-2 text-lg font-bold leading-snug tracking-tight text-neutral-900 dark:text-zinc-100">
              {title}
            </h2>
            {meta && (
              <p className="mt-1 truncate text-sm text-neutral-500 dark:text-zinc-400">
                {meta}
              </p>
            )}
          </div>

          <span
            aria-hidden
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors duration-300 light:group-hover:border-neutral-500 light:group-hover:bg-neutral-100 light:group-hover:text-neutral-900 motion-reduce:transition-none dark:border-zinc-700 dark:text-zinc-300 dark:group-hover:border-zinc-300 dark:group-hover:bg-zinc-700 dark:group-hover:text-zinc-100"
          >
            <FiArrowUpRight size={16} />
          </span>
        </div>

        {description && (
          <p className="line-clamp-2 text-sm leading-relaxed text-neutral-600 dark:text-zinc-400">
            {description}
          </p>
        )}

        {tagList}
      </div>
    </Link>
  );
}
