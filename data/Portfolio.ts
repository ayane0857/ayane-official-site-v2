export type PortfolioLinks = {
  site: string | null;
  github: string | null;
  utaloader: string | null;
  slides: string | null;
  image: string | null;
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
    tags: ["Next.js", "TypeScript", "Penpot"],
    timestmp: "2024-06-01",
    links: {
      site: "https://ayane0857.home",
      github: "https://github.com/ayane0857/ayane-home",
      utaloader: "https://utaloader.com/ayane0857/ayane-home",
      slides: "https://slides.com/ayane0857/ayane-home",
      image: "/images/portfolio/0.png",
    },
  },
  {
    id: 1,
    tags: ["React"],
    timestmp: "2024-05-01",
    links: {
      site: null,
      github: null,
      utaloader: null,
      slides: null,
      image: null,
    },
  },
];
