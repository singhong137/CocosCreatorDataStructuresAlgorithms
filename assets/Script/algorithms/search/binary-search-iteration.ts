import { Compare, defaultCompare, DOES_NOT_EXIST } from "../../util";
import { quickSort } from "../sorting/quick-sort";

export function binarySearchIteration<T>(array: T[], value: T, compareFn = defaultCompare): number {
    const sortedArray = quickSort(array);
    let low = 0;
    let high = sortedArray.length - 1;

    while (low <= high) {
        const mid = (low + high) / 2 | 0;
        const element = sortedArray[mid];
        if (compareFn(element, value) === Compare.LESS_THAN) {
            low = mid + 1;
        } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return DOES_NOT_EXIST;
}