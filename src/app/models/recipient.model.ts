/**
 * Class Recipient - used to create a new recipient when transferring money
 */
export class Recipient {
  getsMoney: number = 0;

  constructor(
    public name: string,
    public surname: string,
    public email: string,
    public optionalText: string,
  ) {}

  gets(value: number): void {
    this.getsMoney = value;
  }
}
