import { cardTypesItem } from "../models/interfaces/default/cardTypes.model";
import { currencyTypesItem } from "../models/interfaces/default/currencies.model";

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
