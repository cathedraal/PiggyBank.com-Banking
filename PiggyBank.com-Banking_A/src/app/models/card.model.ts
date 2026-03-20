/**
 * Class Card - used to create a new card
 */
export class Card {
  constructor(
    public cardHolder: string,
    public cardNumber: string,
    public expDate: string,
    public cardCvc: string,
    public cardBalance: number,
    public cardCurrency: string,
    public cardType: string,
  ) {}

  getInfo(): string {
    return `holder: ${this.cardHolder}, number: ${this.cardNumber}, exp.date: ${this.expDate},
    cvc: ${this.cardCvc}, balance: ${this.cardBalance}, currency: ${this.cardCurrency}, type: ${this.cardType}`
  }

  addBalance(amount: number): void {
    this.cardBalance = this.cardBalance + amount
  }

  transactBalance(amount: number): void {
    this.cardBalance = this.cardBalance - amount
  }
}
