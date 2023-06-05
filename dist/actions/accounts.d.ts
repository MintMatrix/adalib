import type { Chain } from '../types/chain';
export declare function connect(): Promise<import("../types/CardanoInjected").EnabledAPI | null>;
/**
 * This method returns the underlying CIP-30 implementation
 * for whichever connector is active.
 * This method may be all we need to allow the WC modal and dapps
 * to use these connectors.
 * @returns EnabledAPI
 */
export declare function getCardanoAPI(): Promise<import("../types/CardanoInjected").EnabledAPI | null | undefined>;
export declare function getChangeAddress(): Promise<string | null>;
export declare function getRewardAddress(): Promise<string | null>;
export declare function getRewardAddresses(): Promise<string[] | null>;
export declare function getBalance(): Promise<string | null>;
export declare function getCollateral(): Promise<string[] | null>;
export declare function getUsedAddresses(): Promise<string[] | null>;
export declare function getUnusedAddresses(): Promise<string[] | null>;
export declare function switchNetwork(chain: Chain): void;
export declare function getNetworkId(): Promise<number | null>;
export declare function disconnect(): Promise<void | null>;
