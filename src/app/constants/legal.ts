import { cookieItem } from "../models/interfaces/default/cookies.model";
import { retentionDataItem } from "../models/interfaces/default/retentionData.model";
import { transactionSettingItem } from "../models/interfaces/default/transactionSettings.model";

/**
 * Cookies for a cookie table on cookie policy page
 */
export const COOKIES: cookieItem[] = [
  {
    name: 'pb_session',
    type: 'Essential',
    purpose: 'Maintains your login session',
    duration: 'Session',
    provider: 'PiggyBank',
  },
  {
    name: 'pb_auth_token',
    type: 'Essential',
    purpose: 'Secure authentication token',
    duration: '30 days',
    provider: 'PiggyBank',
  },
  {
    name: 'pb_csrf',
    type: 'Essential',
    purpose: 'Cross-site request forgery protection',
    duration: 'Session',
    provider: 'PiggyBank',
  },
  {
    name: 'pb_currency',
    type: 'Functional',
    purpose: 'Remembers your preferred currency',
    duration: '12 months',
    provider: 'PiggyBank',
  },
  {
    name: 'pb_language',
    type: 'Functional',
    purpose: 'Stores language preference',
    duration: '12 months',
    provider: 'PiggyBank',
  },
  {
    name: 'pb_theme',
    type: 'Preference',
    purpose: 'Stores display preferences',
    duration: '12 months',
    provider: 'PiggyBank',
  },
  {
    name: 'pb_dismissed',
    type: 'Preference',
    purpose: 'Tracks dismissed notifications',
    duration: '6 months',
    provider: 'PiggyBank',
  },
  {
    name: '_pb_analytics',
    type: 'Analytics',
    purpose: 'Tracks usage patterns anonymously',
    duration: '13 months',
    provider: 'PiggyBank',
  },
  {
    name: '_pb_session_id',
    type: 'Analytics',
    purpose: 'Anonymous session identifier',
    duration: 'Session',
    provider: 'PiggyBank',
  },
  {
    name: 'pb_fraud_detect',
    type: 'Security',
    purpose: 'Fraud and bot detection',
    duration: '90 days',
    provider: 'PiggyBank',
  },
  {
    name: 'pb_device_id',
    type: 'Security',
    purpose: 'Trusted device recognition',
    duration: '12 months',
    provider: 'PiggyBank',
  },
  {
    name: '_ga',
    type: 'Analytics',
    purpose: 'Google Analytics identifier',
    duration: '2 years',
    provider: 'Google',
  },
  {
    name: '_ga_*',
    type: 'Analytics',
    purpose: 'Google Analytics session data',
    duration: '2 years',
    provider: 'Google',
  },
  {
    name: '_gid',
    type: 'Analytics',
    purpose: 'Google Analytics daily session',
    duration: '2 years',
    provider: 'Google',
  },
];

/**
 * Retention data for a table on privacy policy page
 */
export const RETENTION_DATA: retentionDataItem[] = [
  {
    category: 'Account data',
    period: 'Duration of account + 7 years',
    reason: 'Legal obligation',
  },
  {
    category: 'Transaction data',
    period: '10 years',
    reason: 'Financial regulation (AML)',
  },
  {
    category: 'Support communications',
    period: '3 years',
    reason: 'Legitimate interests',
  },
  {
    category: 'Analytics data',
    period: '13 months',
    reason: 'Legitimate interests',
  },
  {
    category: 'Security logs',
    period: '12 months',
    reason: 'Security and fraud prevention',
  },
  {
    category: 'Cookie data',
    period: 'As per Cookie Policy',
    reason: 'Various',
  },
  {
    category: 'Marketing preferences',
    period: 'Until withdrawal of consent',
    reason: 'Consent',
  },
];

/**
 * Transaction limits & fees on terms and conditions page
 */
export const TRANSACTION_SETTINGS: transactionSettingItem[] = [
  {
    type: 'Add money',
    dailyLimit: '1500 per currency',
    fee: '2%',
  },
  {
    type: 'Withdraw money',
    dailyLimit: '1500 per currency',
    fee: '2%',
  },
  {
    type: 'Send money',
    dailyLimit: '1500 per currency',
    fee: '2%',
  },
];
