export const links = [
  {
    name: 'Home',
    hash: '#home'
  },
  {
    name: 'About',
    hash: '#about'
  },
  {
    name: 'Projects',
    hash: '#projects'
  },
  {
    name: 'Skills',
    hash: '#skills'
  },
  {
    name: 'Experience',
    hash: '#experience'
  },
  {
    name: 'Contact',
    hash: '#contact'
  }
] as const;

export const socialLinks = [
  {
    icon: '/icons/github.png',
    label: 'GitHub',
    delay: 1.2,
    url: 'https://github.com/jdengoh' // Add actual URLs
  },
  {
    icon: '/icons/linkedin.png',
    label: 'LinkedIn',
    delay: 1.4,
    url: 'https://linkedin.com/in/jdengoh/'
  },
  {
    icon: '/icons/medium.png',
    label: 'Medium',
    delay: 1.6,
    url: 'https://medium.com/@jdgoh'
  },
  {
    icon: '/icons/gmail.png',
    label: 'Email',
    delay: 1.8,
    size: 45,
    url: 'mailto:jdengoh28@gmail.com'
  }
] as const;
