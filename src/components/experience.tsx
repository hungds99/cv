import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export default function Experience(props: { work: any }) {
  const { work } = props;

  return (
    <Section>
      <h2 className="text-xl font-bold">Work Experience</h2>
      {work.map((work: any) => {
        return (
          <Card key={work.company}>
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                  <a className="hover:underline" href={work.link}>
                    {work.company}
                  </a>

                  <span className="inline-flex gap-x-1">
                    {work.badges.map((badge: any) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={badge}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                </h3>
                <div className="text-sm tabular-nums text-gray-500">
                  {work.start} - {work.end}
                </div>
              </div>

              <h4 className="font-mono text-sm leading-none">{work.title}</h4>
            </CardHeader>
            <CardContent className="mt-2 text-xs">
              {work.description}
            </CardContent>
          </Card>
        );
      })}
    </Section>
  );
}
