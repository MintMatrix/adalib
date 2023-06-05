import type { Chain } from '../types/chain';
export declare function chainToId(chain: Chain): string;
export declare function cardanoMainnetWalletConnect(): {
    endpoint: string;
    chainType: string;
    name: string;
    networkId: string;
    networkMagic: string;
};
export declare function cardanoPreprodWalletConnect(): {
    endpoint: string;
    chainType: string;
    name: string;
    networkId: string;
    networkMagic: string;
};
export declare function cardanoPreviewWalletConnect(): {
    endpoint: string;
    chainType: string;
    name: string;
    networkId: string;
    networkMagic: string;
};
export declare function currentChainID(): string;
