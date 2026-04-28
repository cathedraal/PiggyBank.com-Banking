/**
 * This class is used to create user's log after manipulating with one of his cards
 */
export class Action {
  constructor(
    public actionIcon: string,
    public actionDate: string,
    public actionSource: string,
    public actionText: {verb: string, noun: string, preposition1: string, preposition2: string}
  ) {}
}
