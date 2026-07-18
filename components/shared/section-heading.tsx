import { Reveal } from '@/components/shared/reveal';

/** Centered gradient title + optional subtitle, used at the top of each section. */
export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
