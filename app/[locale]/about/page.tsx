import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  return <div className="flex flex-col gap-16"></div>;
}
