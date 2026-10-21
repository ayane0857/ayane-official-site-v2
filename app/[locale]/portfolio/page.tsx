import { useTranslations } from "next-intl";
import { projects } from "@/data/Portfolio"; // 実際のパスに合わせてください
import ProjectCard from "@/component/portfoliocard";

export default function Portfolio() {
  const t = useTranslations("Portfolio");

  const sorted = [...projects].sort((a, b) =>
    b.timestmp.localeCompare(a.timestmp),
  );

  return (
    <main className="flex flex-col gap-16">
      <header className="flex flex-col gap-4 px-16 py-4">
        <h1 className="text-6xl font-bold">Portfolio</h1>
        <p className="max-w-2xl whitespace-pre-line text-xl text-[#545454]">
          {t("TitleText")}
        </p>
      </header>

      <section className="grid grid-cols-1 gap-8 px-16 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        {sorted.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            title={t(`${project.id}.title`)}
            viewLabel={t("View")}
          />
        ))}
      </section>
    </main>
  );
}
