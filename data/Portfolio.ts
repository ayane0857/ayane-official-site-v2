export type Link = {
  url: string;
  title?: string;
};

export type PortfolioLinks = {
  site?: Link[];
  github?: Link | null;
  image?: Link | null;
};

export type PortfolioData = {
  id: number;
  tags: string[];
  timestamp: string;
  links: PortfolioLinks;
};

export const portfolioLinks = [
  { key: "site", label: "Website" },
  { key: "github", label: "GitHub" },
] as const;

export const portfolios: PortfolioData[] = [
  {
    id: 0,
    tags: ["Next.js", "MicroCMS"],
    timestamp: "2025-06-29",
    links: {
      site: [
        {
          url: "https://utau.ayane0857.net",
        },
      ],
      github: {
        url: "https://github.com/ayane0857/ayane-utau-site",
      },
      image: {
        url: "/images/portfolio/utau-site.png",
      },
    },
  },
  {
    id: 1,
    tags: ["LT"],
    timestamp: "2025-08-30",
    links: {
      site: [
        {
          url: "https://file.ayane0857.net/lt/create-open-balance.pdf",
          title: "slides",
        },
      ],
      image: {
        url: "/images/portfolio/open-balance-api.png",
      },
    },
  },
  {
    id: 2,
    tags: ["Mix", "UTAU", "馳音ヤタ"],
    timestamp: "2025-10-13",
    links: {
      site: [
        {
          url: "https://utaloader.net/music/20251012171037191623",
          title: "utaloader",
        },
      ],
    },
  },
  {
    id: 3,
    tags: ["Mix", "UTAU", "謎"],
    timestamp: "2025-10-13",
    links: {
      site: [
        {
          url: "https://utaloader.net/music/20251013044059705603",
          title: "utaloader",
        },
      ],
    },
  },
  {
    id: 4,
    tags: ["Mix", "UTAU", "馳音ユト"],
    timestamp: "2025-10-26",
    links: {
      site: [
        {
          url: "https://utaloader.net/music/20251025171825824177",
          title: "utaloader",
        },
      ],
    },
  },
  {
    id: 5,
    tags: ["LT"],
    timestamp: "2025-12-27",
    links: {
      site: [
        {
          url: "https://file.ayane0857.net/lt/many-new-technology.pdf",
          title: "slides",
        },
      ],
      image: {
        url: "/images/portfolio/new-technology.png",
      },
    },
  },
  {
    id: 6,
    tags: ["Affinity"],
    timestamp: "2026-07-13",
    links: {
      site: [
        {
          url: "https://file.ayane0857.net/artworks/banner-7-4.png",
          title: "Banner",
        },
        {
          url: "https://file.ayane0857.net/artworks/header-7-4.png",
          title: "Header",
        },
      ],
      image: {
        url: "/images/portfolio/header.png",
      },
    },
  },
  {
    id: 7,
    tags: ["Next.js"],
    timestamp: "2026-10-22",
    links: {
      site: [
        {
          url: "https://ayane0857.net/",
        },
      ],
      github: {
        url: "https://github.com/ayane0857/ayane-official-site-v2",
      },
      image: {
        url: "/images/portfolio/ayane-home.png",
      },
    },
  },
];
