import { Observable } from '../types/observable';
import type { CardanoInjectedNamespaceApi, DataSignature, EnabledAPI, WalletNames } from '../types/CardanoInjected';
import type { Connector } from './base';
/**
 * Cardano methods are injected.
 * The InjectedConnector utilizes these cip-30 methods to
 * comply with the Connector abstraction under the hood.
 */
declare global {
    interface Window {
        cardano: CardanoInjectedNamespaceApi;
    }
}
/**
 * Plan: Only expose `enable`, `isEnabled`, and `getConnectorAPI` methods.
 * enable populates the connectorAPI if the connection is successful.
 * For the wallet connect connector, it creates a custom instance of the
 * enabled CIP-30 API that relays everything through the wallet connect relay.
 */
export declare class InjectedConnector implements Connector {
    injectedWalletPath: string;
    /**
     * The enabled wallet's name
     */
    enabledWallet: WalletNames | undefined;
    connectedWalletAPI: EnabledAPI | undefined;
    enabledObserver: Observable<boolean>;
    isConnectingObserver: Observable<boolean>;
    enabledWalletObserver: Observable<string | null>;
    stakeAddressObserver: Observable<string | null>;
    installedWalletExtensionsObserver: Observable<string[]>;
    constructor(injectedWallet: string);
    isAvailable(): boolean;
    static connectorName(walletName: string): string;
    getConnectorName(): string;
    disconnect(): Promise<void>;
    enable(): Promise<EnabledAPI>;
    isEnabled(): Promise<boolean>;
    /**
     * This is used for retrieving the enabled wallet's injected methods
     * @returns an object of enabled CIP-30 methods to call on the connected wallet
     * or undefined if the wallet is not connected.
     */
    getConnectorAPI(): EnabledAPI | undefined;
    /**
     * @deprecated
     */
    signData(addr: string, payload: string): Promise<DataSignature>;
    /**
     * @deprecated for example purposes only
     */
    signTx(tx: string, partialSign?: boolean | undefined): Promise<string>;
    /**
     * This will call the injected wallet to see if it is still connected.
     * It makes a call to the getNetworkID method of the enabled wallet to see
     * if a response is still received.
     * If the timeout expires, it will return false.
     * @param timeout timeout in milliseconds
     * @returns true if the wallet is still interactable, false otherwise
     */
    isConnected(timeout?: number): Promise<boolean>;
    private actualConnectionCheck;
}
