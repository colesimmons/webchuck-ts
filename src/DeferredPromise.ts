/*
 * DeferredPromise gives us a way to resolve promises externally.
 *
 * Since ChucK is running on a different thread,
 * we interface with it via a Worker.
 * Communication happens by publishing and receiving messages.
 *
 * When we publish a message, we store a reference to a DeferredPromise
 * that we resolve when we receive the corresponding message back,
 * indicating that the requested operation has completed.
 *
 * This allows us to provide a Promise or async/await interface for ChucK operations.
 */
export default class DeferredPromise {
  public readonly promise: Promise<any>;
  public resolve: undefined | ((value?: any) => void);
  public reject: undefined | (() => void);

  public constructor() {
    this.resolve = undefined;
    this.reject = undefined;
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
