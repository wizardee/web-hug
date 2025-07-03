export declare class AsyncTimeoutError extends Error {
    code?: 'TimeOutError';
    constructor(string?: string);
}
export declare function timeout<Func extends (...args: any) => Promise<any>>(asyncFn: Func, milliseconds: number): (...args: Parameters<Func>) => Promise<ReturnType<Func>>;
export declare function poll<TData>({ fn, validate, interval, maxAttempts }: {
    fn: () => Promise<TData>;
    validate: (data: TData) => boolean;
    interval?: number;
    maxAttempts?: number;
}): Promise<TData>;
