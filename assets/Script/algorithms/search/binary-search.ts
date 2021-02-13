import { Compare, defaultCompare, DOES_NOT_EXIST } from "../../util";
import { quickSort } from "../sorting/quick-sort";

function binarySearchRecursive<T>(array: T[], value: T, low: number, high: number, compareFn = defaultCompare): number {
    if (low <= high) {
        const mid = (low + high) >> 1 | 0;
        const element = array[mid];
        if (compareFn(element, value) === Compare.LESS_THAN) {
            return binarySearchRecursive(array, value, mid + 1, high, compareFn);
        } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
            return binarySearchRecursive(array, value, low, mid - 1, compareFn);
        } else {
            return mid;
        }
    }
    return DOES_NOT_EXIST;
}

export function binarySearch<T>(array: T[], value: T, compareFn = defaultCompare): number {
    const sortedArray = quickSort(array);
    const low = 0;
    const high = sortedArray.length - 1;

    return binarySearchRecursive(array, value, low, high, compareFn);
}