import type UniversalProvider from '@walletconnect/universal-provider';
import type { Connector } from './base';
import type { EnabledAPI, WalletNames } from '../types/CardanoInjected';
export interface WalletConnectAppMetadata {
    name: string;
    description: string;
    url: string;
    icons: string[];
}
export declare class WalletConnectConnector implements Connector {
    protected _provider: UniversalProvider | undefined;
    protected qrcode: boolean;
    private enabled;
    private currentTopic;
    enabledWallet: WalletNames | undefined;
    connectedWalletAPI: EnabledAPI | undefined;
    private cleanupInternalState;
    static connectorName: () => string;
    constructor({ relayerRegion, metadata, qrcode, autoconnect }: {
        relayerRegion: string;
        metadata: WalletConnectAppMetadata;
        qrcode?: boolean;
        autoconnect?: boolean;
    });
    disconnect(): Promise<void>;
    getConnectorName(): string;
    isAvailable(): boolean;
    private set provider(value);
    private get provider();
    isEnabled(): Promise<boolean>;
    protected getProvider(): Promise<UniversalProvider>;
    /**
     * This will ping the wallet relay connection to check if it is connected
     * If the timeout expires, it will return false.
     * @param timeout timeout in milliseconds
     * @returns true if the wallet is still interactable, false otherwise
     */
    isConnected(timeout?: number): Promise<boolean>;
    private actualConnectionCheck;
    enable(): Promise<EnabledAPI>;
    getConnectorAPI(): EnabledAPI | undefined;
    /**
     * Connect to user's wallet.
     *
     * If `WalletConnectConnector` was configured with `qrcode = true`, this will
     * open a QRCodeModal, where the user will scan the qrcode and then this
     * function will resolve/return the address of the wallet.
     *
     * If `qrcode = false`, this will return the pairing URI used to generate the
     * QRCode.
     *
     * Cardano Note: We'll use cardano_ to prevent overlap in WC Modal product
     * We should rename this to `enable`
     */
    connect(): Promise<string>;
}
