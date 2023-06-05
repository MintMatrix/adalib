import type { Cbor } from '../types/CardanoInjected';
export declare function signTx(tx: Cbor<'transaction'>, partialSign: boolean): Promise<Cbor<'transaction_witness_set'> | null | undefined>;
export declare function submitTx(tx: string): Promise<string | null>;
export declare function signData(addr: string, payload: string): Promise<import("../types/CardanoInjected").DataSignature | null>;
