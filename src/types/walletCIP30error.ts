export class WalletNotCip30CompatibleError extends Error {
  constructor(walletname: string) {
    const message = `It seems that the API of ${capitalize(walletname)} is not cip30 compatible.`;
    super(message);
    this.name = 'WalletNotCip30CompatibleError';
  }
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
