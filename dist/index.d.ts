declare function isInWp(): void;
declare function range(start: number, stop?: number, step?: number): number[];
declare function without(arr: any[], ...args: any[]): any[];
declare function find(arr: any[], cb: (...args: any[]) => boolean, bAll?: boolean): any;
declare function findIndex(arr: any[], cb: (...args: any[]) => boolean, all?: boolean): number | number[] | undefined;
declare function findRepeat(aItem: any[], conf?: {
    noNull: boolean;
}): any[];
declare function ascId(): string;
declare function key(): string;
declare function primaryKey(): string;
declare function outColor(info: string | {
    [key: string]: any;
}, color: string): void;
declare const _default: {
    isInWp: typeof isInWp;
    range: typeof range;
    without: typeof without;
    find: typeof find;
    findIndex: typeof findIndex;
    findRepeat: typeof findRepeat;
    ascId: typeof ascId;
    key: typeof key;
    primaryKey: typeof primaryKey;
    outColor: typeof outColor;
};
export default _default;
