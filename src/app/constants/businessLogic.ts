import { getRandomInt } from "../utils/utils";

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
export const TRANSACTION_FEES: number = 0.02;

/**
 * Daily transaction limit allowed
 */
export const DAILY_TRANSACTION_LIMIT: number = 900;

/**
 * Random money user gets when creating a card. Allows to calculate fees from first transaction
 */
export const RANDOM_CARD_BALANCE: number = getRandomInt(0.01, 5);
