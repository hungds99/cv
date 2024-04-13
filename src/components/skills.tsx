import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";

export default function Skills(props: { skills: any }) {
  const { skills } = props;

  return (
    <Section>
      <h2 className="text-xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill: any) => {
          return <Badge key={skill}>{skill}</Badge>;
        })}
      </div>
    </Section>
  );
}
