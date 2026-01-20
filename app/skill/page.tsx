import React from "react";
import type { Metadata } from "next";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiVercel,
  SiPython,
  SiKubernetes,
  SiArgo,
} from "react-icons/si";

export const metadata: Metadata = {
  title: "スキル一覧",
  openGraph: {
    title: "スキル一覧",
    description: "彩音のスキル一覧です！",
  },
  twitter: {
    title: "スキル一覧",
    description: "彩音のスキル一覧です！",
  },
};

export default function Skill() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-[#3178C6]" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-[#F7DF1E]" />,
        },
        {
          name: "Python",
          icon: <SiPython className="text-[#3776AB]" />,
        },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-[#06B6D4]" />,
        },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
        { name: "Vercel", icon: <SiVercel className="text-black" /> },
        {
          name: "Kubernetes",
          icon: <SiKubernetes className="text-[#326CE5]" />,
        },
        { name: " Argo CD", icon: <SiArgo className="text-[#E23E4B]" /> },
      ],
    },
  ];

  return (
    <main className="p-6 mx-auto min-h-screen flex items-center justify-center">
      <div className="bg-[#e8d6d0] rounded-[2rem] max-w-4xl w-full p-10 md:p-16 shadow-lg shadow-black/5 text-center">
        {/* ヘッダー */}
        <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
          Skills
          <span className="block text-sm font-medium text-gray-500 mt-1 uppercase tracking-widest">
            スキル一覧
          </span>
        </h2>

        <div className="mt-12 space-y-10 text-left">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-4">
              {/* カテゴリタイトル */}
              <h3 className="text-lg font-bold text-gray-700 ml-2 border-l-4 border-white/50 pl-3">
                {category.title}
              </h3>

              {/* スキルカードのグリッド */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex flex-col items-center justify-center gap-3 bg-white/50 p-6 rounded-2xl hover:bg-white transition-all duration-300 group shadow-sm"
                  >
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-bold text-gray-600 tracking-tight text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
