'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Loader2,
  LucideIcon,
} from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
import { formSchema } from '@/lib/validators';
import { contactInfo, socialLinks } from '@/lib/contact-data';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Icon mapping
  const iconMap: Record<string, LucideIcon> = {
    Mail,
    MapPin,
    Phone,
    Github,
    Facebook,
    Linkedin,
    Instagram,
  };

  // Function to render icon based on iconName
  const renderIcon = (iconName: string, className: string) => {
    const IconComponent = iconMap[iconName];
    if (!IconComponent) return null;
    return <IconComponent className={className} />;
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);

      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Message sent!', {
          description: "Thank you for your message. I'll get back to you soon.",
          duration: 5000,
          action: {
            label: 'Close',
            onClick: () => toast.dismiss(),
          },
        });
        form.reset();
      } else {
        toast.error('Error', {
          description:
            data.error || 'Failed to send message. Please try again later.',
        });
      }
    } catch (error) {
      toast.error('Error', {
        description: 'An unexpected error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className='py-8'>
      <div ref={ref} className='grid md:grid-cols-3 gap-8 px-6'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5 }}
          className='md:col-span-1 space-y-6 mt-1'
        >
          <div className='space-y-4'>
            <h3 className='text-xl font-bold'>Contact Information</h3>
            <p className='text-muted-foreground'>
              Feel free to reach out to me through any of these channels. I'll
              get back to you as soon as possible.
            </p>
          </div>

          {contactInfo.map((info, index) => (
            <Card key={index}>
              <CardContent className='p-6 flex items-start gap-4'>
                <div className='mt-1'>
                  {renderIcon(info.iconName, 'h-6 w-6 text-[#a855f7]')}
                </div>
                <div>
                  <h3 className='font-medium'>{info.title}</h3>
                  <a
                    href={info.link}
                    className='text-muted-foreground hover:text-[#a855f7] transition-colors'
                  >
                    {info.value}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className='pt-4'>
            <h3 className='text-xl font-bold mb-4'>Connect With Me</h3>
            <div className='flex flex-wrap gap-4'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target='_blank'
                  rel='noreferrer'
                  className='p-3 bg-muted rounded-full hover:bg-[#a855f7]/10 transition-colors'
                  aria-label={social.name}
                >
                  {renderIcon(social.iconName, 'h-6 w-6')}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='md:col-span-2 mt-8'
        >
          <Card>
            <CardContent className='p-6'>
              <h3 className='text-xl font-bold mb-4'>Send Me a Message</h3>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-6'
                >
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <FormField
                      control={form.control}
                      name='name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder='Your name' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder='Your email' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name='subject'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Subject of your message'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder='Your message'
                            className='min-h-[150px] resize-none'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type='submit'
                    className='w-full'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className='mr-2 h-4 w-4' />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
