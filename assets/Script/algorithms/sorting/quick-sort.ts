import { Compare, defaultCompare, ICompareFunction, swap } from "../../util";

function partition<T>(array: T[], left: number, right: number, compareFn: ICompareFunction<T>): number {
    const pivot = array[(right + left) / 2 | 0];
    let [i, j] = [left, right];
    while (i <= j) {
        while (compareFn(array[i], pivot) === Compare.LESS_THAN) i++;
        while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) j--;
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quick<T>(array: T[], left: number, right: number, compareFn: ICompareFunction<T>): T[] {
    let index: number;
    if (array.length > 1) {
        index = partition(array, left, right, compareFn)
        if (left < index - 1) quick(array, left, index - 1, compareFn);
        if (index < right) quick(array, index, right, compareFn);
    }
    return array;
}

export function quickSort<T>(array: T[], compareFn = defaultCompare): T[] {
    return quick(array, 0, array.length - 1, compareFn);
}