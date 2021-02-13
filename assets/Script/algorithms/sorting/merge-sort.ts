import { Compare, defaultCompare, ICompareFunction } from "../../util";

function merge<T>(left: T[], right: T[], compareFn: ICompareFunction<T>): T[] {
    let [i, j] = [0, 0];
    const result = [];
    while (i < left.length && j < right.length) {
        result.push(compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]);
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}
export function mergeSort<T>(array: T[], compareFn = defaultCompare): T[] {
    if (array.length > 1) {
        const length = array.length;
        const middle = length / 2 | 0;
        const left = mergeSort(array.slice(0, middle), compareFn);
        const right = mergeSort(array.slice(middle, length), compareFn);
        array = merge(left, right, compareFn);
    }
    return array;
}