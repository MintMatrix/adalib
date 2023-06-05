declare type HexString = string;
export declare type Cbor<_T> = string;
declare type Hash32 = string;
export interface Paginate {
    page: number;
    limit: number;
}
export interface CardanoInjectorFields {
    apiVersion: string;
    name: string;
    icon: string;
}
export interface CardanoInjectorEventMethods {
    onAccountChangeTrigger: (addresses: Cbor<'address'>[]) => Promise<undefined>;
    onNetworkChangeTrigger: (network: number) => Promise<undefined>;
}
/** Enable is, for backwards-compatibility reasons, overridden in two places */
interface EnableOverride {
    enable: () => Promise<Omit<typeof window.cardano, 'enable' | 'isEnabled'>>;
}
export declare const PER_WALLET_NAMESPACE: {
    readonly enable: "enable";
    readonly isEnabled: "isEnabled";
};
export declare type PerWalletNamespace = CardanoInjectorFields & EnableOverride & Pick<CardanoContentScriptApi, Exclude<keyof typeof PER_WALLET_NAMESPACE, 'enable'>>;
export interface DataSignature {
    signature: Cbor<'CoseSign1'>;
    key: Cbor<'CoseKey'>;
}
export declare type InjectAsWallet = [] | [string];
export declare const SUPPORTED_EXPERIMENTAL_MESSAGES: {
    readonly getCollateral: "getCollateral";
};
export declare const DEBUG_MESSAGES: {
    readonly openDebug: "openDebug";
};
export declare type CardanoContentScriptApi = CardanoInjectorEventMethods & {
    enable: () => Promise<true>;
    isEnabled: () => Promise<boolean>;
    getNetworkId: () => Promise<number>;
    getUtxos: (amount?: Cbor<'Value'>, paginate?: Paginate) => Promise<Cbor<'TransactionUnspentOutput'>[] | undefined>;
    getBalance: () => Promise<Cbor<'value'>>;
    getUsedAddresses: (paginate?: Paginate) => Promise<Cbor<'address'>[]>;
    getUnusedAddresses: (paginate?: Paginate) => Promise<Cbor<'address'>[]>;
    getChangeAddress: () => Promise<Cbor<'address'>>;
    getRewardAddress: () => Promise<Cbor<'address'>>;
    getRewardAddresses: () => Promise<Cbor<'address'>[] | undefined>;
    signTx: (tx: Cbor<'transaction'>, partialSign?: boolean) => Promise<Cbor<'transaction_witness_set'>>;
    signData: (addr: Cbor<'address'>, payload: HexString) => Promise<DataSignature>;
    submitTx: (tx: Cbor<'transaction'>) => Promise<Hash32>;
    getInjectAs?: () => Promise<InjectAsWallet>;
    openDebug?: () => Promise<undefined>;
    getCollateral: () => Promise<Cbor<'TransactionUnspentOutput'>[]>;
};
export declare type WalletNames = 'ccvault' | 'flint' | 'flintExperimental' | 'gerowallet' | 'nami' | 'typhoncip30' | 'yoroi';
/**
 * Byron genesis file protocol configs
 */
export declare const ProtocolMagic: {
    MAINNET: number;
    PREVIEW: number;
    PREPROD: number;
};
/**
 * Shelley genesis file protocol configs
 */
export declare const NetworkMagic: {
    MAINNET: number;
    PREVIEW: number;
    PREPROD: number;
};
export declare type EnabledAPI = Omit<CardanoInjectedNamespaceApi, 'enable' | 'isEnabled'>;
export interface CardanoInjectedNamespaceApi {
    getNetworkId: () => Promise<number>;
    getUtxos: (amount?: Cbor<'Value'>, paginate?: Paginate) => Promise<Cbor<'TransactionUnspentOutput'>[] | undefined>;
    getBalance: () => Promise<Cbor<'value'>>;
    getUsedAddresses: (paginate?: Paginate) => Promise<Cbor<'address'>[]>;
    getUnusedAddresses: (paginate?: Paginate) => Promise<Cbor<'address'>[]>;
    getChangeAddress: () => Promise<Cbor<'address'>>;
    getRewardAddress: () => Promise<Cbor<'address'>>;
    getRewardAddresses: () => Promise<Cbor<'address'>[]>;
    signTx: (tx: Cbor<'transaction'>, partialSign?: boolean) => Promise<Cbor<'transaction_witness_set'>>;
    signData: (addr: Cbor<'address'>, payload: HexString) => Promise<DataSignature>;
    submitTx: (tx: Cbor<'transaction'>) => Promise<Hash32>;
    getCollateral: () => Promise<Cbor<'TransactionUnspentOutput'>[]>;
    enable: () => Promise<Omit<typeof window.cardano, 'enable' | 'isEnabled'> | undefined>;
    onAccountChange: (callback: CardanoContentScriptApi['onAccountChangeTrigger']) => Promise<undefined>;
    onNetworkChange: (callback: CardanoContentScriptApi['onNetworkChangeTrigger']) => Promise<undefined>;
    nami?: PerWalletNamespace | undefined;
    ccvault?: PerWalletNamespace | undefined;
    flint?: PerWalletNamespace | undefined;
    flintExperimental?: PerWalletNamespace | undefined;
    typhoncip30?: PerWalletNamespace | undefined;
    gerowallet?: PerWalletNamespace | undefined;
    yoroi?: PerWalletNamespace | undefined;
    experimental?: Pick<CardanoContentScriptApi, keyof typeof SUPPORTED_EXPERIMENTAL_MESSAGES> | (Pick<CardanoContentScriptApi, keyof typeof DEBUG_MESSAGES> & Pick<CardanoContentScriptApi, keyof typeof SUPPORTED_EXPERIMENTAL_MESSAGES>);
}
export interface RequestMethodsCardano {
    cardano_signMessage: {
        params: {
            message: string;
            pubkey: string;
        };
        returns: {
            signature: string;
        };
    };
    cardano_signTransaction: {
        params: {
            feePayer: string;
            instructions: any[];
            recentBlockhash: string;
            signatures?: {
                pubkey: string;
                signature: string;
            }[];
        };
        returns: {
            signature: string;
        };
    };
    signMessage: {
        params: {
            message: Uint8Array;
            format: string;
        };
        returns: {
            signature: string;
        } | null;
    };
    signTransaction: {
        params: {
            message: string;
        };
        returns: {
            serialize: () => string;
        } | null;
    };
}
export {};
