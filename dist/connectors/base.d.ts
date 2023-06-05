import type { EnabledAPI, WalletNames } from '../types/CardanoInjected';
export interface Connector {
    enabledWallet: WalletNames | undefined;
    connectedWalletAPI: EnabledAPI | undefined;
    getConnectorName: () => string;
    getConnectorAPI: () => EnabledAPI | undefined;
    enable: () => Promise<EnabledAPI>;
    isEnabled: () => Promise<boolean>;
    isAvailable: () => boolean;
    isConnected: (timeout?: number) => Promise<boolean>;
    disconnect: () => Promise<void>;
}
export declare class BaseConnector {
    getConnectorName(): string;
    getConnectorAPI(): EnabledAPI | undefined;
    enable(): void;
    isEnabled(): void;
    isAvailable(): void;
    isConnected(): void;
}
