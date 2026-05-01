import { benefitItem } from "../models/interfaces/default/benefits.model";
import { faqItem } from "../models/interfaces/default/faqs.model";
import { stepsItem } from "../models/interfaces/default/steps.model";

/**
 * Landing page hero benefits section
 */
export const HERO_BENEFITS_SECTION: string[] = [
  'low-rates.',
  'real-time balance.',
  'secure payments.',
  'protected data.',
  'multi-currency.',
];

/**
 * Landing page how it works section
 */
export const STEPS_SECTION: stepsItem[] = [
  {
    icon: '01',
    title: 'log in',
    subtitle: 'create your account in seconds, no paperwork.',
  },
  {
    icon: '02',
    title: 'adding your first card',
    subtitle: 'link your card and set your preferred currency.',
  },
  {
    icon: '03',
    title: 'enjoy',
    subtitle: 'manipulate with your card whenever you want.',
  },
];

/**
 * Landing page FAQs section
 */
export const FAQS_SECTION: faqItem[] = [
  {
    title: 'Is my data save?',
    subtitle:
      'Yes. We use modern encryption to protect your personal and financial data at all times.',
    active: false,
  },
  {
    title: 'How many cards can I add?',
    subtitle: 'You can add three cards and switch between them anytime from your dashboard.',
    active: false,
  },
  {
    title: 'What currencies are supported?',
    subtitle:
      'PiggyBank.com supports EUR, USD, GBP and more — you choose your preferred currency when adding a card.',
    active: false,
  },
  {
    title: 'Is there a fee for transfers?',
    subtitle:
      'Yes. We keep our rates low and transparent at max. 2 per cent — no hidden fees, no surprises.',
    active: false,
  },
];

/**
 * Landing page benefits section
 */
export const LANDING_BENEFITS_SECTION: string[] = [
  'modern.',
  'fast.',
  'simple.',
  'transparent.',
  'secure.',
];

/**
 * Dashboard transaction benefits section
 */
export const TRANSACTION_BENEFITS: string[] = [
  'protected data',
  'multi-currency',
  'low-rates',
  'real-time balance',
  'secure payments',
];

/**
 * This array contains benefits of the PiggyBank.com which are displayed in the menu
 */
export const BENEFITS_SECTION: benefitItem[] = [
  {
    header: 'PiggyBank.com is',
    image: 'icons/secure_transactions.svg',
    title: 'secure transactions',
    subtitle: 'your data and payments are protected with modern encryption and security standards.',
  },
  {
    header: 'PiggyBank.com is',
    image: 'icons/instant_transfers.svg',
    title: 'instant transfers',
    subtitle: 'send and receive money within seconds without unnecessary delays.',
  },
  {
    header: 'PiggyBank.com is',
    image: 'icons/multi_currency_support.svg',
    title: 'multi-currency support',
    subtitle: 'manage multiple currencies easily in one simple wallet.',
  },
];
