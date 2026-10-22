import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { FiEye } from "react-icons/fi";
import type { PortfolioData } from "@/data/Portfolio";

type Props = {
  portfolio: PortfolioData;
  title: string;
  viewLabel: string;
};

export default function PortfolioCard({ portfolio, title, viewLabel }: Props) {
  const { links } = portfolio;

  return (
    <Link
      href={`/portfolio/${portfolio.id}`}
      aria-label={`${title} — ${viewLabel}`}
      className="group relative block aspect-[16/10] overflow-hidden rounded-3xl bg-neutral-900 shadow-sm outline-none transition-shadow hover:shadow-xl focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-4"
    >
      {links.image ? (
        <Image
          src={links.image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-700 via-neutral-900 to-black"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <FiEye size={28} />
        <span className="text-xl font-bold">{viewLabel}</span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-3 p-5 text-white sm:p-6">
        <h2 className="text-xl font-bold drop-shadow sm:text-2xl">{title}</h2>
        {portfolio.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {portfolio.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/25 bg-black/30 px-2.5 py-1 text-xs font-medium backdrop-blur-sm"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
