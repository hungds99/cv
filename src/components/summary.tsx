import { Section } from "./ui/section";

export default function Summary(props: any) {
  const { summary } = props;

  return (
    <Section>
      <h2 className="text-xl font-bold">About</h2>
      <p
        className="text-pretty font-mono text-sm text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: summary }}
      >
        {/* {RESUME_DATA.summary} */}
      </p>
    </Section>
  );
}
