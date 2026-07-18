import type { ComponentPropsWithoutRef } from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';


const components = {
  h2: (props: ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="mt-10 mb-3 font-heading text-2xl font-bold" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="mt-8 mb-2 font-heading text-xl font-semibold" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<'p'>) => (
    <p className="my-4 leading-relaxed text-muted-foreground" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<'ul'>) => (
    <ul className="my-4 ml-5 list-disc space-y-1.5 text-muted-foreground" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<'ol'>) => (
    <ol className="my-4 ml-5 list-decimal space-y-1.5 text-muted-foreground" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<'li'>) => (
    <li className="pl-1" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<'a'>) => (
    <a className="text-primary underline underline-offset-4" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<'code'>) => (
    <code
      className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm text-foreground"
      {...props}
    />
  ),
};

export function Mdx({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}
