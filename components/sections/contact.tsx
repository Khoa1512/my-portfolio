'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowUpRight, Loader2, Send } from 'lucide-react';
import { toast } from 'sonner';

import { useLanguage } from '@/components/providers/language-provider';
import { Icon } from '@/components/shared/icon';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { sendContactMessage } from '@/lib/actions/contact';
import { dict } from '@/content/dictionary';
import { socials } from '@/content/site';
import { t } from '@/lib/i18n';
import { contactSchema, type ContactInput } from '@/lib/validators';

const FIELD_CLASS = 'border-white/10 bg-white/5';

export function Contact() {
  const { lang } = useLanguage();

  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  async function onSubmit(values: ContactInput) {
    try {
      const result = await sendContactMessage(values);
      if (result.ok) {
        toast.success(t(dict.formSuccess, lang));
        form.reset();
      } else {
        toast.error(t(dict.formError, lang));
      }
    } catch {
      toast.error(t(dict.formError, lang));
    }
  }

  const isSubmitting = form.formState.isSubmitting;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        title={t(dict.contactTitle, lang)}
        subtitle={t(dict.contactLead, lang)}
      />

      <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
        {/* Form */}
        <Reveal>
          <div className="rounded-2xl glass p-6 sm:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t(dict.formName, lang)}</FormLabel>
                        <FormControl>
                          <Input autoComplete="name" className={FIELD_CLASS} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t(dict.formEmail, lang)}</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            autoComplete="email"
                            className={FIELD_CLASS}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t(dict.formMessage, lang)}</FormLabel>
                      <FormControl>
                        <Textarea
                          className={`min-h-[150px] resize-none ${FIELD_CLASS}`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black hover:opacity-90 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      {t(dict.formSending, lang)}
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      {t(dict.formSend, lang)}
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </Reveal>

        {/* Social cards */}
        <Reveal delay={0.1}>
          <div className="space-y-3">
            <h3 className="px-1 font-heading text-sm font-semibold text-muted-foreground">
              {t(dict.connectWithMe, lang)}
            </h3>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-2xl glass p-4 transition-all hover:-translate-y-0.5 hover:bg-white/[0.07]"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-primary">
                  <Icon name={social.icon} className="size-5" />
                </span>
                <span className="flex-1 font-medium">{social.name}</span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
