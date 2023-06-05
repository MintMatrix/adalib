export type Observer<T> = (value: T) => void;

export class Observable<T> {
  private observers: Observer<T>[] = [];
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  subscribe(subscriber: Observer<T>): void {
    this.observers.push(subscriber);
  }

  unsubscribe(subscriber: Observer<T>): void {
    this.observers = this.observers.filter(observer => observer !== subscriber);
  }

  get(): T {
    return this.value;
  }

  set(value: T): void {
    if (this.value === value) return;
    this.value = value;
    for (const observer of this.observers) {
      observer(this.value);
    }
  }
}





