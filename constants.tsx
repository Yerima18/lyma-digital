
import React from 'react';
import { Service, Project, Testimonial, PricingPlan } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Custom Web Development',
    description: 'High-performance, scalable web applications built with the latest React and Next.js technology stacks.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  },
  {
    id: '2',
    title: 'UI/UX Brand Design',
    description: 'User-centric designs that blend aesthetic minimalism with conversion-focused psychology.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
  },
  {
    id: '3',
    title: 'E-Commerce Solutions',
    description: 'Bespoke online shopping experiences designed to handle high traffic and maximize Average Order Value.',
    icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
  },
  {
    id: '4',
    title: 'SEO & Performance',
    description: 'Search engine optimization and technical speed audits to ensure you rank #1 and load instantly.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Univers Muslim',
    category: 'E-commerce',
    image: '/projects/univers-muslim.png',
    link: 'https://universmuslim-web.vercel.app/',
    description: 'A WhatsApp-integrated order form for an Islamic lifestyle brand. Customers fill out their details and the message is pre-filled and sent directly via WhatsApp for seamless ordering.',
    tech: ['HTML', 'CSS', 'JavaScript', 'WhatsApp API'],
    year: '2025'
  },
  {
    id: '2',
    title: 'Business Analytics Dashboard',
    category: 'Web Application',
    image: '/projects/business-analytics.png',
    link: 'https://mis-business-analytics-dashboard.vercel.app/',
    description: 'An e-commerce analytics dashboard with KPI monitoring, revenue trend charts, category performance breakdowns, and real-time transaction tracking. Built as an MIS portfolio project.',
    tech: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
    year: '2026'
  },
  {
    id: '3',
    title: 'TeamFlow',
    category: 'Web Application',
    image: '/projects/teamflow.png',
    link: 'https://teamflow-blush-five.vercel.app/',
    description: 'A team collaboration platform featuring task management, calendar scheduling, notes, team presence indicators, and an integrated AI assistant. Built with a sleek dark UI.',
    tech: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    year: '2026'
  },
  {
    id: '4',
    title: 'SpendWise',
    category: 'Web Application',
    image: '/projects/spendwise.png',
    link: 'https://spendwise-five-tau.vercel.app/',
    description: 'A personal finance dashboard for tracking income, expenses, and balances. Features dark mode, CSV export, category breakdowns, and transaction history.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    year: '2026'
  },
  {
    id: '5',
    title: 'SanteBenin',
    category: 'Web Application',
    image: '/projects/sante-benin.png',
    link: 'https://sante-benin.vercel.app/',
    description: 'A public health information platform for Benin featuring a disease catalog, AI symptom checker, vaccination calendar, prevention guides, and emergency contacts. Built as an educational tool for health awareness.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'AI Integration'],
    year: '2026'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Samira Monique',
    role: 'Marketing Director',
    company: 'Vanguard',
    content: 'Lyma Digital didn\'t just build a website; they built a revenue engine. Our conversion rate increased by 45% within the first month of launch.',
    avatar: 'https://i.pravatar.cc/150?u=samira'
  },
  {
    id: '2',
    name: 'Faadil Torou',
    role: 'Founder',
    company: 'BlackBow',
    content: 'Their attention to detail and minimalist aesthetic perfectly aligned with our brand values. The most professional agency we have ever worked with.',
    avatar: 'https://i.pravatar.cc/150?u=faadil'
  },
  {
    id: '3',
    name: 'Yusuf Kemal',
    role: 'Operations Manager',
    company: 'Univers Muslim',
    content: 'The WhatsApp integration was a game-changer for our ordering process. Orders increased significantly and the user experience is seamless. Highly recommended.',
    avatar: 'https://i.pravatar.cc/150?u=yusuf'
  },
  {
    id: '4',
    name: 'Aisha Bello',
    role: 'Product Owner',
    company: 'TeamFlow',
    content: 'Lyma delivered a collaboration platform that our entire team adopted instantly. The dark UI is stunning and the AI assistant feature sets it apart from competitors.',
    avatar: 'https://i.pravatar.cc/150?u=aisha'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Launch',
    price: '$2,500',
    description: 'Perfect for startups needing a professional landing page and brand presence.',
    features: ['Custom Landing Page', 'Mobile Responsive', 'SEO Fundamentals', 'Basic Content Management', 'Email Support']
  },
  {
    name: 'Growth',
    price: '$6,000',
    description: 'Our most popular plan for businesses ready to scale their digital operations.',
    features: ['Multi-page Website', 'Custom UI/UX Kit', 'Advanced SEO Strategy', 'Dynamic Integrations', 'Priority Support'],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Bespoke solutions for established brands with complex technical needs.',
    features: ['Headless E-commerce', 'User Portals / SaaS', 'Technical Architecture', 'Dedicated Project Manager', '24/7 Support']
  }
];
