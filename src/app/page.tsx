import { CommandMenu } from "@/components/command-menu";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Information from "@/components/information";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Summary from "@/components/summary";
import { RESUME_DATA } from "@/data/resume-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <Information info={RESUME_DATA} />
        <Summary summary={RESUME_DATA.summary} />
        <Experience work={RESUME_DATA.work} />
        <Education education={RESUME_DATA.education} />
        <Skills skills={RESUME_DATA.skills} />
        <Projects projects={RESUME_DATA.projects} />
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
