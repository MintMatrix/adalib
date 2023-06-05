import type { Cbor, DataSignature, EnabledAPI, Paginate } from '../types/CardanoInjected';
/**
 * This class is used to emulate the Cardano Wallet API's content script.
 * It serves as an interface between the dapp and the WalletConnect provider relay.
 * It simulates the API that the content script would provide to the dapp, and passes
 * each method's name and arguments to the provider relay when called.
 */
export declare class EnabledWalletEmulator implements EnabledAPI {
    getNetworkId(): Promise<number>;
    getUtxos(amount?: string | undefined, paginate?: Paginate | undefined): Promise<string[]>;
    getBalance(): Promise<string>;
    getUsedAddresses(paginate?: Paginate | undefined): Promise<string[]>;
    getUnusedAddresses(paginate?: Paginate | undefined): Promise<string[]>;
    getChangeAddress(): Promise<string>;
    getRewardAddress(): Promise<string>;
    getRewardAddresses(): Promise<string[]>;
    signTx(tx: string, partialSign?: boolean): Promise<string>;
    signData(addr: string, payload: string): Promise<DataSignature>;
    submitTx(tx: string): Promise<string>;
    getCollateral(): Promise<string[]>;
    /** TODO: Implement provider listeners to listen for these events and trigger callback
     * Note: These are not standardized in the CIP-30 Cardano Wallet API, so their implementation is not complete.
     */
    onAccountChange(callback: (addresses: Cbor<'address'>[]) => Promise<undefined>): Promise<undefined>;
    onNetworkChange(callback: (network: number) => Promise<undefined>): Promise<undefined>;
}
