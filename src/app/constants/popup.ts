import { supportButtonItem } from "../models/interfaces/default/supports.model";

/**
 * Popup buttons, displayed when popupContext is support
 */
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
