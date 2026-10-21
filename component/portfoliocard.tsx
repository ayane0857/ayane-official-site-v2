import Image from "next/image";
import { FiEye } from "react-icons/fi";
import type { ProjectData } from "@/data/Portfolio"; // 実際のパスに合わせてください

type Props = {
  project: ProjectData;
  title: string;
  viewLabel: string;
};

export default function PortfolioCard({ project, title, viewLabel }: Props) {
  const { links } = project;
  const href = "/portfolio/" + project.id;

  const className =
    "group relative block aspect-[16/10] overflow-hidden rounded-[2rem] bg-[#1a1a1d]";

  const content = (
    <>
      {links.image && (
        <Image
          src={links.image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/60 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <FiEye size={28} />
        <span className="text-xl font-bold">{viewLabel}</span>
      </div>

      <h2 className="absolute bottom-4 left-6 z-10 text-2xl font-bold text-white drop-shadow">
        {title}
      </h2>
    </>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}
