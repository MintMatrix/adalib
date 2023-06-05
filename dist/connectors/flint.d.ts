import type { Connector } from './base';
import { InjectedConnector } from './injected';
export declare class FlintConnector extends InjectedConnector implements Connector {
    constructor();
    static connectorName(): string;
}
