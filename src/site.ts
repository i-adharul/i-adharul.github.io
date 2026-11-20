// Single source of truth for site-wide facts (reused from the legacy pages).
export const SITE = {
  name: 'Adharul Imron',
  title: 'Full Stack Developer',
  url: 'https://i-adharul.github.io',
  description: 'Data analytics case studies by Adharul Imron, a full stack developer with a background in data analytics, growth, and product.',
  email: 'i.adharul@gmail.com',
  linkedin: 'https://www.linkedin.com/in/adharul-imron',
  github: 'https://github.com/i-adharul',
  devPortfolio: 'https://www.adharul.my.id',
} as const;

export const NAV = [
  { label: 'Case Studies', href: '/#work' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
] as const;
