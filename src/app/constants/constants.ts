/**
 * @overview Contains global variables which are being imported to main files of the project
 * @author Roman Mallindine
 */

import { articlePageItem, articlePreviewItem } from '../models/interfaces/articles.model';
import { benefitItem } from '../models/interfaces/benefits.model';
import { cardTypesItem } from '../models/interfaces/cardTypes.model';
import { countryCodeItem } from '../models/interfaces/ccodes.model';
import { cookieItem } from '../models/interfaces/cookies.model';
import { currencyTypesItem } from '../models/interfaces/currencies.model';
import { faqItem } from '../models/interfaces/faqs.model';
import { guestItem } from '../models/interfaces/guest.model';
import { inputValidationContextItem } from '../models/interfaces/inputValidation.model';
import { retentionDataItem } from '../models/interfaces/retentionData.model';
import { stepsItem } from '../models/interfaces/steps.model';
import { supportButtonItem } from '../models/interfaces/supports.model';
import { transactionFlowItem } from '../models/interfaces/transactionFlow.model';
import { transactionSettingItem } from '../models/interfaces/transactionSettings.model';
import { walletActionContextItem } from '../models/interfaces/walletAction.model';

/**
 * Company name
 */
export const COMPANY_NAME: string = 'PiggyBank.com';

/**
 * Amount of cards allowed to add
 */
export const CARDS_AMOUNT_ALLOWED: number = 3;

/**
 * PiggyBank.com fees
 */
export const TRANSACTION_FEES: number = 0.02

/**
 * Daily transaction limit allowed
 */
export const DAILY_TRANSACTION_LIMIT: number = 900

/**
 * Guest profile
 */
export const GUEST_PROFILE: guestItem = {
  name: 'Guest',
  surname: ['Müller', 'Schmidt', 'Johnson', 'Smith', 'Clinton'],
  email: ['workemail@gmail.com', 'example@gmail.com', 'noFun@gmail.com', 'businessmannn@gmail.com'],
  phone: ['157 8342 9156', '202 555 7843', '7911 638204', '6 72 48 59 13'],
};

/**
 * This array contains previews of articles which are displayed in the menu
 */
export const ARTICLE_PREVIEW_SECTION: articlePreviewItem[] = [
  {
    image: 'images/articlePreview_digitalWallets.svg',
    date: 'January 18th, 2026',
    title: 'digital wallets gain popularity among young users',
    subtitle:
      'Digital wallets are becoming increasingly popular among young adults, as users value fast transfers, easy balance tracking, and simple mobile interfaces.',
    btnText: 'Read',
    value: 'digitalWallets',
    time: '2 min',
  },
  {
    image: 'images/articlePreview_zeroFees.svg',
    date: 'January 15th, 2026',
    title: 'banks introduce instant transfers with zero fees',
    subtitle:
      'Several banks have launched instant money transfers without commissions, aiming to attract more users to their digital banking platforms.',
    btnText: 'Read',
    value: 'zeroFees',
    time: '1 min',
  },
  {
    image: 'images/articlePreview_personalFinance.svg',
    date: 'December 31st, 2025',
    title: 'personal finance apps help users save more money',
    subtitle:
      'New personal finance features such as spending analytics and smart budgeting tools are helping users better control their expenses.',
    btnText: 'Read',
    value: 'personalFinance',
    time: '3 min',
  },
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

/**
 * This array containes articles. The chosen article is displayed on the article page when clicking "Read article" in the menu
 */
export const ARTICLE_PAGE_CONTENT: articlePageItem = {
  digitalWallets: {
    header: 'Digital wallets gain popularity among young users',
    subheader:
      'Digital wallets are becoming increasingly popular among young adults, as users value fast transfers, easy balance tracking, and simple mobile interfaces.',
    image: 'images/news1_page(1).png',
    image2: 'images/news1_page(2).png',
    date: 'Published on January 18th, 2026',
    author: 'Photo by Unsplash.com',
    content1: `
        Digital wallets are quickly becoming the preferred way for young people to manage their money. With smartphones at the center of daily life, users are choosing mobile-first financial tools that offer speed, convenience, and better control over spending. <br> <br>

        Recent trends show that people aged 18–30 are adopting digital wallets at a much faster rate than traditional banking services. The ability to send money instantly, track expenses in real time, and make payments with just a few taps has made digital wallets a natural fit for this generation.
        `,
    content2: `
        One of the key drivers behind this shift is convenience. Instead of carrying cash or multiple bank cards, users can store payment methods securely in a single app. Whether paying in stores, online, or sending money to friends, transactions can be completed within seconds. <br> <br>

        Security has also improved significantly in recent years. Modern digital wallets use advanced technologies such as biometric authentication, encryption, and real-time fraud monitoring.`,
  },
  zeroFees: {
    header: 'Banks introduce instant transfers with zero fees',
    subheader:
      'Several banks have launched instant money transfers without commissions, aiming to attract more users to their digital banking platforms.',
    image: 'images/news2_page(1).png',
    image2: 'images/news2_page(2).png',
    date: 'Published on January 15th, 2026',
    author: 'Photo by Unsplash.com',
    content1: `
        Banks around the world are beginning to offer instant money transfers with zero fees, marking a significant shift in the way people move money between accounts. <br> <br>

        For many years, transferring money between banks could take hours or even days, especially for international payments. In addition, customers often had to pay extra fees depending on the transfer amount or the receiving bank.`,
    content2: `
        Financial institutions are introducing these services to remain competitive with fintech companies and digital payment platforms that already provide fast and low-cost transactions. <br> <br>

        Experts believe that zero-fee instant transfers will soon become a standard feature across most digital banking platforms.
        `,
  },
  personalFinance: {
    header: 'Personal finance apps help users save more money',
    subheader:
      'New personal finance features such as spending analytics and smart budgeting tools are helping users better control their expenses.',
    image: 'images/news3_page(1).png',
    image2: 'images/news3_page(2).png',
    date: 'Published on December 31st, 2025',
    author: 'Photo by Unsplash.com',
    content1: `
        Personal finance applications are becoming an essential tool for people who want to better understand their spending habits and save more money. <br> <br>

        Many people struggle to track where their money goes each month. Personal finance apps solve this problem by automatically categorizing transactions and presenting them in easy-to-read charts and reports.
        `,
    content2: `
        Another popular feature is smart budgeting. Users can set monthly spending limits for categories such as groceries, entertainment, or transportation. <br> <br>

        Financial experts note that people who regularly track their expenses are more likely to reach their savings goals.
        `,
  },
};

/**
 * This object contains contexts for the input in the choose wallet section
 * @example
 * User clicks "Add money" in the menu -> Add money page loads -> input says "Money to be added" & button -> "Add money"
 */
export const WALLET_ACTION_CONTEXTS: walletActionContextItem = {
  'Add money': {
    container: 'Money to be added',
    button: 'Add money',
  },

  'Transfer money': {
    container: 'Money to be sent',
    button: 'Send',
  },

  'Withdraw money': {
    container: 'Money to be withdrawn',
    button: 'Withdraw',
  },
};

/**
 * This object contains contexts for the input validation
 */
export const INPUT_VALIDATION_CONTEXTS: inputValidationContextItem = {
  email: {
    text1: 'email empty.',
    text2: 'please include @ and .',
  },

  name: {
    text1: 'name empty.',
    text2: '',
  },

  surname: {
    text1: 'surname empty.',
    text2: '',
  },

  other: {
    text1: 'field empty.',
    text2: '',
  },

  cardHolder: {
    text1: 'card holder empty.',
    text2: '',
  },

  cardNumber: {
    text1: 'card number empty.',
    text2: '',
  },

  cardExpdate: {
    text1: 'card exp date empty.',
    text2: '',
  },

  cardCvc: {
    text1: 'card cvc empty.',
    text2: '',
  },
};

/**
 * This array contains currencies for creating buttons
 */
export const CURRENCY_TYPES: currencyTypesItem[] = [
  {
    currency: 'USD',
    value: '$',
  },
  {
    currency: 'GBP',
    value: '£',
  },
  {
    currency: 'EUR',
    value: '€',
  },
];

/**
 * This array contains card types for creating buttons
 */
export const CARD_TYPES: cardTypesItem[] = [
  {
    value: 'DEBIT',
    description: 'Spends money directly from your account.',
    color: '#f0a4005e',
  },
  {
    value: 'CREDIT',
    description: 'Uses bank credit, must be repaid.',
    color: '#50c8785a',
  },
  {
    value: 'PREPAID',
    description: 'Works until preloaded funds run out.',
    color: '#7c68ee52',
  },
  {
    value: 'VIRTUAL',
    description: 'Digital card for online payments, no physical form.',
    color: '#4a8fd94e',
  },
];

export const TRANSACTION_BENEFITS: string[] = [
  'protected data',
  'multi-currency',
  'low-rates',
  'real-time balance',
  'secure payments',
];

export const SUPPORT_BUTTONS: supportButtonItem[] = [
  {
    text: 'crash',
    value: 'The app crashes when I try to open the settings.',
  },
  {
    text: 'lag',
    value: 'The page loads very slowly and sometimes freezes.',
  },
  {
    text: 'login',
    value: 'I can not log in with my email and password.',
  },
];

export const HERO_BENEFITS_SECTION: string[] = [
  'low-rates.',
  'real-time balance.',
  'secure payments.',
  'protected data.',
  'multi-currency.',
];

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

export const LANDING_BENEFITS_SECTION: string[] = [
  'modern.',
  'fast.',
  'simple.',
  'transparent.',
  'secure.',
];

export const COUNTRY_CODES: countryCodeItem[] = [
  { value: '+1', code: '+1' },
  { value: '+44', code: '+44' },
  { value: '+49', code: '+49' },
  { value: '+33', code: '+33' },
  { value: '+39', code: '+39' },
  { value: '+34', code: '+34' },
  { value: '+7', code: '+7' },
  { value: '+380', code: '+380' },
  { value: '+48', code: '+48' },
  { value: '+90', code: '+90' },
  { value: '+86', code: '+86' },
  { value: '+81', code: '+81' },
  { value: '+82', code: '+82' },
  { value: '+61', code: '+61' },
  { value: '+55', code: '+55' },
  { value: '+91', code: '+91' },
  { value: '+52', code: '+52' },
];

export const COOKIES: cookieItem[] = [
  {
    name: 'pb_session',
    type: 'Essential',
    purpose: 'Maintains your login session',
    duration: 'Session',
    provider: 'PiggyBank'
  },
  {
    name: 'pb_auth_token',
    type: 'Essential',
    purpose: 'Secure authentication token',
    duration: '30 days',
    provider: 'PiggyBank'
  },
  {
    name: 'pb_csrf',
    type: 'Essential',
    purpose: 'Cross-site request forgery protection',
    duration: 'Session',
    provider: 'PiggyBank'
  },
  {
    name: 'pb_currency',
    type: 'Functional',
    purpose: 'Remembers your preferred currency',
    duration: '12 months',
    provider: 'PiggyBank'
  },
  {
    name: 'pb_language',
    type: 'Functional',
    purpose: 'Stores language preference',
    duration: '12 months',
    provider: 'PiggyBank'
  },
  {
    name: 'pb_theme',
    type: 'Preference',
    purpose: 'Stores display preferences',
    duration: '12 months',
    provider: 'PiggyBank'
  },
  {
    name: 'pb_dismissed',
    type: 'Preference',
    purpose: 'Tracks dismissed notifications',
    duration: '6 months',
    provider: 'PiggyBank'
  },
  {
    name: '_pb_analytics',
    type: 'Analytics',
    purpose: 'Tracks usage patterns anonymously',
    duration: '13 months',
    provider: 'PiggyBank'
  },
  {
    name: '_pb_session_id',
    type: 'Analytics',
    purpose: 'Anonymous session identifier',
    duration: 'Session',
    provider: 'PiggyBank'
  },
  {
    name: 'pb_fraud_detect',
    type: 'Security',
    purpose: 'Fraud and bot detection',
    duration: '90 days',
    provider: 'PiggyBank'
  },
  {
    name: 'pb_device_id',
    type: 'Security',
    purpose: 'Trusted device recognition',
    duration: '12 months',
    provider: 'PiggyBank'
  },
  {
    name: '_ga',
    type: 'Analytics',
    purpose: 'Google Analytics identifier',
    duration: '2 years',
    provider: 'Google'
  },
  {
    name: '_ga_*',
    type: 'Analytics',
    purpose: 'Google Analytics session data',
    duration: '2 years',
    provider: 'Google'
  },
  {
    name: '_gid',
    type: 'Analytics',
    purpose: 'Google Analytics daily session',
    duration: '2 years',
    provider: 'Google'
  }
];

export const RETENTION_DATA: retentionDataItem[] = [
  {
    category: 'Account data',
    period: 'Duration of account + 7 years',
    reason: 'Legal obligation'
  },
  {
    category: 'Transaction data',
    period: '10 years',
    reason: 'Financial regulation (AML)'
  },
  {
    category: 'Support communications',
    period: '3 years',
    reason: 'Legitimate interests'
  },
  {
    category: 'Analytics data',
    period: '13 months',
    reason: 'Legitimate interests'
  },
  {
    category: 'Security logs',
    period: '12 months',
    reason: 'Security and fraud prevention'
  },
  {
    category: 'Cookie data',
    period: 'As per Cookie Policy',
    reason: 'Various'
  },
  {
    category: 'Marketing preferences',
    period: 'Until withdrawal of consent',
    reason: 'Consent'
  }
]

export const TRANSACTION_SETTINGS: transactionSettingItem[] = [
  {
    type: 'Add money',
    dailyLimit: '1500 per currency',
    fee: '2%'
  },
  {
    type: 'Withdraw money',
    dailyLimit: '1500 per currency',
    fee: '2%'
  },
  {
    type: 'Send money',
    dailyLimit: '1500 per currency',
    fee: '2%'
  }
]

export const TRANSACTION_FLOW: transactionFlowItem = {
  addMoney: {
    header: {
      icon: 'icons/transaction-flow/header_add_money.svg',
      text: 'add money',
      button: 'add money'
    },
    overview: {
      container1: 'Add',
      container2: 'To',
      container3: '',
      button: 'add',
      buttonIcon: 'icons/transaction-flow/content_buttonIcon_add.svg'
    },
    action: {
      verb: 'Added',
      prep1: 'to',
      prep2: '',
      icon: 'icons/transaction-flow/action_add.svg'
    },
    validation: {
      loader: 'adding money to',
      successful: {
        title: 'money added.',
        subtitle: 'You have added money successfully.'
      },
      unsuccessful: {
        title: 'failed to add.',
        subtitle: 'Something went wrong.'
      }
    }
  },
  withdrawMoney: {
    header: {
      icon: 'icons/transaction-flow/header_withdraw_money.svg',
      text: 'withdraw money',
      button: 'withdraw money'
    },
    overview: {
      container1: 'Withdraw',
      container2: 'From',
      container3: '',
      button: 'withdraw',
      buttonIcon: 'icons/transaction-flow/content_buttonIcon_withdraw.svg'
    },
    action: {
      verb: 'Withdrawn',
      prep1: 'from',
      prep2: '',
      icon: 'icons/transaction-flow/action_withdraw.svg'
    },
    validation: {
      loader: 'withdrawing money from',
      successful: {
        title: 'money withdrawn.',
        subtitle: 'You have withdrawn money successfully.'
      },
      unsuccessful: {
        title: 'failed to withdraw.',
        subtitle: 'Something went wrong.'
      }
    }
  },
  transferMoney: {
    header: {
      icon: 'icons/transaction-flow/header_transfer_money.svg',
      text: 'transfer money',
      button: 'transfer money'
    },
    overview: {
      container1: 'Transfer',
      container2: 'From',
      container3: 'To',
      button: 'transfer',
      buttonIcon: 'icons/transaction-flow/content_buttonIcon_transfer.svg'
    },
    action: {
      verb: 'Sent',
      prep1: 'to',
      prep2: 'from',
      icon: 'icons/transaction-flow/action_transfer.svg'
    },
    validation: {
      loader: 'sending money from',
      successful: {
        title: 'money sent.',
        subtitle: 'You have sent money successfully.'
      },
      unsuccessful: {
        title: 'failed to send.',
        subtitle: 'Something went wrong.'
      }
    }
  }
}
