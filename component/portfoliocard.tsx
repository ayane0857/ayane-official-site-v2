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
  /** 表示バリアント：standard（ギャラリー型） / featured（代表作の横長ショーケース型） */
  variant?: "standard" | "featured";
  /** 任意：一覧での通し番号（例: 1 -> "01" と表示） */
  index?: number;
  /** 任意：制作年や担当領域などのメタ情報（例: "2026 — Web Design & Dev"） */
  meta?: string;
  /** 任意：作品の概要文 */
  description?: string;
};

const MAX_TAGS = 3;
const FALLBACK_IMAGE = "/images/no_image.jpg";

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

  // 画像URLの読み込み失敗時に自動でフォールバックへ切り替える
  const [failedUrl, setFailedUrl] = useState<string | null>(null);
  const imgSrc = failedUrl === sourceUrl ? FALLBACK_IMAGE : sourceUrl;

  const isFeatured = variant === "featured";
  const maxVisibleTags = isFeatured ? 5 : MAX_TAGS;
  const visibleTags = tags.slice(0, maxVisibleTags);
  const restCount = tags.length - visibleTags.length;

  const formattedIndex =
    typeof index === "number" ? String(index).padStart(2, "0") : null;

  // ---------------------------------------------------------------------------
  // 1. Featured バリアント（代表作・ピックアップ用の横長2カラムショーケース）
  // ---------------------------------------------------------------------------
  if (isFeatured) {
    return (
      <Link
        href={`/portfolio/${portfolio.id}`}
        aria-label={`${title} — ${viewLabel}`}
        className="group relative grid grid-cols-1 overflow-hidden rounded-3xl border border-neutral-200/80 bg-neutral-50/70 transition-all duration-500 hover:border-neutral-300 hover:bg-white hover:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700 dark:hover:bg-neutral-900 dark:focus-visible:ring-white lg:grid-cols-12 motion-reduce:transition-none"
      >
        {/* 左側：大判ビジュアル（7カラム） */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200/60 dark:bg-neutral-800 lg:col-span-7 lg:aspect-auto lg:min-h-[360px]">
          <Image
            src={imgSrc}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            onError={() => setFailedUrl(sourceUrl)}
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10"
          />
        </div>

        {/* 右側：エディトリアル情報＆CTA（5カラム） */}
        <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:col-span-5 lg:p-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs font-medium tracking-widest text-neutral-500 uppercase dark:text-neutral-400">
              {formattedIndex && (
                <span className="font-mono text-neutral-900 dark:text-neutral-200">
                  {formattedIndex}
                </span>
              )}
              {formattedIndex && meta && (
                <span aria-hidden className="h-px w-6 bg-neutral-300 dark:bg-neutral-700" />
              )}
              {meta && <span>{meta}</span>}
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-white">
              {title}
            </h2>

            {description && (
              <p className="line-clamp-3 text-sm leading-relaxed text-neutral-600 sm:text-base dark:text-neutral-400">
                {description}
              </p>
            )}

            {visibleTags.length > 0 && (
              <ul className="flex flex-wrap gap-2 pt-1">
                {visibleTags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800/80 dark:text-neutral-300"
                  >
                    {tag}
                  </li>
                ))}
                {restCount > 0 && (
                  <li className="rounded-full px-2 py-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    +{restCount}
                  </li>
                )}
              </ul>
            )}
          </div>

          {/* 明確なアクションボタン */}
          <div className="pt-2">
            <span
              aria-hidden
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 group-hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:group-hover:bg-neutral-200"
            >
              <span>{viewLabel}</span>
              <FiArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // ---------------------------------------------------------------------------
  // 2. Standard バリアント（枠線を排したミニマル・ギャラリースタイル）
  // ---------------------------------------------------------------------------
  return (
    <Link
      href={`/portfolio/${portfolio.id}`}
      aria-label={`${title} — ${viewLabel}`}
      className="group flex flex-col focus-visible:outline-none"
    >
      {/* サムネイル領域：カード枠から切り離し、写真集のプレートのように配置 */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-black/5 transition-shadow duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.16)] group-focus-visible:ring-2 group-focus-visible:ring-neutral-900 group-focus-visible:ring-offset-4 dark:bg-neutral-800 dark:ring-white/10 dark:group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] dark:group-focus-visible:ring-white">
        <Image
          src={imgSrc}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          onError={() => setFailedUrl(sourceUrl)}
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />

        {/* ホバー時に浮かび上がるフローティング・アクションピル */}
        <div
          aria-hidden
          className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/35 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
        >
          <span className="inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-neutral-900 shadow-lg backdrop-blur-md transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0 motion-reduce:transition-none motion-reduce:translate-y-0">
            <span>{viewLabel}</span>
            <FiArrowUpRight size={14} />
          </span>
        </div>
      </div>

      {/* テキスト領域：背景塗りをなくし、余白とタイポグラフィで構成 */}
      <div className="flex flex-1 flex-col justify-between gap-3 pt-4">
        <div className="space-y-1.5">
          {/* インデックス番号＆メタ情報 */}
          {(formattedIndex || meta) && (
            <div className="flex items-center gap-2.5 text-xs font-medium tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
              {formattedIndex && (
                <span className="font-mono text-neutral-400 transition-colors group-hover:text-neutral-900 dark:text-neutral-500 dark:group-hover:text-white">
                  {formattedIndex}
                </span>
              )}
              {formattedIndex && meta && (
                <span aria-hidden className="h-px w-4 bg-neutral-300 dark:bg-neutral-700" />
              )}
              {meta && <span className="truncate">{meta}</span>}
            </div>
          )}

          {/* タイトル行：ホバーで右上の矢印が連動 */}
          <div className="flex items-start justify-between gap-3">
            <h2 className="line-clamp-2 text-lg font-bold tracking-tight text-neutral-900 transition-colors group-hover:text-neutral-600 dark:text-neutral-100 dark:group-hover:text-neutral-300 sm:text-xl">
              {title}
            </h2>
            <FiArrowUpRight
              aria-hidden
              size={20}
              className="mt-0.5 shrink-0 text-neutral-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-900 dark:text-neutral-500 dark:group-hover:text-white motion-reduce:transition-none"
            />
          </div>

          {description && (
            <p className="line-clamp-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {description}
            </p>
          )}
        </div>

        {/* ミニマルなボーダータグ */}
        {visibleTags.length > 0 && (
          <ul className="flex flex-wrap items-center gap-1.5 pt-1">
            {visibleTags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-neutral-200/90 px-2.5 py-0.5 text-xs font-medium text-neutral-600 transition-colors group-hover:border-neutral-300 dark:border-neutral-800 dark:text-neutral-400 dark:group-hover:border-neutral-700"
              >
                {tag}
              </li>
            ))}
            {restCount > 0 && (
              <li className="px-1.5 text-xs font-medium text-neutral-400 dark:text-neutral-500">
                +{restCount}
              </li>
            )}
          </ul>
        )}
      </div>
    </Link>
  );
}