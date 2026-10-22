export type PortfolioLinks = {
  site?: string[];
  github?: string | null;
  utaloader?: string | null;
  slides?: string | null;
  image?: string | null;
};

export type PortfolioData = {
  id: number;
  tags: string[];
  timestmp: string;
  links: PortfolioLinks;
};

export const portfolios: PortfolioData[] = [
  {
    id: 0,
    tags: ["Next.js", "MicroCMS"],
    timestmp: "2025-06-29",
    links: {
      site: ["https://utau.ayane0857.net"],
      github: "https://github.com/ayane0857/ayane-utau-site",
      image: "/images/portfolio/utau-site.png",
    },
  },
  {
    id: 1,
    tags: ["LT"],
    timestmp: "2025-08-30",
    links: {
      slides: "https://file.ayane0857.net/lt/create-open-balance.pdf",
      image: "/images/portfolio/open-balance-api.png",
    },
  },
  {
    id: 2,
    tags: ["Mix", "UTAU", "馳音ヤタ"],
    timestmp: "2025-10-13",
    links: {
      utaloader: "https://utaloader.net/music/20251012171037191623",
    },
  },
  {
    id: 3,
    tags: ["Mix", "UTAU", "謎"],
    timestmp: "2025-10-13",
    links: {
      utaloader: "https://utaloader.net/music/20251013044059705603",
    },
  },
  {
    id: 4,
    tags: ["Mix", "UTAU", "馳音ユト"],
    timestmp: "2025-10-26",
    links: {
      utaloader: "https://utaloader.net/music/20251025171825824177",
    },
  },
  {
    id: 5,
    tags: ["LT"],
    timestmp: "2025-12-27",
    links: {
      slides: "https://file.ayane0857.net/lt/many-new-technology.pdf",
      image: "/images/portfolio/new-technology.png",
    },
  },
  {
    id: 6,
    tags: ["Affinity"],
    timestmp: "2026-07-13",
    links: {
      site: [
        "https://file.ayane0857.net/artworks/banner-7-4.png",
        "https://file.ayane0857.net/artworks/header-7-4.png",
      ],
      image: "/images/portfolio/header.png",
    },
  },
  {
    id: 7,
    tags: ["Next.js"],
    timestmp: "2026-10-22",
    links: {
      site: ["https://ayane0857.net/"],
      github: "https://github.com/ayane0857/ayane-official-site-v2",
      image: "/images/portfolio/ayane-home.png",
    },
  },
];
