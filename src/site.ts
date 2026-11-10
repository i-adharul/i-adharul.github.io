// Single source of truth for site-wide facts (reused from the legacy pages).
export const SITE = {
  name: 'Adharul Imron',
  title: 'Data Analyst',
  url: 'https://i-adharul.github.io',
  description: 'A Data Analyst with experience in Growth and Product Marketing.',
  email: 'i.adharul@gmail.com',
  linkedin: 'https://www.linkedin.com/in/adharul-imron',
  github: 'https://github.com/i-adharul',
} as const;

export const NAV = [
  { label: 'Work', href: '/#work' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
] as const;
