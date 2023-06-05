/**
 * TODO: Place cardano wallet connect library store schema in here.
 * Update it the same way in injected and wallet-connect connectors.
 * Actually, managing localstorage wallet connection info should remain
 * a responsibility of the dapp in this particular instance.
 * This library is explicitly for connecting a wallet via walletconnect.
 * While it emulates similar functionality to the cf connect-wallet library,
 * it is not an all-in-one solution for connecting a wallet.
 */
import type { Connector } from '../connectors/base';
import type { Chain } from '../types/chain';
export interface StoreConfig {
    /**
     * List of connectors to be supported. a specific connector is chosen using
     * `connectorName`. Eg: `[new PhantomConnector()]`
     */
    connectors: Connector[];
    /**
     *  Name of the chosen connector from the `connectors` supplied.
     *  Can be accessed by statically getting the connector name,
     *  E.g: `WalletConnectConnector.connectorName`
     */
    connectorName: string;
    /**
     * Chosen network to communicate with. Options are exported. Eg:
     * `cardanoMainnetWalletConnect` which will communicate with the Cardano mainnet
     * using the connected wallet.
     */
    chosenChain: Chain;
}
export declare function getNewRequestId(): number;
export declare function setAddress(address: string): void;
export declare function getAddress(): string | undefined;
export declare function setConnectorName(connectorId: string): void;
export declare function getConnecterId(): string;
export declare function getActiveConnector(): Connector;
export declare function getConnectorIsAvailable(name: string): boolean;
export declare function setChain(chain: Chain): void;
export declare function watchAddress(callback: (address?: string) => void): () => void;
export declare function getChain(): Chain;
export declare function setProjectId(projectId: string): void;
export declare function getProjectId(): string;
export declare function getConnectors(): Connector[];
export declare function initStore(config: StoreConfig): void;
