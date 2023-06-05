import type { StoreConfig } from '../store';
/**
 * @param {() => StoreConfig} config Builder to produce configuration
 * @param {string} walletConnectProjectId WalletConnect Project ID.This will be used for WalletConnect services like `WalletConnectConnector`
 */
export declare function init(config: () => StoreConfig, walletConnectProjectId?: string): void;
export declare function switchConnector(connectorName: string): void;
export { setProjectId, getProjectId } from '../store/index';
