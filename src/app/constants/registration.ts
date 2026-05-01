import { countryCodeItem } from "../models/interfaces/default/ccodes.model";
import { guestItem } from "../models/interfaces/default/guest.model";

/**
 * Available country codes to choose when logging in
 */
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

/**
 * Guest profile
 */
export const GUEST_PROFILE: guestItem = {
  name: 'Guest',
  surname: ['Müller', 'Schmidt', 'Johnson', 'Smith', 'Clinton'],
  email: ['workemail@gmail.com', 'example@gmail.com', 'noFun@gmail.com', 'businessmannn@gmail.com'],
  phone: ['157 8342 9156', '202 555 7843', '7911 638204', '6 72 48 59 13'],
};
