export interface descriptionItem {
  add: string;
  addedCard: string;
  transfer: { success: string; error: string };
  withdraw: { success: string; error: string };
  delete: { success: string; error: string };
}

/**
 * This class is used to create user's log after manipulating with one of his cards
 */
export class Action {
  description: string;

  constructor(
    public actionIcon: string,
    public actionHighlight: string,
    public actionDate: string,
    public actionSource: string,
    public actionContext: keyof descriptionItem,
    public actionText: string
  ) {
    this.description = this.generateDescription(this.actionContext, this.actionText);
  }

  private generateDescription(context: keyof descriptionItem, text: string): string {
    const descriptions: descriptionItem = {
      add: 'The money has been successfully added to this card.',
      addedCard: 'You have successfully added a new card.',
      transfer: {
        success: 'The money has been successfully sent from this card.',
        error: 'You tried to transfer money from this card. However, an error occured.',
      },
      withdraw: {
        success: 'The money has been succesfully withdrawn from this card.',
        error: 'You tried to withdraw money from this card. However, an error occured.',
      },
      delete: {
        success: 'You succesfully deleted this card.',
        error: 'None',
      },
    };

    if (context === 'transfer' || context === 'withdraw') {
      const isSuccess = text === 'Sent money to' || text === 'Withdrawn money';
      return isSuccess ? descriptions[context].success : descriptions[context].error;
    }

    const result = descriptions[context];
    return typeof result === 'string' ? result : 'Unknown action.';
  }
}
