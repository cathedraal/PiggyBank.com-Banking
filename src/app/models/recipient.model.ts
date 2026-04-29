/**
 * This class is used for creating a new recipients when wanting to transfer money
 */
export class Recipient {
  getsMoney: number = 0;

  constructor(
    public name: string,
    public surname: string,
    public email: string,
    public optionalText: string,
  ) {}

  /**
   * @param value amount of money this recipient will get
   */
  gets(value: number): void {
    this.getsMoney = value;
  }
}
