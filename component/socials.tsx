import type { ReactNode } from "react";
import { Avatar } from "@base-ui/react/avatar";
import Image from "next/image";
import {
  FiGithub,
  FiTwitter,
  FiYoutube,
  FiInstagram,
  FiArrowUpRight,
} from "react-icons/fi";

type Social = {
  name: string;
  handle: string;
  href: string;
  size: "large" | "small";
  icon?: ReactNode;
  iconSrc?: string;
};

const iconClass = "size-9 text-neutral-900";

const socials: Social[] = [
  {
    name: "GitHub",
    handle: "@ayane0857",
    href: "https://github.com/ayane0857",
    size: "large",
    icon: <FiGithub className={iconClass} />,
  },
  {
    name: "Twitter",
    handle: "@ayane0857_",
    href: "https://twitter.com/ayane0857_",
    size: "large",
    icon: <FiTwitter className={iconClass} />,
  },
  {
    name: "Youtube",
    handle: "@ayane0857",
    href: "https://www.youtube.com/@ayane0857",
    size: "small",
    icon: <FiYoutube className={iconClass} />,
  },
  {
    name: "Booth",
    handle: "ayane0857.booth.pm",
    href: "https://ayane0857.booth.pm",
    size: "small",
    icon: (
      <Image
        src="/icons/booth.svg"
        alt="icon"
        width={24}
        height={24}
        className="brightness-0"
      />
    ),
  },
  {
    name: "Qiita",
    handle: "@ayane0857",
    href: "https://qiita.com/ayane0857",
    size: "small",
    icon: (
      <Image
        src="/icons/qiita.svg"
        alt="icon"
        width={24}
        height={24}
        className="brightness-0"
      />
    ),
  },
  {
    name: "Instagram",
    handle: "@ayane0857",
    href: "https://www.instagram.com/ayane0857",
    size: "small",
    icon: <FiInstagram className={iconClass} />,
  },
];

function SocialIcon({
  social,
  className,
}: {
  social: Social;
  className: string;
}) {
  return (
    <Avatar.Root
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ${className}`}
    >
      <Avatar.Fallback className="flex items-center justify-center">
        {social.icon ?? (
          <span className="text-lg font-semibold">{social.name[0]}</span>
        )}
      </Avatar.Fallback>
    </Avatar.Root>
  );
}

function SocialCard({ social }: { social: Social }) {
  const base =
    "group relative rounded-3xl bg-neutral-100 p-6 text-neutral-900 transition-colors hover:bg-neutral-200/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900";
  const arrow = (
    <FiArrowUpRight
      aria-hidden
      className="size-6 shrink-0 text-neutral-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
  );

  if (social.size === "large") {
    return (
      <a
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} flex min-h-64 flex-col justify-between md:row-span-2 md:col-span-1`}
      >
        <div className="flex items-start justify-between">
          <SocialIcon social={social} className="size-14" />
          {arrow}
        </div>
        <div>
          <p className="text-3xl leading-tight">{social.name}</p>
          <p className="text-lg text-neutral-500">{social.handle}</p>
        </div>
      </a>
    );
  }

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} flex items-center gap-4`}
    >
      <SocialIcon social={social} className="size-14" />
      <div className="min-w-0 flex-1">
        <p className="text-2xl leading-tight">{social.name}</p>
        <p className="truncate text-lg text-neutral-500">{social.handle}</p>
      </div>
      {arrow}
    </a>
  );
}

export default function Socials() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2">
      {socials.map((s) => (
        <SocialCard key={s.name} social={s} />
      ))}
    </div>
  );
}
