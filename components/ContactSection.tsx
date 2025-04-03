"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Gitlab,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // toast({
    //   title: "Message sent!",
    //   description: "Thank you for your message. I'll get back to you soon.",
    // });
    form.reset();
  }

  const contactInfo = [
    {
      icon: <Mail className='h-6 w-6 text-[#a855f7]' />,
      title: "Email",
      value: "danggkhoaa1512@gmail.com",
      link: "mailto:danggkhoaa1512@gmail.com",
    },
    {
      icon: <Phone className='h-6 w-6 text-[#a855f7]' />,
      title: "Phone",
      value: "+84344117735",
      link: "tel:+84344117735",
    },
    {
      icon: <MapPin className='h-6 w-6 text-[#a855f7]' />,
      title: "Location",
      value: "Ho Chi Minh, Viet Nam",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className='h-6 w-6' />,
      name: "GitHub",
      link: "https://github.com/Khoa1512",
    },
    {
      icon: <Facebook className='h-6 w-6' />,
      name: "Facebook",
      link: "https://www.facebook.com/khoaaa152/",
    },
    {
      icon: <Linkedin className='h-6 w-6' />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/kelvindev1512/",
    },
    {
      icon: <Instagram className='h-6 w-6' />,
      name: "Instagram",
      link: "https://www.instagram.com/khoaaaa__152/",
    },
  ];
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
                <div className='mt-1'>{info.icon}</div>
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
                  {social.icon}
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
                  <Button type='submit' className='w-full'>
                    <Send className='mr-2 h-4 w-4' />
                    Send Message
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
