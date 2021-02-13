export type ICompareFunction<T> = (a: T, b: T) => number;

export type IEqualsFunction<T> = (a: T, b: T) => boolean;

export type IDiffFunction<T> = (a: T, b: T) => number;

export const DOES_NOT_EXIST = -1;

export enum Compare { LESS_THAN = -1, BIGGER_THAN = 1, EQUALS = 0 }

export enum Colors { WHITE = 0, GRAY = 1, BLACK = 2 }

export function defaultEquals<T>(a: T, b: T): boolean {
    return a === b;
}

export function defaultCompare<T>(a: T, b: T): number {
    if (a === b) return Compare.EQUALS;
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export function default2String(item: any): string {
    if (item === null) {
        return 'NULL';
    } else if (item === undefined) {
        return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    (item as Object).toString();
}

export function swap(array: any[], a: number, b: number) {
    [array[a], array[b]] = [array[b], array[a]];
}

export function reverseCompare<T>(compareFn: ICompareFunction<T>): ICompareFunction<T> {
    return (a, b) => compareFn(b, a);
}

export function defaultDiff<T>(a: T, b: T): number {
    return Number(a) - Number(b);
}

export function lesserEquals<T>(a: T, b: T, compareFn: ICompareFunction<T>): boolean {
    const comp = compareFn(a, b);
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

export function biggerEquals<T>(a: T, b: T, compareFn: ICompareFunction<T>): boolean {
    const comp = compareFn(a, b);
    return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}
