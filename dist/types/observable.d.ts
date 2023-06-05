export declare type Observer<T> = (value: T) => void;
export declare class Observable<T> {
    private observers;
    private value;
    constructor(value: T);
    subscribe(subscriber: Observer<T>): void;
    unsubscribe(subscriber: Observer<T>): void;
    get(): T;
    set(value: T): void;
}
