import { useTranslations } from "next-intl";

const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "PHP"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Tailwind css", "Base UI"],
  },
  {
    category: "Tools",
    items: [
      "Kubernetes",
      "Git",
      "Vercel",
      "Argo CD",
      "Figma",
      "YMM4",
      "Docker",
    ],
  },
];

const profile = [
  "const ayane = {",
  '  role: "Student / Engineer",',
  '  interests: ["programming", "video", "design"],',
  '  motto: "Hello, world!",',
  "};",
];

export default function About() {
  const t = useTranslations("About");
  return (
    <main className="flex flex-col gap-16">
      <header className="flex flex-col gap-4 px-16 py-4">
        <h1 className="text-6xl font-bold">About</h1>
        <p className="max-w-2xl whitespace-pre-line text-xl text-[#545454]">
          {t("AboutText")}
        </p>
      </header>

      <section
        aria-labelledby="profile-heading"
        className="grid items-center gap-8 px-16 py-4 md:grid-cols-2"
      >
        <div className="flex flex-col gap-6">
          <h2 id="profile-heading" className="text-4xl font-semibold">
            {t("IntroTitle")}
          </h2>
          <p className="max-w-xl whitespace-pre-line text-xl leading-8 text-[#545454]">
            {t("IntroText")}
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-neutral-950 shadow-xl shadow-neutral-950/10">
          <div
            className="flex items-center gap-2 border-b border-white/10 px-5 py-4"
            aria-hidden="true"
          >
            <span className="size-2.5 rounded-full bg-rose-400" />
            <span className="size-2.5 rounded-full bg-amber-300" />
            <span className="size-2.5 rounded-full bg-emerald-400" />
            <span className="ml-3 font-mono text-xs text-neutral-400">
              about.ts
            </span>
          </div>
          <pre className="overflow-x-auto p-5 text-sm leading-7 sm:p-7 sm:text-base">
            <code>
              {profile.map((line, index) => (
                <span className="block whitespace-pre" key={line}>
                  <span
                    className="mr-6 inline-block w-4 select-none text-right text-neutral-600"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <span className="text-neutral-200">{line}</span>
                </span>
              ))}
            </code>
          </pre>
        </div>
      </section>

      <section className="flex flex-col gap-6 px-16">
        <h2 className="text-4xl font-semibold">Skills</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {skills.map(({ category, items }) => (
            <div
              key={category}
              className="flex flex-col gap-4 rounded-3xl bg-[#f1f1f1] p-7"
            >
              <p className="text-xl text-[#545454]">{category}</p>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li key={item} className="rounded-full bg-white px-4 py-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
