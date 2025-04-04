
export type ContactInfo = {
  iconName: string;
  title: string;
  value: string;
  link: string;
};

export type SocialLink = {
  iconName: string;
  name: string;
  link: string;
};

// Thông tin liên hệ
export const contactInfo: ContactInfo[] = [
  {
    iconName: 'Mail',
    title: 'Email',
    value: 'danggkhoaa1512@gmail.com',
    link: 'mailto:danggkhoaa1512@gmail.com',
  },
  {
    iconName: 'Phone',
    title: 'Phone',
    value: '+84344117735',
    link: 'tel:+84344117735',
  },
  {
    iconName: 'MapPin',
    title: 'Location',
    value: 'Ho Chi Minh, Viet Nam',
    link: '#',
  },
];

// Liên kết mạng xã hội
export const socialLinks: SocialLink[] = [
  {
    iconName: 'Github',
    name: 'GitHub',
    link: 'https://github.com/Khoa1512',
  },
  {
    iconName: 'Facebook',
    name: 'Facebook',
    link: 'https://www.facebook.com/khoaaa152/',
  },
  {
    iconName: 'Linkedin',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kelvindev1512/',
  },
  {
    iconName: 'Instagram',
    name: 'Instagram',
    link: 'https://www.instagram.com/khoaaaa__152/',
  },
];
