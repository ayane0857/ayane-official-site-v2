import { useTranslations } from "next-intl";
import { projects } from "@/data/Portfolio";
import ProjectCard from "@/component/portfoliocard";

export default function Portfolio() {
  const t = useTranslations("Portfolio");

  const sorted = [...projects].sort((a, b) =>
    b.timestmp.localeCompare(a.timestmp),
  );

  return (
    <div>
      <div className="flex flex-col gap-4 px-5 py-4 sm:px-8 lg:px-16">
        <h1 className="text-5xl font-bold sm:text-6xl">Portfolio</h1>
        <p className="max-w-2xl whitespace-pre-line text-lg text-[#545454] sm:text-xl">
          {t("TitleText")}
        </p>
      </div>

      <section
        aria-label={t("TitleText")}
        className="grid grid-cols-1 gap-6 px-5 pb-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:gap-8 lg:px-16"
      >
        {sorted.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            title={t(`${project.id}.title`)}
            viewLabel={t("View")}
          />
        ))}
      </section>
    </div>
  );
}
