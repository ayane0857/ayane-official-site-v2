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

type Kind = "kw" | "type" | "prop" | "str" | "num" | "punc" | "plain";

const colors: Record<Kind, string> = {
  kw: "text-pink-400", // type, const
  type: "text-cyan-300", // User, string, number
  prop: "text-sky-300", // name, age, skill ...
  str: "text-emerald-300", // "彩音"
  num: "text-orange-300", // 15
  punc: "text-neutral-400", // { } [ ] : ; ,
  plain: "text-neutral-100",
};

type Token = [Kind, string];

const lines: Token[][] = [
  [
    ["kw", "type"],
    ["plain", " "],
    ["type", "User"],
    ["punc", " = {"],
  ],
  [
    ["plain", "    "],
    ["prop", "name"],
    ["punc", ": "],
    ["type", "string"],
    ["punc", ";"],
  ],
  [
    ["plain", "    "],
    ["prop", "age"],
    ["punc", ": "],
    ["type", "number"],
    ["punc", ";"],
  ],
  [
    ["plain", "    "],
    ["prop", "skill"],
    ["punc", ": {"],
  ],
  [
    ["plain", "        "],
    ["prop", "programming"],
    ["punc", ": "],
    ["type", "string"],
    ["punc", "[];"],
  ],
  [
    ["plain", "    "],
    ["punc", "};"],
  ],
  [
    ["plain", "    "],
    ["prop", "comment"],
    ["punc", ": "],
    ["type", "string"],
    ["punc", ";"],
  ],
  [["punc", "};"]],
  [],
  [
    ["kw", "const"],
    ["plain", " "],
    ["prop", "user"],
    ["punc", ": "],
    ["type", "User"],
    ["punc", " = {"],
  ],
  [
    ["plain", "    "],
    ["prop", "name"],
    ["punc", ": "],
    ["str", '"彩音"'],
    ["punc", ","],
  ],
  [
    ["plain", "    "],
    ["prop", "age"],
    ["punc", ": "],
    ["num", "15"],
    ["punc", ","],
  ],
  [
    ["plain", "    "],
    ["prop", "skill"],
    ["punc", ": {"],
  ],
  [
    ["plain", "        "],
    ["prop", '"programming"'],
    ["punc", ","],
  ],
  [
    ["plain", "        "],
    ["prop", '"video editing"'],
    ["punc", ","],
  ],
  [
    ["plain", "        "],
    ["prop", '"design"'],
    ["punc", ","],
  ],
  [
    ["plain", "    "],
    ["punc", "},"],
  ],
  [
    ["plain", "    "],
    ["prop", "comment"],
    ["punc", ": "],
    ["str", '"Hello World!!!"'],
  ],
  [["punc", "};"]],
];

export default function Home() {
  const t = useTranslations("About");
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-4 px-8 py-4">
        <p className="text-6xl font-bold">About</p>
        <p>{t("AboutText")}</p>
      </div>
      <div className="flex flex-col gap-4 px-8 py-4">
        <p className="text-4xl font-semibold">{t("IntroTitle")}</p>
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col gap-2 leading-loose">
            <p className="whitespace-pre-line">{t("IntroText")}</p>
          </div>

          <pre className="overflow-x-auto rounded-3xl bg-neutral-900 p-8 text-sm leading-relaxed">
            <code>
              {lines.map((line, i) => (
                <span key={i}>
                  {line.map(([kind, text], j) => (
                    <span key={j} className={colors[kind]}>
                      {text}
                    </span>
                  ))}
                  {"\n"}
                </span>
              ))}
            </code>
          </pre>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-8 py-4">
        <p className="text-4xl font-semibold">Skills</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {skills.map(({ category, items }) => (
            <div
              key={category}
              className="rounded-3xl bg-neutral-100 p-7 text-neutral-900 transition-colors hover:bg-neutral-200/70"
            >
              <p className="mb-4 text-sm text-neutral-500">{category}</p>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-white px-4 py-2 text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
