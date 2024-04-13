import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";

export default function Information(props: { info: any }) {
  const { info } = props;

  return (
    <div className="flex items-center justify-between">
      <div className="flex-1 space-y-1.5">
        <h1 className="text-2xl font-bold">{info.name}</h1>
        <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
          {info.about}
        </p>
        <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
          <a
            className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
            href={info.locationLink}
            target="_blank"
          >
            <GlobeIcon className="h-3 w-3" />
            {info.location}
          </a>
        </p>
        <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
          {info.contact.email ? (
            <Button className="h-8 w-8" variant="outline" size="icon" asChild>
              <a href={`mailto:${info.contact.email}`} target="_blank">
                <MailIcon className="h-4 w-4" />
              </a>
            </Button>
          ) : null}
          {info.contact.tel ? (
            <Button className="h-8 w-8" variant="outline" size="icon" asChild>
              <a href={`tel:${info.contact.tel}`} target="_blank">
                <PhoneIcon className="h-4 w-4" />
              </a>
            </Button>
          ) : null}
          {info.contact.social.map((social: any) => (
            <Button
              key={social.name}
              className="h-8 w-8"
              variant="outline"
              size="icon"
              asChild
            >
              <a href={social.url} target="_blank">
                <social.icon className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>
        <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
          {info.contact.email ? (
            <a href={`mailto:${info.contact.email}`} target="_blank">
              <span className="underline">{info.contact.email}</span>
            </a>
          ) : null}
          {info.contact.tel ? (
            <a href={`tel:${info.contact.tel}`} target="_blank">
              <span className="underline">{info.contact.tel}</span>
            </a>
          ) : null}
        </div>
      </div>

      <Avatar className="h-28 w-28">
        <AvatarImage alt={info.name} src={info.avatarUrl} />
        <AvatarFallback>{info.initials}</AvatarFallback>
      </Avatar>
    </div>
  );
}
