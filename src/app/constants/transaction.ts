import { transactionFlowItem } from "../models/interfaces/default/transactionFlow.model";

/**
 * An object used for transaction flow. Displays words depending on context.
 * @example user is adding money. The button at the last step will be "Add" and not "Withdraw"
 */
export const TRANSACTION_FLOW: transactionFlowItem = {
  addMoney: {
    header: {
      icon: 'icons/transaction-flow/header_add_money.svg',
      text: 'add money',
      button: 'add money',
    },
    overview: {
      container1: 'Add',
      container2: 'To',
      container3: '',
      button: 'add',
      buttonIcon: 'icons/transaction-flow/content_buttonIcon_add.svg',
    },
    action: {
      verb: 'Added',
      prep1: 'to',
      prep2: '',
      icon: 'icons/transaction-flow/action_add.svg',
    },
    validation: {
      loader: 'adding money to',
      successful: {
        title: 'money added.',
        subtitle: 'You have added money successfully.',
      },
      unsuccessful: {
        title: 'failed to add.',
        subtitle: 'Something went wrong.',
      },
    },
  },
  withdrawMoney: {
    header: {
      icon: 'icons/transaction-flow/header_withdraw_money.svg',
      text: 'withdraw money',
      button: 'withdraw money',
    },
    overview: {
      container1: 'Withdraw',
      container2: 'From',
      container3: '',
      button: 'withdraw',
      buttonIcon: 'icons/transaction-flow/content_buttonIcon_withdraw.svg',
    },
    action: {
      verb: 'Withdrawn',
      prep1: 'from',
      prep2: '',
      icon: 'icons/transaction-flow/action_withdraw.svg',
    },
    validation: {
      loader: 'withdrawing money from',
      successful: {
        title: 'money withdrawn.',
        subtitle: 'You have withdrawn money successfully.',
      },
      unsuccessful: {
        title: 'failed to withdraw.',
        subtitle: 'Something went wrong.',
      },
    },
  },
  transferMoney: {
    header: {
      icon: 'icons/transaction-flow/header_transfer_money.svg',
      text: 'transfer money',
      button: 'transfer money',
    },
    overview: {
      container1: 'Transfer',
      container2: 'From',
      container3: 'To',
      button: 'transfer',
      buttonIcon: 'icons/transaction-flow/content_buttonIcon_transfer.svg',
    },
    action: {
      verb: 'Sent',
      prep1: 'to',
      prep2: 'from',
      icon: 'icons/transaction-flow/action_transfer.svg',
    },
    validation: {
      loader: 'sending money from',
      successful: {
        title: 'money sent.',
        subtitle: 'You have sent money successfully.',
      },
      unsuccessful: {
        title: 'failed to send.',
        subtitle: 'Something went wrong.',
      },
    },
  },
};
